import React from "react";

import { Link } from "react-router-dom";
import { Navbar, Container /*, NavDropdown*/ } from "react-bootstrap";

import Logo from "../../assets/images/logo.png";

const Header = () => {
    return (
        <Navbar fixed="top" expand="lg" style={{ backgroundColor: "#fff" }}>
            <Container fluid>
                <Navbar.Brand className="header-logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                        <h2>
                            Crypto<span style={{ color: "#b56959" }}>Sports</span>
                        </h2>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown"></NavDropdown>*/}
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
                        <ul className="header-list">
                            <li>
                                <Link to="/login">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/register">Sing Up</Link>
                            </li>
                        </ul>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
