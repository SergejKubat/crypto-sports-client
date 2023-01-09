import React, { useState } from "react";

import TicketCard from "../Cards/TicketCard";
import Button from "../Form/Button";

import TicketImg from "../../assets/images/ticket.png";

const Purchase = () => {
    const [silverAmount, setSilverAmount] = useState(0);
    const [goldAmount, setGoldAmount] = useState(0);
    const [platinumAmount, setPlatinumAmount] = useState(0);
    const [diamondAmount, setDiamondAmount] = useState(0);
    const [ticketsAvailable /*, setTicketsAvailable*/] = useState([100, 50, 25, 10]);

    const changeAmountOfTickets = (type, amount) => {
        switch (type) {
            case "silver":
                setSilverAmount(amount);
                break;
            case "gold":
                setGoldAmount(amount);
                break;
            case "platinum":
                setPlatinumAmount(amount);
                break;
            case "diamond":
                setDiamondAmount(amount);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <TicketCard
                name="Silver"
                description="Lorem ipsum dolor"
                image={TicketImg}
                amount={silverAmount}
                changeAmount={(amount) => changeAmountOfTickets("silver", amount)}
                ethPrice={0.0001}
                ethUSDRatio={1281.12}
                available={ticketsAvailable[0]}
            />
            <TicketCard
                name="Gold"
                description="Lorem ipsum dolor"
                image={TicketImg}
                amount={goldAmount}
                changeAmount={(amount) => changeAmountOfTickets("gold", amount)}
                ethPrice={0.0003}
                ethUSDRatio={1281.12}
                available={ticketsAvailable[1]}
            />
            <TicketCard
                name="Platinum"
                description="Lorem ipsum dolor"
                image={TicketImg}
                amount={platinumAmount}
                changeAmount={(amount) => changeAmountOfTickets("platinum", amount)}
                ethPrice={0.0005}
                ethUSDRatio={1281.12}
                available={ticketsAvailable[2]}
            />
            <TicketCard
                name="Diamond"
                description="Lorem ipsum dolor"
                image={TicketImg}
                amount={diamondAmount}
                changeAmount={(amount) => changeAmountOfTickets("diamond", amount)}
                ethPrice={0.001}
                ethUSDRatio={1281.12}
                available={ticketsAvailable[3]}
            />
            <Button text="Next" type="success" style={{ display: "block", margin: "0 auto", width: "35rem" }} />
        </div>
    );
};

export default Purchase;
