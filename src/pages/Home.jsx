import React from "react";

import Search from "../components/Search/Search";
import CategoryList from "../components/List/CategoryList";
import EventList from "../components/List/EventList";
import OrganizerList from "../components/List/OrganizerList";

const HomePage = () => {
    return (
        <section>
            <Search />
            <div style={{ padding: "5rem 0" }}>
                <CategoryList />
                <EventList heading="Football" />
                <EventList heading="Basketball" />
                <EventList heading="Tenis" />
                <EventList heading="Volleyball" />
                <OrganizerList />
            </div>
        </section>
    );
};

export default HomePage;
