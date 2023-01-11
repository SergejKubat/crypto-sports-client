import React from "react";

import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import Button from "../Form/Button";

const SuccessfulPurchase = () => {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <FaCheckCircle style={{ fontSize: "15rem", color: "#28a745" }} />
            <h2 className="my-5">The purchase is successful!</h2>
            <Button type="success" text="View Tickets" style={{ width: "25rem" }} onClick={() => navigate("/my-tickets")} />
        </div>
    );
};

export default SuccessfulPurchase;
