import React from "react";

import { useParams } from "react-router-dom";

import EventList from "../components/List/EventList";

import { capitalizeFirstLetter } from "../utils/format";

const CategoryPage = () => {
    const { name } = useParams();

    return (
        <section>
            <div className="category-header">
                <h1>
                    <b>{capitalizeFirstLetter(name)}</b> Events
                </h1>
                <p>
                    Browse All <b>{capitalizeFirstLetter(name)}</b> Events
                </p>
            </div>
            <EventList />
        </section>
    );
};

export default CategoryPage;
