import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import EventPage from "./pages/Event";
import CategoryPage from "./pages/Category";
import OrganizerPage from "./pages/Organizer";
import ProfilePage from "./pages/Profile/Details";
import MyTicketsPage from "./pages/Profile/MyTickets";
import ForgottenPasswordPage from "./pages/ForgottenPassword";
import ResetPasswordPage from "./pages/ResetPassword";
import NotFoundPage from "./pages/NotFound";

import ScrollToTop from "./components/Layout/ScrollToTop";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

import { UserContext } from "./context/UserContext";
import { WalletContext } from "./context/WalletContext";

const App = () => {
    const [user, setUser] = useState(null);
    const [walletAddress, setWalletAddress] = useState(window.ethereum ? window.ethereum.selectedAddress : null);

    const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    const walletValue = useMemo(() => ({ walletAddress, setWalletAddress }), [walletAddress, setWalletAddress]);

    return (
        <Router>
            <UserContext.Provider value={userValue}>
                <WalletContext.Provider value={walletValue}>
                    <ScrollToTop />
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="events/:id" element={<EventPage />} />
                        <Route path="organizers/:id" element={<OrganizerPage />} />
                        <Route path="category/:name" element={<CategoryPage />} />
                        <Route path="forgotten-password" element={<ForgottenPasswordPage />} />
                        <Route path="reset-password" element={<ResetPasswordPage />} />
                        <Route path="/profile" element={<ProfilePage />}></Route>
                        <Route path="/my-tickets" element={<MyTicketsPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Footer />
                </WalletContext.Provider>
            </UserContext.Provider>
        </Router>
    );
};

export default App;
