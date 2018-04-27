import React, { Component } from 'react';

export default class CounterButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.onCountChange}>{this.props.sign}</button>
        );
    }
}