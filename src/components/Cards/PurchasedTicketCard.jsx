import React, { useState } from "react";

import QRCodeModal from "../Modal/QRCodeModal";
import Button from "../Form/Button";

import { formatTime, daysFullName, months } from "../../utils/date";

import { ticketTypesMap } from "../../data/ticketTypes";

const PurchasedTicketCard = (props) => {
    const [isQRCodeModalOpened, setIsQRCodeModalOpened] = useState(false);

    const ticketType = ticketTypesMap[props.ticket.type];

    const eventStartDate = new Date(props.ticket.event.startDate);

    return (
        <div className="purchased-ticket-card">
            <img
                src={props.ticket.event.tickets[ticketType].metadata.url}
                alt={`${props.ticket.event.name} ${ticketType} Ticket`}
                className="purchased-ticket-card-image"
            />
            <div className="purchased-ticket-card-details">
                <div className="date">
                    <p>{daysFullName[eventStartDate.getDay()]}</p>
                    <p className="month">
                        {months[eventStartDate.getMonth()]} {eventStartDate.getDate()}th
                    </p>
                    <p>{eventStartDate.getFullYear()}</p>
                </div>
                <div className="info">
                    <h3>{props.ticket.event.name}</h3>
                    <p>{ticketType}</p>
                </div>
                <div className="location">
                    <p>
                        <span>{props.ticket.event.location}</span> @ <span>{formatTime(eventStartDate)}</span>
                    </p>
                </div>
                <p className="purchased-ticket-card-description">{props.ticket.event.tickets[ticketType].metadata.description}</p>
            </div>
            <div className="purchased-ticket-card-actions">
                {props.ticket.used ? (
                    <p style={{ fontSize: "1.8rem" }}>Already used.</p>
                ) : (
                    <React.Fragment>
                        <Button text="Transfer" style={{ width: "15rem", marginBottom: "2rem" }} />
                        <Button text="QR Code" style={{ width: "15rem" }} onClick={() => setIsQRCodeModalOpened(true)} />
                    </React.Fragment>
                )}
            </div>
            <QRCodeModal
                show={isQRCodeModalOpened}
                ticketId={props.ticket._id}
                onHide={() => {
                    setIsQRCodeModalOpened(false);
                    props.cb();
                }}
            />
        </div>
    );
};

export default PurchasedTicketCard;
