import React from "react";

import { Link } from "react-router-dom";

const CategoryCard = (props) => {
    return (
        <li className="category-card">
            <Link to={`/category/${props.name.toLowerCase()}`}>
                <figure className="category-card-figure">
                    <img src={props.image} alt={props.name} className="category-card-img" />
                    <div className="category-card-name">{props.name}</div>
                </figure>
            </Link>
        </li>
    );
};

export default CategoryCard;
