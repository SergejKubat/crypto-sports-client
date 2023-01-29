import React, { useState, useContext } from "react";

import axios from "axios";
import Web3 from "web3";
import QRCode from "react-qr-code";
import { Modal, CloseButton } from "react-bootstrap";

import Button from "../Form/Button";

import { WalletContext } from "../../context/WalletContext";

const QRCodeModal = (props) => {
    const [code, setCode] = useState("");

    const web3 = new Web3(window.ethereum);

    const { walletAddress } = useContext(WalletContext);

    const showQRCode = async () => {
        const ticketId = props.ticketId;

        const message = `In order to see the QR code, you must sign this message first.\n\nNonce: ${ticketId}`;

        const signature = await web3.eth.personal.sign(message, walletAddress).catch(() => {
            console.log("You denied message signature!");
        });

        const data = {
            walletAddress: walletAddress,
            signature: signature
        };

        axios
            .post(`${import.meta.env.VITE_API_URL}/tickets/${ticketId}/getQRCode`, data, { withCredentials: true })
            .then((response) => {
                setCode(response.data.code);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    const hide = () => {
        setCode("");

        props.onHide();
    };

    return (
        <Modal show={props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
            <Modal.Header>
                <Modal.Title as="h1">QR Code</Modal.Title>
                <CloseButton style={{ fontSize: "1.6rem" }} onClick={hide} />
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center p-5">
                {code ? (
                    <QRCode value={code} size={256} viewBox={`0 0 256 256`} />
                ) : (
                    <React.Fragment>
                        <h2 style={{ fontSize: "2.8rem" }}>Warning</h2>
                        <p className="my-4" style={{ fontSize: "1.6rem" }}>
                            You can preview QR Code only once!
                        </p>
                        <Button text="Show QR Code" onClick={showQRCode} />
                    </React.Fragment>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default QRCodeModal;
