import React from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

function SearchResults(props) {
    return (
        <div id="search-results">
            {props.videos.map((video) => <VideoCard key={video.id.videoId} video={video} select={props.select} />)}
        </div>
    );
}

export default SearchResults;
