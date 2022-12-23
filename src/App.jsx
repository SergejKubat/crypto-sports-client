import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import EventPage from "./pages/Event";
import CategoryPage from "./pages/Category";
import OrganizerPage from "./pages/Organizer";
import ProfileDetailsPage from "./pages/Profile/Details";
import MyTicketsPage from "./pages/Profile/Details";
import ForgottenPasswordPage from "./pages/ForgottenPassword";
import ResetPasswordPage from "./pages/ResetPassword";
import NotFoundPage from "./pages/NotFound";

import ScrollToTop from "./components/Layout/ScrollToTop";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/event/:id" element={<EventPage />} />
                <Route path="/organizer/:id" element={<OrganizerPage />} />
                <Route path="/category/:name" element={<CategoryPage />} />
                <Route path="/profile" element={<ProfileDetailsPage />} />
                <Route path="/profile/my-tickets" element={<MyTicketsPage />} />
                <Route path="/forgotten-password" element={<ForgottenPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
