import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";

import ResultItem from "./Result";
import Button from "../Form/Button";

const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const navigate = useNavigate();

    const getResults = (e) => {
        const _query = e.target.value.trim();

        setQuery(_query);

        if (!_query) {
            setResults([]);
            return;
        }

        // get results
        setResults([1, 2, 3, 4]);
    };

    const submit = (e) => {
        e.preventDefault();

        if (query) {
            navigate(`/search?q=${query}`);
        }
    };

    return (
        <div className="search">
            <h1>Buy Tickets as NFTs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quidem.</p>
            <form autoComplete="off" noValidate className="search-form" onSubmit={submit}>
                <div className="search-field">
                    <input
                        type="text"
                        name="search"
                        className="search-input"
                        placeholder="Search for events"
                        value={query}
                        onChange={getResults}
                    />
                    <GoSearch className="search-input-icon" />
                    <Button text="Search" />

                    {results.length > 0 ? (
                        <ul className="search-results">
                            {results.map((result) => (
                                <ResultItem key={result} />
                            ))}
                        </ul>
                    ) : query.length > 0 ? (
                        <ul className="search-results">
                            <ul className="search-results">
                                <p>No results.</p>
                            </ul>
                        </ul>
                    ) : null}
                </div>
            </form>
        </div>
    );
};

export default Search;
