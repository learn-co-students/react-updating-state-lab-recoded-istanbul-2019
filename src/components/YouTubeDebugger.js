// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
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
      bitrateFun =()=> {
          this.setState({
            settings : {
            ...this.state.settings,
            bitrate: 12
            }
          })
      }

      resolutionFun =()=>{
          this.setState({
              settings : {
                  ...this.state.settings,
                  video: {
                    resolution: '720p'
                  }
              }
          })
      }

    render() {
        return (
        <div>
                <button className='bitrate' onClick={this.bitrateFun}>
                 YouTube
                </button>
                <button className='resolution' onClick={this.resolutionFun}>
                    YouTube
                </button>
        </div>
        )
    }
}
