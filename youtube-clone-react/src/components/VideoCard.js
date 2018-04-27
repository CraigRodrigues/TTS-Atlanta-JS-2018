import React from 'react';
import { Link } from 'react-router-dom';

function VideoCard(props) {
    return (
        <div id={props.video.id.videoId} className="video-result">
            <Link to={`/video/${props.video.id.videoId}`}>
                <img src={props.video.snippet.thumbnails.medium.url} className="thumbnail"/>
                <div className="title">{props.video.snippet.title}</div>
            </Link>
            <div className="description">{props.video.snippet.description}</div>
        </div>
    )
}

export default VideoCard;
