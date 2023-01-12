import React, { useContext } from "react";

import { Modal, CloseButton } from "react-bootstrap";

import MetaMaskIcon from "../../assets/images/icons/metamask.webp";
import Button from "../Form/Button";

import { WalletContext } from "../../context/WalletContext";

const ConnectWalletModal = (props) => {
    const { walletAddress, setWalletAddress } = useContext(WalletContext);

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((address) => {
                    setWalletAddress(address);

                    props.onHide();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        } else {
            alert("Please install MetaMask!");
        }
    };

    return (
        <Modal show={props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
            <Modal.Header>
                <Modal.Title as="h1">Connect Wallet</Modal.Title>
                <CloseButton style={{ fontSize: "1.6rem" }} onClick={props.onHide} />
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center">
                <img src={MetaMaskIcon} alt="MetaMask" width={150} height={150} />
                <p className="my-3" style={{ fontSize: "1.6rem" }}>
                    Connect your wallet to enter the future of ticketing!
                </p>
                <Button text="With MetaMask" onClick={connectWallet} />
            </Modal.Body>
        </Modal>
    );
};

export default ConnectWalletModal;
