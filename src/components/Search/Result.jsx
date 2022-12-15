import React from "react";

import { Link } from "react-router-dom";

import TestImage from "../../assets/images/test.jpg";

const ResultItem = () => {
    return (
        <li>
            <Link to="/" className="search-results-link">
                <img src={TestImage} alt="Test" className="search-results-img" />
                <div className="search-results-content">
                    <p className="name">Shawn Mendes | Platinum Tickets</p>
                    <p className="details">Jun 25, 2023 @ 7:30pm • Wiener Stadthalle - Halle D</p>
                </div>
            </Link>
        </li>
    );
};

export default ResultItem;
