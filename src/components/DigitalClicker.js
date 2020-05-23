import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0 
    }
  }

  handleClick = () => {
    let countClick = this.state.timesClicked + 1
    this.setState({
      timesClicked : countClick
    })
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker; 
