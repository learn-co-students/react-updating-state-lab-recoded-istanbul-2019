// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(){
        super();

        this.state ={
            timesClicked : 0
        }

    }
    handler = () => {
        this.setState(perState => {
            return{
                timesClicked: perState.timesClicked + 1
            }
        })
    } 
    render() {
        return (
            <div>
                <button onClick={this.handler}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
