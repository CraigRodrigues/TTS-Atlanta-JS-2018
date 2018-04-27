import axios from 'axios'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VideoInfo from './VideoInfo';

export default class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            video: {
                id: { videoId: '' },
                snippet: {
                    title: '',
                    channelTitle: '',
                    description: ''
                }
            }
        }
    }

    componentDidMount() {
        this.getVideoInfo(this.props.match.params.id);
    }

    getVideoInfo(id) {
        return axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&key=AIzaSyB5qcuk8DhmNW3hA4ScMohHqgK8VtHDWg8`)
            .then(({data}) => this.setState({ video: data.items[0] }))
            .catch((err) => console.error(err));
    }

    render() {
        let { video } = this.state;

        return (
            <React.Fragment>
                <iframe width="608" height="342" src={`http://www.youtube.com/embed/${video.id}`} />
                <VideoInfo title={video.snippet.title} channel={video.snippet.channelTitle} description={video.snippet.description} />
                <Link to='/'>
                    <button id="home-button">Back to Homepage</button>
                </Link>
            </React.Fragment>
        )
    }
}
