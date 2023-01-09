import React from "react";

import { Modal, CloseButton } from "react-bootstrap";

const PurchaseTicketsModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            animation={false}
            /*dialogClassName="modal-container"*/ centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" as="h1">
                    YOUR ORDER
                </Modal.Title>
                <CloseButton style={{ fontSize: "1.6rem" }} onClick={props.onHide} />
            </Modal.Header>
            <Modal.Body>
                <h2>Tickets</h2>
                <div>Silver x1</div>
                <div>Silver x1</div>
                <div>Silver x1</div>
                <div>Silver x1</div>
            </Modal.Body>
        </Modal>
    );
};

export default PurchaseTicketsModal;
