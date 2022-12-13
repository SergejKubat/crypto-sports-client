import React from "react";

import { GoSearch } from "react-icons/go";

import Button from "../Form/Button";

const Search = () => {
    const submit = (e) => {
        e.preventDefault();

        console.log("search");
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
                        /*value={query}
                    onChange={fetchResults}*/
                    />
                    <GoSearch className="search-input-icon" />
                    <Button text="Search" />
                    <ul className="search-results">
                        <p>No results.</p>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default Search;
