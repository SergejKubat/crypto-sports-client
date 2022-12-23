import React from "react";

import { FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import EventList from "../components/List/EventList";

import TestImage from "../assets/images/test.jpg";

const OrganizerPage = () => {
    return (
        <section>
            <div className="organizer-header">
                <div className="organizer-header-container">
                    <div className="organizer-info">
                        <p>Organizer</p>
                        <h1>Organizer Name</h1>
                        <div className="organizer-contact">
                            <a href="https://www.github.com" target="_blank" rel="noreferrer">
                                <CgWebsite />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                                <FaYoutube />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <img src={TestImage} alt="Organizer name" className="organizer-image" />
                </div>
            </div>
            <div className="organizer-container">
                <div className="organizer-content">
                    <h2>Info</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio blanditiis cumque reprehenderit vero
                        accusamus saepe dolorum nostrum fugiat? Accusantium ipsum, ea unde dolor praesentium quae velit aperiam eius
                        deleniti quis neque commodi magnam ab blanditiis, dolore rem? Dolorem dolore repellendus iusto mollitia doloribus
                        pariatur omnis, beatae, aliquam voluptatum necessitatibus reprehenderit sequi molestiae modi quibusdam tempore est.
                        Quia aspernatur fugit velit dolore. Nobis odit eligendi aliquid animi temporibus, quam deleniti tempore accusantium
                        vitae provident, ullam eos? Dicta est ad ipsam nihil doloremque atque a at temporibus, voluptas cum ratione suscipit
                        distinctio eaque, quos quae adipisci quidem eius sapiente eligendi, sint placeat ducimus molestiae sed. Earum aut
                        fugit quasi dolor libero dicta similique doloribus modi saepe sequi nihil temporibus a illo neque dolorum ipsam,
                        magnam cumque culpa ex hic nesciunt. Fugit odit corporis eius commodi at! Dolorem consequuntur corrupti officiis
                        facere soluta adipisci omnis, aut fugiat, iste nihil architecto, eveniet temporibus?
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quae pariatur harum minima vel quos voluptatem eaque
                        suscipit perspiciatis quidem, rem quam. Praesentium eligendi placeat officiis illum voluptas veniam, qui quas
                        officia doloremque suscipit nisi molestias inventore laboriosam quae, debitis repellendus dolores ab? Saepe error
                        alias, commodi doloribus tempora officia harum.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis facilis ea qui provident. Unde quo id
                        voluptatibus consectetur in commodi. Cupiditate, laboriosam explicabo. Minus voluptate id repellendus officiis
                        consectetur, assumenda officia praesentium incidunt est!
                    </p>
                    <EventList heading="Events (5)" style={{ marginTop: "3.6rem", padding: "0rem" }} />
                </div>
            </div>
        </section>
    );
};

export default OrganizerPage;
