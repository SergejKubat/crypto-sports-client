import React from "react";

import PurchasedTicketCard from "../../components/Cards/PurchasedTicketCard";

const MyTickets = () => {
    return (
        <section className="my-tickets">
            <div className="my-tickets-container">
                <h1>My Tickets</h1>
                <h2 style={{ marginTop: "2.5rem" }}>Upcoming (2)</h2>
                <PurchasedTicketCard />
                <PurchasedTicketCard />
                <h2 style={{ marginTop: "3.5rem" }}>Archived (1)</h2>
                <PurchasedTicketCard />
            </div>
        </section>
    );
};

export default MyTickets;
