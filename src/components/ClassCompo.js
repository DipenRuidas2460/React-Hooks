import React, { Component } from 'react'
// import Counter from './Counter';
import Counter1 from './Counter1';

export default class ClassCompo extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("Class Component Mounting!!");
    }

    increment(){
        this.setState({count: this.state.count + 1})
    }

    // componentWillUnmount(){
    //     console.log("Component Unmount!!");
    // }

    render() {
        return (
            <div>
                {/* <Counter number={this.state.count}/> */}
                <Counter1 number={this.state.count}/>
                <button onClick={() => {this.increment()}}>Click me</button>
            </div>
        )
    }
}
