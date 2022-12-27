import React from "react";

import { Link } from "react-router-dom";

import TestImage from "../../assets/images/test.jpg";

const EventCard = () => {
    return (
        <li className="event-card">
            <Link to={`/events/id`}>
                <figure className="event-card-figure">
                    <img src={TestImage} alt="Event name" className="event-card-img" />
                </figure>

                <div className="event-card-content">
                    <p className="event-card-date">JAN 20, 2023 Fri • 7:00pm</p>
                    <p className="event-card-name">YG - The Red Cup Tour</p>
                    <p className="event-card-location">Fillmore Auditorium Denver, CO</p>
                </div>
            </Link>
        </li>
    );
};

export default EventCard;
