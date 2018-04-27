import axios from 'axios';

import React, { Component } from 'react';
import { Route } from "react-router-dom";

import { API_KEY } from '../config';
import Logo from './Logo';
import Home from './Home';
import Video from './Video';

export default class App extends Component {
    constructor() {
        super();

        this.state = { videos: [], query: '' };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleQueryChange = this.handleQueryChange.bind(this);
    }

    componentDidMount() {
        this.searchYoutube(this.state.query);
    }

    searchYoutube(query = '') {
        return axios.get(`https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=15&part=snippet&key=${API_KEY}`)
            .then(({data}) => this.setState({ videos: data.items }))
            .catch((err) => console.error(err));
    }

    handleEnter(e) {
        if (e.which === 13) {
            this.searchYoutube(this.state.query);
        }
    }
    
    handleQueryChange(e) {
        this.setState({ query: e.target.value });
    }

    render() {
        return (
            <React.Fragment>
                <Logo />
                <Route
                    exact path="/"
                    render={(props) => <Home videos={this.state.videos} handleQueryChange={this.handleQueryChange} handleEnter={this.handleEnter}/>}
                />
                <Route path="/video/:id" component={Video} />
            </React.Fragment>
        )
    }
}
