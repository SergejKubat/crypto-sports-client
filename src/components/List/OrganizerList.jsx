import React from "react";

import OrganizerCard from "../Cards/OrganizerCard";

const OrganizerList = () => {
    return (
        <div className="list" style={{ marginTop: "5rem" }}>
            <h3 className="list-heading">Organizers</h3>
            <ul className="list-content">
                <OrganizerCard />
                <OrganizerCard />
                <OrganizerCard />
                <OrganizerCard />
                <OrganizerCard />
            </ul>
        </div>
    );
};

export default OrganizerList;
