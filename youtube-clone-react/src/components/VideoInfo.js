import React from 'react';

function VideoInfo(props) {
    return (
        <div id="video-info">
            <div id="video-title">{props.title}</div>
            <div id="video-channel">{props.channel}</div>
            <div id="video-description">{props.description}</div>
        </div>
    )
}

export default VideoInfo;
