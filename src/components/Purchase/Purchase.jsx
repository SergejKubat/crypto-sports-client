import React from "react";

import TicketCard from "../Cards/TicketCard";
import Button from "../Form/Button";

const Purchase = () => {
    return (
        <div>
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <Button text="Next" type="success" style={{ width: "35rem", margin: "0 auto" }} />
        </div>
    );
};

export default Purchase;
