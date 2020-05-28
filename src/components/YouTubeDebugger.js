import React, { Component } from "react";

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

    bitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        })
    }

    resolution = () => {
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
                <button className='bitrate' onClick={this.bitrate}>Bitrate Buttom</button>
                <button className='resolution' onClick={this.resolution}>Resolution Button</button>
            </div>
        )
    }
}

export default YouTubeDebugger