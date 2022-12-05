import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Event from "./pages/Event";
import Organizer from "./pages/Organizer";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events/:id" element={<Event />} />
            <Route path="/organizers/:id" element={<Organizer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
