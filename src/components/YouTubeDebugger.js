// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

class YouTubeDebugger extends Component {  
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }


    bit = () => {
        // Used spread operator instead of Object.assign() method!
        this.setState({
            settings: { // object that we want to update
                ...this.state.settings, // keep all other key-value pairs
                bitrate: 12 // update this
            }
        })
    }

    res = () => {
        // Used Object.assign() method

        this.setState({
            settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
        })

    }

    /** SOURCE: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react */


    render() {
    return (
        <div>
        <button className="bitrate" onClick={this.bit}>Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.res}>Resolution:</button>
        </div>
    )
  }
}
export default YouTubeDebugger; 