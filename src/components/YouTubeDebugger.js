// Code YouTubeDebugger Component Here
import React, { Component } from "react";

class YouTubeDebugger extends Component {
    constructor(props) {
        super(props)

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

    bitrateEvent = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        })
    }

    resolutionEvent = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p',
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.bitrateEvent}>button1</button>
                <button className='resolution' onClick={this.resolutionEvent}>button2</button>
            </div>
        )
    }
}

export default YouTubeDebugger