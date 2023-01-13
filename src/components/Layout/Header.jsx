import React, { useState, useEffect, useContext } from "react";

import { Link, useLocation } from "react-router-dom";
import { Navbar, NavDropdown, Container } from "react-bootstrap";

import { UserContext } from "../../context/UserContext";

import Logo from "../../assets/images/logo.png";

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const { pathname } = useLocation();

    const { user } = useContext(UserContext);

    useEffect(() => {
        setIsExpanded(false);
    }, [pathname]);

    return (
        <Navbar fixed="top" expand="lg" expanded={isExpanded} style={{ padding: 0, backgroundColor: "#fff" }}>
            <Container fluid>
                <Navbar.Brand className="header-logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                        <h2>
                            Crypto<span style={{ color: "#b56959" }}>Sports</span>
                        </h2>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsExpanded(!isExpanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <nav className="header-nav">
                        <ul className="header-list">
                            <li>
                                <Link to="/category/football">Football</Link>
                            </li>
                            <li>
                                <Link to="/category/basketball">Basketball</Link>
                            </li>
                            <li>
                                <Link to="/category/tennis">Tennis</Link>
                            </li>
                            <li>
                                <Link to="/category/volleyball">Volleyball</Link>
                            </li>
                        </ul>
                        {user ? (
                            <NavDropdown title="username" id="navbarScrollingDropdown">
                                <NavDropdown.Item as="div">
                                    <Link to="/profile">Account</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item as="div">
                                    <Link to="my-tickets">My Tickets</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as="div">Sign Out</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <ul className="header-list user">
                                <li>
                                    <Link to="/login">Sign In</Link>
                                </li>
                                <li>
                                    <Link to="/register">Sing Up</Link>
                                </li>
                            </ul>
                        )}
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
