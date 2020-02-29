// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(){
        super();
        this.state={
            timesClicked : 0
        }
    }
    increment=()=>{
        this.setState((prev)=> {
            return {timesClicked: prev.timesClicked +1 }
        })
    }
    render() {
        return (
            <div>
            <button onClick={this.increment}>
                {this.state.timesClicked}
            </button >
            </div>
            )
        }
    }
    