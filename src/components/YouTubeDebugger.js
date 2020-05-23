// Code YouTubeDebugger Component Here
import React, { Component } from "react";

class YouTubeDebugger extends Component {
    constructor() {
        super();
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

    bitrateHndle = () => {
        this.setState(() => {
            return {
                settings: Object.assign({}, this.state.settings, {bitrate: 12})
                
            }
        }, () => console.log(this.state.settings.bitrate))
    }

    resolutionHndle = () => {
        return this.setState({
            settings: {
                ...this.state.settings,
                 video:{
                    resolution: '720p'
                 }
            }
         }, () => console.log(this.state.settings.video.resolution))
    }


    render() {
        return (
            <div>
                <button onClick={this.bitrateHndle} className="bitrate">bitrate</button>
                <button onClick={this.resolutionHndle}className="resolution">resolution</button>
            </div>
        )
    }
    

}

export default YouTubeDebugger;