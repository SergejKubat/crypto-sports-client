import React, { useState } from "react";

import axios from "axios";
import { GoSearch } from "react-icons/go";

import ResultItem from "./Result";
import Button from "../Form/Button";

const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const getResults = (e) => {
        const q = e.target.value.trim();

        setQuery(q);

        if (!q) {
            setResults([]);
            return;
        }

        axios
            .get(`${import.meta.env.VITE_API_URL}/search?q=${q}`)
            .then((response) => {
                setResults(response.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const submit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="search">
            <h1>Buy Tickets as NFTs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quidem.</p>
            <form autoComplete="off" noValidate className="search-form" onSubmit={submit}>
                <div className="search-field">
                    <input type="text" name="search" className="search-input" placeholder="Search for events" onChange={getResults} />
                    <GoSearch className="search-input-icon" />
                    <Button text="Search" style={{ margin: "0rem" }} />

                    {results.length > 0 ? (
                        <ul className="search-results">
                            {results.map((result) => (
                                <ResultItem key={result._id} result={result} />
                            ))}
                        </ul>
                    ) : query.length > 0 ? (
                        <ul className="search-results">
                            <p>No results.</p>
                        </ul>
                    ) : null}
                </div>
            </form>
        </div>
    );
};

export default Search;
