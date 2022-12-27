import React, { useState } from "react";

import TicketImg from "../../assets/images/ticket.png";

const TicketCard = () => {
    const [quantity, setQuantity] = useState(0);

    const add = () => {
        if (quantity >= 10) {
            return;
        }

        setQuantity(quantity + 1);
    };

    const remove = () => {
        if (quantity === 0) return;

        setQuantity(quantity - 1);
    };

    return (
        <div className="ticket-card">
            <img src={TicketImg} alt="Ticket Name" className="ticket-card-image" />
            <div className="ticket-card-details">
                <h3 className="ticket-card-name">Ticket name</h3>
                <p className="ticket-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, facilis? Ex, eveniet! Ea, perspiciatis dolorum,
                    provident sapiente dolore cupiditate mollitia, porro nemo eaque ex officiis.
                </p>
                <div className="ticket-card-price">
                    <p>Price</p>
                    <p>
                        <span className="eth">0.02 ETH</span> ≈ 23 $
                    </p>
                </div>
            </div>
            <div className="ticket-card-purchase">
                <h3 className="ticket-card-purchase-title">Select</h3>
                <div className="ticket-card-quantity">
                    <button className="ticket-card-quantity-remove" onClick={() => remove()}>
                        -
                    </button>
                    <input type="number" min="0" placeholder="0" value={quantity} className="ticket-card-quantity-input" readOnly />
                    <button className="ticket-card-quantity-add" onClick={() => add()}>
                        +
                    </button>
                </div>
                <p>Available: 10</p>
            </div>
        </div>
    );
};

export default TicketCard;
