import React from "react";

import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

import Purchase from "../components/Purchase/Purchase";
import EventList from "../components/List/EventList";

import TestImage from "../assets/images/test.jpg";

const EventPage = () => {
    return (
        <section>
            <div className="event-header">
                <div className="event-header-container">
                    <div className="event-info">
                        <p>Football</p>
                        <h1>Event Name</h1>
                        <p>
                            <Link to={`/organizers/id`}>Organizer name</Link>
                        </p>
                    </div>
                    <img src={TestImage} alt="Event name" className="event-image" />
                </div>
            </div>
            <div className="event-container">
                <div className="event-content">
                    <div className="event-details">
                        <div className="event-data">
                            <p>
                                <BiTime className="icon" /> Date
                            </p>
                            <p>JAN 20, 2023 Fri • 7:00pm</p>
                        </div>
                        <div className="event-data">
                            <p>
                                <GoLocation className="icon" /> Venue
                            </p>
                            <p>Fillmore Auditorium Denver, CO</p>
                        </div>
                    </div>
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
                    <h2>Tickets</h2>
                    <Purchase />
                    <EventList heading="Related Events" style={{ marginTop: "3.6rem", padding: "0rem" }} />
                </div>
            </div>
        </section>
    );
};

export default EventPage;
