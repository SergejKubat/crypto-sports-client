import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import EventList from "../components/List/EventList";
import Spinner from "../components/Spinner/Spinner";

const OrganizerPage = () => {
    const [organizer, setOrganizer] = useState(null);
    const [events, setEvents] = useState([]);

    const params = useParams();

    useEffect(() => {
        const organizerUrl = `${import.meta.env.VITE_API_URL}/organizers/${params.id}`;

        axios
            .get(organizerUrl)
            .then((response) => {
                const _organizer = response.data;

                setOrganizer(_organizer);

                axios
                    .get(`${organizerUrl}/events`)
                    .then((response) => {
                        setEvents(response.data);
                    })
                    .catch((error) => {
                        console.log(error.response);
                    });
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, [params.id]);

    return (
        <section>
            {organizer ? (
                <React.Fragment>
                    <div className="organizer-header">
                        <div className="organizer-header-container">
                            <div className="organizer-info">
                                <p>Organizer</p>
                                <h1>{organizer.name}</h1>
                                <div className="organizer-contact">
                                    {organizer.website ? (
                                        <a href={organizer.website} target="_blank" rel="noreferrer">
                                            <CgWebsite />
                                        </a>
                                    ) : null}
                                    {organizer.socialMedia.youtube ? (
                                        <a href={organizer.socialMedia.youtube} target="_blank" rel="noreferrer">
                                            <FaYoutube />
                                        </a>
                                    ) : null}
                                    {organizer.socialMedia.linkedin ? (
                                        <a href={organizer.socialMedia.linkedin} target="_blank" rel="noreferrer">
                                            <FaLinkedinIn />
                                        </a>
                                    ) : null}
                                    {organizer.socialMedia.twitter ? (
                                        <a href={organizer.socialMedia.twitter} target="_blank" rel="noreferrer">
                                            <FaTwitter />
                                        </a>
                                    ) : null}
                                    {organizer.socialMedia.instagram ? (
                                        <a href={organizer.socialMedia.instagram} target="_blank" rel="noreferrer">
                                            <FaInstagram />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                            <img src={organizer.image} alt={organizer.name} className="organizer-image" />
                        </div>
                    </div>
                    <div className="organizer-container">
                        <div className="organizer-content">
                            <h2>Info</h2>
                            <p>{organizer.description}</p>
                            {events.length > 0 ? (
                                <EventList
                                    heading={`Events (${events.length})`}
                                    events={events}
                                    style={{ marginTop: "3.6rem", padding: "0rem" }}
                                />
                            ) : null}
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <Spinner />
                </div>
            )}
        </section>
    );
};

export default OrganizerPage;
