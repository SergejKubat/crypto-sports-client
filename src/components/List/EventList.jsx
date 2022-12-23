import React from "react";

import EventCard from "../Cards/EventCard";

const EventList = (props) => {
    return (
        <div className="list">
            {props.heading ? <h3 className="list-heading">{props.heading}</h3> : null}
            <ul className="list-content">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </ul>
        </div>
    );
};

export default EventList;
