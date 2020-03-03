// Code DigitalClicker Component Here

import React, { Component } from 'react';

class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    clicked = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
          })
    }
  
  render() {
    return (
    <button onClick={this.clicked}>{this.state.timesClicked}</button>
    )
  }
}
export default DigitalClicker; 