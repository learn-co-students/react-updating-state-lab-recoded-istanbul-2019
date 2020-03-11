// Code YouTubeDebugger Component Here
import React from "react"

export default class YouTubeDebugger extends React.Component{
  constructor(props){
    super(props)
    
    this.state={
      errors:[],
      user:null,
      settings:{
        bitrate:8,
        video:{
          resolution:"1080p"
        }
      }
    }
  }
  
  handleBitClick=()=>{
    this.setState({
      settings:{...this.state.settings,bitrate:12}
      
    })
  }
  
  handleResClick=()=>{
    this.setState({
      settings:{...this.state.settings,
                video:{ resolution:"720p"}
               }
      
    })
  }
  
  render(){
    
    return(
      <div>
        <button onClick={this.handleBitClick} className="bitrate">Click </button>
        <button onClick={this.handleResClick} className="resolution">Click </button>
      </div>
      )
  }
}