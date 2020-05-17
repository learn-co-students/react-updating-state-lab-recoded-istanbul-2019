import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
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

    changeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }

        })
    }

    changeRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: "720p"
                }
            }
        })
    }
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>Change bitrate</button>
                <button className="resolution" onClick={this.changeRes}>Change resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger
