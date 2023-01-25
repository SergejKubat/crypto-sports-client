import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

import Purchase from "../components/Purchase/Purchase";
import EventList from "../components/List/EventList";
import Spinner from "../components/Spinner/Spinner";

import { formatDate } from "../utils/date";

const EventPage = () => {
    const [event, setEvent] = useState();
    const [organizer, setOrganizer] = useState();
    const [relatedEvents, setRelatedEvents] = useState([]);

    const params = useParams();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/events/${params.id}`)
            .then((response) => {
                const _event = response.data;

                setEvent(_event);

                // get organizer
                axios
                    .get(`${import.meta.env.VITE_API_URL}/organizers/${_event.organizer}`)
                    .then((response) => {
                        setOrganizer(response.data);
                    })
                    .catch((error) => {
                        console.log(error.response);
                    });

                // get related events
                axios
                    .get(`${import.meta.env.VITE_API_URL}/events?category=${_event.category}`)
                    .then((response) => {
                        const _relatedEvents = response.data;

                        const _filteredRelatedEvents = _relatedEvents.filter((event) => event._id !== params.id);

                        setRelatedEvents(_filteredRelatedEvents);
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
            {event ? (
                <React.Fragment>
                    <div className="event-header">
                        <div className="event-header-container">
                            <div className="event-info">
                                <p>{event.category}</p>
                                <h1>{event.name}</h1>
                                {organizer ? (
                                    <p>
                                        <Link to={`/organizers/${organizer._id}`}>{organizer.name}</Link>
                                    </p>
                                ) : null}
                            </div>
                            <img src={event.image} alt={event.name} className="event-image" />
                        </div>
                    </div>
                    <div className="event-container">
                        <div className="event-content">
                            <div className="event-details">
                                <div className="event-data">
                                    <p>
                                        <BiTime className="icon" /> Date
                                    </p>
                                    <p>{formatDate(event.startDate)}</p>
                                </div>
                                <div className="event-data">
                                    <p>
                                        <GoLocation className="icon" /> Venue
                                    </p>
                                    <p>{event.location}</p>
                                </div>
                            </div>
                            <h2>Info</h2>
                            <p>{event.description}</p>
                            <h2 className="mt-5">Tickets</h2>
                            <Purchase tickets={event.tickets} contractAddress={event.contractAddress} />
                            {relatedEvents.length > 0 ? (
                                <EventList
                                    heading="Related Events"
                                    events={relatedEvents}
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

export default EventPage;
