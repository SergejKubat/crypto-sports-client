import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import TicketCard from "../Cards/TicketCard";
import Button from "../Form/Button";
import PurchaseTicketsModal from "../Modal/PurchaseTicketsModal";
import ConnectWalletModal from "../Modal/ConnectWalletModal";

import { UserContext } from "../../context/UserContext";
import { WalletContext } from "../../context/WalletContext";

const Purchase = (props) => {
    const [silverAmount, setSilverAmount] = useState(0);
    const [goldAmount, setGoldAmount] = useState(0);
    const [platinumAmount, setPlatinumAmount] = useState(0);
    const [diamondAmount, setDiamondAmount] = useState(0);
    const [ticketsAvailable /*, setTicketsAvailable*/] = useState([100, 50, 25, 10]);
    const [ethUSDRatio, setEthUSDRatio] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [isModalOpenedWallet, setIsModalOpenedWallet] = useState(false);

    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    const { walletAddress } = useContext(WalletContext);

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
        const silverPrice = props.tickets.Silver ? props.tickets.Silver.price : 0;
        const goldPrice = props.tickets.Gold ? props.tickets.Gold.price : 0;
        const platinumPrice = props.tickets.Platinum ? props.tickets.Platinum.price : 0;
        const diamondPrice = props.tickets.Diamond ? props.tickets.Diamond.price : 0;

        const _totalPrice =
            silverAmount * silverPrice + goldAmount * goldPrice + platinumAmount * platinumPrice + diamondAmount * diamondPrice;

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
            {props.tickets.Silver ? (
                <TicketCard
                    name="Silver"
                    description={props.tickets.Silver.metadata.description}
                    image={props.tickets.Silver.metadata.url}
                    amount={silverAmount}
                    changeAmount={(amount) => changeAmountOfTickets("silver", amount)}
                    ethPrice={props.tickets.Silver.price}
                    ethUSDRatio={ethUSDRatio}
                    available={props.tickets.Silver.amount}
                />
            ) : null}
            {props.tickets.Gold ? (
                <TicketCard
                    name="Gold"
                    description={props.tickets.Gold.metadata.description}
                    image={props.tickets.Gold.metadata.url}
                    amount={goldAmount}
                    changeAmount={(amount) => changeAmountOfTickets("gold", amount)}
                    ethPrice={props.tickets.Gold.price}
                    ethUSDRatio={ethUSDRatio}
                    available={props.tickets.Gold.amount}
                />
            ) : null}
            {props.tickets.Platinum ? (
                <TicketCard
                    name="Platinum"
                    description={props.tickets.Platinum.metadata.description}
                    image={props.tickets.Platinum.metadata.url}
                    amount={platinumAmount}
                    changeAmount={(amount) => changeAmountOfTickets("platinum", amount)}
                    ethPrice={props.tickets.Platinum.price}
                    ethUSDRatio={ethUSDRatio}
                    available={props.tickets.Platinum.amount}
                />
            ) : null}
            {props.tickets.Diamond ? (
                <TicketCard
                    name="Diamond"
                    description={props.tickets.Diamond.metadata.description}
                    image={props.tickets.Diamond.metadata.url}
                    amount={diamondAmount}
                    changeAmount={(amount) => changeAmountOfTickets("diamond", amount)}
                    ethPrice={props.tickets.Diamond.price}
                    ethUSDRatio={ethUSDRatio}
                    available={props.tickets.Diamond.amount}
                />
            ) : null}
            {silverAmount || goldAmount || platinumAmount || diamondAmount ? (
                user ? (
                    walletAddress ? (
                        <Button
                            text="Next"
                            style={{ display: "block", margin: "0 auto", width: "35rem" }}
                            onClick={() => setIsModalOpened(true)}
                        />
                    ) : (
                        <Button
                            text="Connect Wallet"
                            style={{ display: "block", margin: "0 auto", width: "35rem" }}
                            onClick={() => setIsModalOpenedWallet(true)}
                        />
                    )
                ) : (
                    <Button
                        text="Sign In"
                        style={{ display: "block", margin: "0 auto", width: "35rem" }}
                        onClick={() => navigate("/login")}
                    />
                )
            ) : null}
            <PurchaseTicketsModal
                show={isModalOpened}
                silverAmount={silverAmount}
                silverPrice={props.tickets.Silver ? props.tickets.Silver.price : null}
                goldAmount={goldAmount}
                goldPrice={props.tickets.Gold ? props.tickets.Gold.price : null}
                platinumAmount={platinumAmount}
                platinumPrice={props.tickets.Platinum ? props.tickets.Platinum.price : null}
                diamondAmount={diamondAmount}
                diamondPrice={props.tickets.Diamond ? props.tickets.Diamond.price : null}
                totalPrice={totalPrice}
                ethUSDRatio={ethUSDRatio}
                onHide={() => setIsModalOpened(false)}
            />
            <ConnectWalletModal show={isModalOpenedWallet} onHide={() => setIsModalOpenedWallet(false)} />
        </div>
    );
};

export default Purchase;
