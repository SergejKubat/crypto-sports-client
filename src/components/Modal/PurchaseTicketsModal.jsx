import React, { useState } from "react";

import { Modal, CloseButton, Row, Col } from "react-bootstrap";

import SuccessfulPurchase from "../Purchase/SuccessfulPurchase";
import PurchaseTicketRow from "../Purchase/PurchaseTicketRow";
import Spinner from "../Spinner/Spinner";
import Button from "../Form/Button";

const PurchaseTicketsModal = (props) => {
    const [isPurchasing, setIsPurchasing] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);

    const purchase = () => {
        setIsPurchasing(true);

        setTimeout(() => {
            setIsPurchasing(false);
            setIsPurchased(true);
        }, 2000);
    };

    return (
        <Modal show={props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
            <Modal.Header>
                <Modal.Title as="h1">{isPurchasing ? "PLEASE WAIT..." : isPurchased ? "SUCCESS" : "YOUR ORDER"}</Modal.Title>
                <CloseButton style={{ fontSize: "1.6rem" }} onClick={props.onHide} />
            </Modal.Header>
            <Modal.Body>
                {isPurchasing ? (
                    <Spinner />
                ) : isPurchased ? (
                    <SuccessfulPurchase />
                ) : (
                    <React.Fragment>
                        <h2>Tickets</h2>
                        <div className="p-5">
                            {props.silverAmount ? (
                                <PurchaseTicketRow name="Silver" price={props.silverPrice} amount={props.silverAmount} />
                            ) : null}
                            {props.goldAmount ? <PurchaseTicketRow name="Gold" price={props.goldPrice} amount={props.goldAmount} /> : null}
                            {props.platinumAmount ? (
                                <PurchaseTicketRow name="Platinum" price={props.platinumPrice} amount={props.platinumAmount} />
                            ) : null}
                            {props.diamondAmount ? (
                                <PurchaseTicketRow name="Diamond" price={props.diamondPrice} amount={props.diamondAmount} />
                            ) : null}
                            <hr />
                            <Row>
                                <Col>
                                    <p className="m-0" style={{ fontSize: "1.6rem" }}>
                                        TOTAL
                                    </p>
                                </Col>
                                <Col>
                                    <p className="m-0" style={{ fontSize: "1.6rem", fontWeight: "bold", textAlign: "right" }}>
                                        {props.totalPrice.toFixed(6)} ETH
                                    </p>
                                    <p className="m-0" style={{ fontSize: "1.6rem", textAlign: "right" }}>
                                        ≈ {(props.totalPrice * props.ethUSDRatio).toFixed(3)} $
                                    </p>
                                </Col>
                            </Row>
                            <Button type="success" text="PURCHASE NOW" style={{ width: "100%", marginTop: "3rem" }} onClick={purchase} />
                        </div>
                    </React.Fragment>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default PurchaseTicketsModal;
