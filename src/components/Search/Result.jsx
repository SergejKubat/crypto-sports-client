import React from "react";

import { Link } from "react-router-dom";

import { formatDate } from "../../utils/date";

const ResultItem = (props) => {
    return (
        <li>
            <Link to={`/events/${props.result._id}`} className="search-results-link">
                <img src={props.result.image} alt={props.result.name} className="search-results-img" />
                <div className="search-results-content">
                    <p className="name">{props.result.name}</p>
                    <p className="details">
                        {formatDate(props.result.startDate)} • {props.result.location}
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default ResultItem;
