import React from "react";

const TicketCard = (props) => {
    const add = () => {
        if (props.amount >= props.available) {
            return;
        }

        props.changeAmount(props.amount + 1);
    };

    const remove = () => {
        if (props.amount === 0) return;

        props.changeAmount(props.amount - 1);
    };

    return (
        <div className="ticket-card">
            <img src={props.image} alt={props.name} className="ticket-card-image" />
            <div className="ticket-card-details">
                <h3 className="ticket-card-name">{props.name}</h3>
                <p className="ticket-card-description">{props.description}</p>
                <div className="ticket-card-price">
                    <p className="m-0">Price</p>
                    <p>
                        <span className="eth">{props.ethPrice} ETH</span> ≈ {(props.ethPrice * props.ethUSDRatio).toFixed(3)} $
                    </p>
                </div>
            </div>
            <div className="ticket-card-purchase">
                <h3 className="ticket-card-purchase-title">Select</h3>
                <div className="ticket-card-quantity">
                    <button className="ticket-card-quantity-remove" onClick={() => remove()}>
                        -
                    </button>
                    <input type="number" min="0" placeholder="0" value={props.amount} className="ticket-card-quantity-input" readOnly />
                    <button className="ticket-card-quantity-add" onClick={() => add()}>
                        +
                    </button>
                </div>
                <p>Available: {props.available}</p>
            </div>
        </div>
    );
};

export default TicketCard;
