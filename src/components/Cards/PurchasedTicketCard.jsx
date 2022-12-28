import React from "react";

import Button from "../Form/Button";

import TicketImg from "../../assets/images/ticket.png";

const PurchasedTicketCard = () => {
    return (
        <div className="purchased-ticket-card">
            <img src={TicketImg} alt="Ticket Name" className="purchased-ticket-card-image" />
            <div className="purchased-ticket-card-details">
                <div className="date">
                    <p>FRIDAY</p>
                    <p className="month">JAN 20th</p>
                    <p>2023</p>
                </div>
                <div className="info">
                    <h3>Event Name</h3>
                    <p>Ticket Name</p>
                </div>
                <div className="location">
                    <p>
                        <span>Fillmore Auditorium Denver, CO</span> @ <span>7:00 PM</span>
                    </p>
                </div>
                <p className="purchased-ticket-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, facilis? Ex, eveniet! Ea, perspiciatis dolorum,
                    provident sapiente dolore cupiditate mollitia, porro nemo eaque ex officiis.
                </p>
            </div>
            <div className="purchased-ticket-card-actions">
                <Button text="Transfer" />
                <Button text="QR Code" />
            </div>
        </div>
    );
};

export default PurchasedTicketCard;
