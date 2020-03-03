import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0,
    }
  }

    forClick = () => {
    this.setState({
        timesClicked: this.state.timesClicked += 1}, () =>
        console.log(this.state.timesClicked))
    }

    render() {
    return (<button onClick={this.forClick}>{this.state.timesClicked}</button>)
    }

}