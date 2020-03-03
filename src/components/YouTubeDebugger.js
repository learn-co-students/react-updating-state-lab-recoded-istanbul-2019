// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
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
    
    handelClick = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    
    handelClickResolution = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                    ...this.state.settings.video,
                    resolution : '720p'
                }
            }
        })
    }
    
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handelClick} > bitrate </button>
                <button className="resolution" onClick={this.handelClickResolution} > resolution </button>
            </div>
        )
    }
}
