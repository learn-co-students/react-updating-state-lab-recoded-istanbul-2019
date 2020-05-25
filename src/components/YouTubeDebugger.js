// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {

    state={
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
      handleBitrate =()=>{
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12,
            }
          });
      }
      handleResolution =()=>{
        this.setState({
            settings: {
              ...this.state.settings,
              video:{
                  resolution :'720p'
              } 
            }
          });
      }
    render() {
        return (
            <div>
              <button className='bitrate'onClick={this.handleBitrate}>bitrate</button> 
              <button className='resolution' onClick={this.handleResolution}></button> 
            </div>
        )
    }
}

export default YouTubeDebugger
