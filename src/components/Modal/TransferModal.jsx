import React, { useState, useContext } from "react";

import axios from "axios";
import Web3 from "web3";
import { Modal, CloseButton } from "react-bootstrap";
import validator from "validator";

import Input from "../Form/Input";
import Button from "../Form/Button";

import { WalletContext } from "../../context/WalletContext";

import SportEvent from "../../assets/contracts/SportEvent.json";

const TransferModal = (props) => {
    const [recieverAddress, setRecieverAddress] = useState("");
    const [touched, setTouched] = useState(false);

    const web3 = new Web3(window.ethereum);

    const { walletAddress } = useContext(WalletContext);

    const transferTicket = (e) => {
        e.preventDefault();

        setTouched(true);

        if (!validator.isEthereumAddress(recieverAddress)) {
            return;
        }

        if (recieverAddress === walletAddress) {
            console.log("Transfer to your own wallet is not allowed.");
            return;
        }

        // create contract instance
        const sportEvent = new web3.eth.Contract(SportEvent.abi, props.ticket.eventAddress);

        // sign tx and call contract method
        sportEvent.methods
            .transferFrom(walletAddress, recieverAddress, props.ticket.tokenId)
            .send({ from: walletAddress })
            .then(() => {
                // update ticket owner in database
                const data = { recieverAddress: recieverAddress };

                axios
                    .put(`${import.meta.env.VITE_API_URL}/tickets/${props.ticket._id}`, data, { withCredentials: true })
                    .then(() => {
                        props.onHide();
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Modal show={props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
            <Modal.Header>
                <Modal.Title as="h1">Transfer Ticket</Modal.Title>
                <CloseButton style={{ fontSize: "1.6rem" }} onClick={props.onHide} />
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off" noValidate className="login-form" onSubmit={transferTicket}>
                    <h2 className="my-4">Transfer this ticket to another wallet.</h2>
                    <Input
                        label="Reciever Wallet Address"
                        type="text"
                        value={recieverAddress}
                        onChange={setRecieverAddress}
                        touched={touched}
                        required={true}
                        errorMessage="Wallet address is not valid."
                        validateCb={(value) => value && validator.isEthereumAddress(value)}
                    />
                    <Button text="TRANSFER" />
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default TransferModal;
