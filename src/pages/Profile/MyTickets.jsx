import React, { useState, useEffect } from "react";

import axios from "axios";

import PurchasedTicketCard from "../../components/Cards/PurchasedTicketCard";

const MyTickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/tickets`, { withCredentials: true })
            .then((response) => {
                setTickets(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);

    return (
        <section className="my-tickets">
            <div className="my-tickets-container">
                <h1 style={{ marginBottom: "5rem" }}>My Tickets {tickets.length > 0 ? `(${tickets.length})` : null}</h1>
                {tickets.length > 0 ? (
                    tickets.map((ticket) => <PurchasedTicketCard key={ticket._id} ticket={ticket} />)
                ) : (
                    <div style={{ height: "30vh" }}>
                        <p className="text-center" style={{ fontSize: "1.6rem" }}>
                            You have no tickets.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyTickets;
