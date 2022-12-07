import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Event from "./pages/Event";
import Organizer from "./pages/Organizer";
import ProfileDetails from "./pages/Profile/Details";
import MyTickets from "./pages/Profile/Details";
import NotFound from "./pages/NotFound";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/events/:id" element={<Event />} />
                <Route path="/organizers/:id" element={<Organizer />} />
                <Route path="/profile" element={<ProfileDetails />} />
                <Route path="/profile/my-tickets" element={<MyTickets />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
