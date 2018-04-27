import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function Home(props) {
    return (
        <React.Fragment>
            <SearchBar handleChange={props.handleQueryChange} handleEnter={props.handleEnter} />
            <SearchResults videos={props.videos} />
        </React.Fragment>
    )
}

export default Home;