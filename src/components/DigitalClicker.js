// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             timesClicked : 0
        }
    }
    
    handelClick = () => {
        this.setState(previousState => {
             return {timesClicked : ++previousState.timesClicked}
            })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handelClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
