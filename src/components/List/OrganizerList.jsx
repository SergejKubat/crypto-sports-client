import React from "react";

import OrganizerCard from "../Cards/OrganizerCard";

const OrganizerList = (props) => {
    return (
        <div className="list" style={{ marginTop: "5rem" }}>
            <h3 className="list-heading">Organizers</h3>
            <ul className="list-content">
                {props.organizers.map((organizer) => (
                    <OrganizerCard key={organizer._id} organizer={organizer} />
                ))}
            </ul>
        </div>
    );
};

export default OrganizerList;
