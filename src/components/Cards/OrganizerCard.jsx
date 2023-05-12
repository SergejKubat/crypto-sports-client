import React from "react";

import { Link } from "react-router-dom";

const OrganizerCard = (props) => {
    return (
        <li className="organizer-card">
            <Link to={`/organizers/${props.organizer._id}`}>
                <figure className="organizer-card-figure">
                    <img src={props.organizer.image} alt={props.organizer.name} className="organizer-card-img" />
                    <div className="organizer-card-details">
                        <p className="organizer-card-name">{props.organizer.name}</p>
                        <p className="organizer-card-events">{props.organizer.eventsCount ? props.organizer.eventsCount : 0} Events</p>
                    </div>
                </figure>
            </Link>
        </li>
    );
};

export default OrganizerCard;
