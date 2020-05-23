import React, { Component } from "react";

// Code DigitalClicker Component Here
class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0,
        }
    }

    handleClik = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked +1
            }
        })
    }
    render() {
        return (                            
            <button onClick={this.handleClik}>{this.state.timesClicked}</button>
        )
    }

}

export default DigitalClicker;