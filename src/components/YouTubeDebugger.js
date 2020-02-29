import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor(){
        super();
        this.state ={
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
    handleClick = ()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate:12
            }
        })
    }
    resolution = ()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                    resolution: '720p'
                }
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} className='bitrate'>bitrate</button>
                <button onClick={this.resolution} className='resolution'>resolution</button>
            </div>
        )
    }
}
