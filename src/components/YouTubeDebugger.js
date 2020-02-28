import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrateClick}>Change bitrate</button>
        <button className='resolution' onClick={this.handleResClick}>Change resolution</button>
      </div>
    );
  }
}