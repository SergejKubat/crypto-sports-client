import React from "react";

import { Link } from "react-router-dom";

import TestImage from "../../assets/images/test.jpg";

const OrganizerCard = () => {
    return (
        <li className="organizer-card">
            <Link to={`/organizer/id`}>
                <figure className="organizer-card-figure">
                    <img src={TestImage} alt="organizer name" className="organizer-card-img" />
                    <div className="organizer-card-details">
                        <p className="organizer-card-name">Dallas Cowboys</p>
                        <p className="organizer-card-events">5 Events</p>
                    </div>
                </figure>
            </Link>
        </li>
    );
};

export default OrganizerCard;
