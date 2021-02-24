import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        console.log('props',props)
        super(props)
        
    }

    render() {
        return (
            <div>
                <h1>{this.props.Data.counterItem}</h1>
                <button onClick = { () => this.props.incrmentHandller()}>increment</button>
                <button onClick= { () => this.props.decrementHandler()}>Decerement</button>
                <button>reset</button>
            </div>
        );
    }
}

export default Counter;