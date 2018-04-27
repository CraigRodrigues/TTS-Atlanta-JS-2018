import React, { Component } from 'react';
import CounterButton from './CounterButton';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
    }

    handleUp() {
        this.setState({ count: ++this.state.count });
    }

    handleDown() {
        this.setState({ count: --this.state.count });
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.count}</h1>
                </div>
                <div>
                    <CounterButton onCountChange={this.handleUp} sign='+' />
                    <CounterButton onCountChange={this.handleDown} sign='-' />
                </div>
            </div>
        );
    }
}