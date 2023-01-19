import React, { useState, useEffect } from "react";

import axios from "axios";

import Search from "../components/Search/Search";
import CategoryList from "../components/List/CategoryList";
import EventList from "../components/List/EventList";
import OrganizerList from "../components/List/OrganizerList";

const HomePage = () => {
    const [footballEvents, setFootballEvents] = useState([]);
    const [basketballEvents, setBasketballEvents] = useState([]);
    const [tenisEvents, setTenisEvents] = useState([]);
    const [volleyballEvents, setVolleyballEvents] = useState([]);
    const [organizers, setOrganizers] = useState([]);

    useEffect(() => {
        axios
            .all([
                axios.get(`${import.meta.env.VITE_API_URL}/events?category=Football`),
                axios.get(`${import.meta.env.VITE_API_URL}/events?category=Basketball`),
                axios.get(`${import.meta.env.VITE_API_URL}/events?category=Tenis`),
                axios.get(`${import.meta.env.VITE_API_URL}/events?category=Volleyball`),
                axios.get(`${import.meta.env.VITE_API_URL}/organizers`)
            ])
            .then(
                axios.spread((response1, response2, response3, response4, response5) => {
                    setFootballEvents(response1.data);
                    setBasketballEvents(response2.data);
                    setTenisEvents(response3.data);
                    setVolleyballEvents(response4.data);
                    setOrganizers(response5.data);
                })
            );
    }, []);

    return (
        <section>
            <Search />
            <div style={{ padding: "5rem 0" }}>
                <CategoryList />
                {footballEvents.length > 0 ? <EventList heading="Football" events={footballEvents} /> : null}
                {basketballEvents.length > 0 ? <EventList heading="Basketball" events={basketballEvents} /> : null}
                {tenisEvents.length > 0 ? <EventList heading="Tenis" events={tenisEvents} /> : null}
                {volleyballEvents.length > 0 ? <EventList heading="Volleyball" events={volleyballEvents} /> : null}
                <OrganizerList organizers={organizers} />
            </div>
        </section>
    );
};

export default HomePage;
