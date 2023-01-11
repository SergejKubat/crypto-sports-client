import React from "react";

const PurchaseTicketRow = (props) => {
    return (
        <div className="d-flex justify-content-between d-flex align-items-center my-2">
            <p className="m-0" style={{ fontSize: "1.6rem" }}>
                <b>{props.name}</b> <br /> {props.price} ETH
            </p>
            <p className="m-0" style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                x {props.amount}
            </p>
        </div>
    );
};

export default PurchaseTicketRow;
