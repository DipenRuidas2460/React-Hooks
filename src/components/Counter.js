import React, { Component } from 'react'

export default class Counter extends Component {
    componentDidUpdate(prevProp, prevState) {
        // console.log(prevProp.number);
        // console.log(this.props.number);
        
        if (prevProp.number !== this.props.number) {
            console.log("Component Update");
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}
