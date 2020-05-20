// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {
    constructor(){
        super()
        this.state = {
            timesClicked : 0,
        }
    }

    incremnet = () =>{
        this.setState(pervState =>{
            return{
                timesClicked:pervState.timesClicked  + 1
            }
            
        })
    }
    render() {
        return (
            <div>
                <button onClick = {this.incremnet}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
