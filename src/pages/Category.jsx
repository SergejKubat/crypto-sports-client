import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import EventList from "../components/List/EventList";

import { capitalizeFirstLetter } from "../utils/format";

const CategoryPage = () => {
    const [events, setEvents] = useState([]);

    const { name } = useParams();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/events?category=${capitalizeFirstLetter(name)}`)
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);

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
            {events.length > 0 ? (
                <EventList events={events} />
            ) : (
                <div style={{ height: "30vh" }}>
                    <p className="text-center" style={{ fontSize: "1.6rem" }}>
                        No events found.
                    </p>
                </div>
            )}
        </section>
    );
};

export default CategoryPage;
