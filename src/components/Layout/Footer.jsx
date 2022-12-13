import React from "react";

import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-row">
                <div className="footer-col">
                    <h3>Helpful Links</h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/register">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/profile">My Account</Link>
                        </li>
                        <li>
                            <Link to="/">Help / FAQ</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>About Us</h3>
                    <ul>
                        <li>
                            <Link to="/">Who We Are</Link>
                        </li>
                        <li>
                            <Link to="/">Blog</Link>
                        </li>
                        <li>
                            <Link to="/">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/">Ticket Your Event</Link>
                        </li>
                        <li>
                            <Link to="/">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Follow Us</h3>
                    <ul className="footer-socials">
                        <li className="link">
                            <a href="#" target="_blank" rel="noreferrer">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li className="link">
                            <a href="#" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                        <li className="link">
                            <a href="#" target="_blank" rel="noreferrer">
                                <FaTwitter />
                            </a>
                        </li>
                        <li className="link">
                            <a href="#" target="_blank" rel="noreferrer">
                                <FaYoutube />
                            </a>
                        </li>
                        <li className="link">
                            <a href="#" target="_blank" rel="noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="footer-copyright">@ CryptoSports {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
