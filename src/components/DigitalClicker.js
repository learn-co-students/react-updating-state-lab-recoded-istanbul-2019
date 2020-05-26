import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState((previousState) => {
       return {
         timesClicked: previousState.timesClicked + 1
       }
    })
  };

  render() {
    return (
      <div>
      <button onClick={this.handleClick}><label>{this.state.timesClicked}</label></button>
      </div>
    );
  }
}

export default DigitalClicker;
