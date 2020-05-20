// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    constructor(){
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

    bitrateChange = () =>{
       return this.setState({
           settings:{
                ...this.state.settings,
                bitrate : 12
           }
        }, () => console.log(this.state.settings.bitrate))
    }

    resolutionChange = () =>{
        return this.setState({
            settings:{
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
                <button onClick = {this.bitrateChange} className = "bitrate" >bitrate</button>
                <button onClick = {this.resolutionChange} className = "resolution" >resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger
