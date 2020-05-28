// Code YouTubeDebugger Component Here

import React from 'react'

class YouTubeDebugger extends React.Component{
    
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
        // this.changeBitRate = this.changeBitRate.bind(this)
        // this.changeResolution = this.changeResolution.bind(this)
    }

    changeBitRate(){
        this.setState((state)=>{
            return state.settings.bitrate = 12
        })
    }
    changeResolution(){
        this.setState((state)=>{
            return state.settings.video.resolution = '720p'
        })
    }

    render(){
        return(
            <div id="global"> 
                <div>
                    BitRate: {this.state.settings.bitrate}
                    <div><button className="bitrate" onClick={this.changeBitRate.bind(this)}>Change BitRate</button></div>
                </div>
                <div>Resolution: {this.state.settings.video.resolution}</div>
                <div><button className="resolution" onClick = {this.changeResolution.bind(this)}>Change Resolution</button></div>
            </div>
            
        )
    }
}

export default YouTubeDebugger