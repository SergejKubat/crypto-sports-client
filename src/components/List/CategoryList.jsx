import React from "react";

import CategoryCard from "../Cards/CategoryCard";

import FootballImage from "../../assets/images/category/football.jpg";
import BasketballImage from "../../assets/images/category/basketball.jpg";
import TennisImage from "../../assets/images/category/tennis.jpg";
import VolleyballImage from "../../assets/images/category/volleyball.jpg";

const categories = [
    {
        name: "Football",
        image: FootballImage
    },
    {
        name: "Basketball",
        image: BasketballImage
    },
    {
        name: "Tennis",
        image: TennisImage
    },
    {
        name: "Volleyball",
        image: VolleyballImage
    }
];

const CategoryList = (props) => {
    return (
        <div className="list" style={{ marginBottom: "5rem" }}>
            <h3 className="list-heading">Browse by Category</h3>
            <ul className="list-content">
                {categories.map((category) => (
                    <CategoryCard key={category.name} name={category.name} image={category.image} />
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
