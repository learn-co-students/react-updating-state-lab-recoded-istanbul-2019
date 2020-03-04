// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor(){
        super();
        this.state={
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

    change1=()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate:12
            }
        })
    }
    change2= ()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                resolution: "720p"}
            }
        })
    }
    render() {
      // ...
      return (
          <div>
              <button className="bitrate" onClick={this.change1}>bitrate</button>
              <button className="resolution" onClick={this.change2}>resolution</button>
          </div>
      )
    }
  }
  export default YouTubeDebugger;