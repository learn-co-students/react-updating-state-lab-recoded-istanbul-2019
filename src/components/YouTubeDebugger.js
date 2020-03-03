// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
       errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } 
    }
  }

    forBitrate = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {bitrate: 12})
        })
    }

    forResolution = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.forBitrate}>Click Fast!</button>
                <button className="resolution" onClick={this.forResolution}>Click Fast!</button>
            </div>

        )
    }

}