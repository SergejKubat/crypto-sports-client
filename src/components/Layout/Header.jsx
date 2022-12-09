import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                    <h2>
                        Crypto<span style={{ color: "#b56959" }}>Sports</span>
                    </h2>
                </Link>
            </div>
            <nav className="header-nav">
                <ul className="header-list">
                    <li>
                        <Link to="/">Football</Link>
                    </li>
                    <li>
                        <Link to="/">Basketball</Link>
                    </li>
                    <li>
                        <Link to="/">Tenis</Link>
                    </li>
                    <li>
                        <Link to="/">Volleyball</Link>
                    </li>
                    <li>
                        <Link to="/">Boxing</Link>
                    </li>
                </ul>
                <ul className="header-list">
                    <li>
                        <Link to="/login">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/register">Sing Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
