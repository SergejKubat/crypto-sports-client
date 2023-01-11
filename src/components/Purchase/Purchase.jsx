import React, { useState, useEffect } from "react";

import axios from "axios";

import TicketCard from "../Cards/TicketCard";
import Button from "../Form/Button";
import PurchaseTicketsModal from "../Modal/PurchaseTicketsModal";

import TicketImg from "../../assets/images/ticket.png";

const prices = {
    Silver: 0.0001,
    Gold: 0.0003,
    Platinum: 0.0005,
    Diamond: 0.001
};

const Purchase = () => {
    const [silverAmount, setSilverAmount] = useState(0);
    const [goldAmount, setGoldAmount] = useState(0);
    const [platinumAmount, setPlatinumAmount] = useState(0);
    const [diamondAmount, setDiamondAmount] = useState(0);
    const [ticketsAvailable /*, setTicketsAvailable*/] = useState([100, 50, 25, 10]);
    const [ethUSDRatio, setEthUSDRatio] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isModalOpened, setIsModalOpened] = useState(false);

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

    const calculateTotalPrice = () => {
        const _totalPrice =
            silverAmount * prices.Silver + goldAmount * prices.Gold + platinumAmount * prices.Platinum + diamondAmount * prices.Diamond;

        setTotalPrice(_totalPrice);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [silverAmount, goldAmount, platinumAmount, diamondAmount]);

    useEffect(() => {
        // get ETH-USD ratio
        axios
            .get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
            .then((response) => {
                setEthUSDRatio(response.data.USD);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);

    return (
        <div>
            <TicketCard
                name="Silver"
                description="Lorem ipsum dolor"
                image={TicketImg}
                amount={silverAmount}
                changeAmount={(amount) => changeAmountOfTickets("silver", amount)}
                ethPrice={prices.Silver}
                ethUSDRatio={ethUSDRatio}
                available={ticketsAvailable[0]}
            />
            <TicketCard
                name="Gold"
                description="Lorem ipsum dolor"
                image={TicketImg}
                amount={goldAmount}
                changeAmount={(amount) => changeAmountOfTickets("gold", amount)}
                ethPrice={prices.Gold}
                ethUSDRatio={ethUSDRatio}
                available={ticketsAvailable[1]}
            />
            <TicketCard
                name="Platinum"
                description="Lorem ipsum dolor"
                image={TicketImg}
                amount={platinumAmount}
                changeAmount={(amount) => changeAmountOfTickets("platinum", amount)}
                ethPrice={prices.Platinum}
                ethUSDRatio={ethUSDRatio}
                available={ticketsAvailable[2]}
            />
            <TicketCard
                name="Diamond"
                description="Lorem ipsum dolor"
                image={TicketImg}
                amount={diamondAmount}
                changeAmount={(amount) => changeAmountOfTickets("diamond", amount)}
                ethPrice={prices.Diamond}
                ethUSDRatio={ethUSDRatio}
                available={ticketsAvailable[3]}
            />
            {silverAmount || goldAmount || platinumAmount || diamondAmount ? (
                <Button text="Next" style={{ display: "block", margin: "0 auto", width: "35rem" }} onClick={() => setIsModalOpened(true)} />
            ) : null}
            <PurchaseTicketsModal
                show={isModalOpened}
                silverAmount={silverAmount}
                silverPrice={prices.Silver}
                goldAmount={goldAmount}
                goldPrice={prices.Gold}
                platinumAmount={platinumAmount}
                platinumPrice={prices.Platinum}
                diamondAmount={diamondAmount}
                diamondPrice={prices.Diamond}
                totalPrice={totalPrice}
                ethUSDRatio={ethUSDRatio}
                onHide={() => setIsModalOpened(false)}
            />
        </div>
    );
};

export default Purchase;
