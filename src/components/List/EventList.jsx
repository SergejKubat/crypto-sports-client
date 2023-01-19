import React from "react";

import EventCard from "../Cards/EventCard";

const EventList = (props) => {
    console.log(props);
    return (
        <div className="list" style={props.style}>
            {props.heading ? <h3 className="list-heading">{props.heading}</h3> : null}
            <ul className="list-content">
                {props.events.map((event) => (
                    <EventCard key={event._id} event={event} />
                ))}
            </ul>
        </div>
    );
};

export default EventList;
