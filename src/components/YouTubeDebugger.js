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

    handleClick = (e) => {
        if (e.target.className === "bitrate") {
            this.changeBitrate();
        } else {
            this.changeRes();
        }
    }
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleClick}>Change bitrate</button>
                <button className="resolution" onClick={this.handleClick}>Change resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger
