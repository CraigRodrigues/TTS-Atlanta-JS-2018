import React from 'react';

function SearchBar(props) {
    return (
        <div id="search-bar">
            <input id="search-input" onChange={props.handleChange} onKeyPress={props.handleEnter} type="text" placeholder="Search" />
        </div>
    );
}

export default SearchBar;
