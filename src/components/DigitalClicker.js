// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }
    clickhandler = () => {

        this.setState((prevState) => ({
            timesClicked: prevState.timesClicked + 1
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
