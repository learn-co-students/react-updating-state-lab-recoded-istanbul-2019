// Code YouTubeDebugger Component Here
import React,{Component} from 'react'
class YouTubeDebugger extends Component {
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
        handletheClick=()=>{
           
            this.setState({
                settings:{
                    ...this.state.settings,
                    bitrate:12
                }
            })
            //  settings: Object.assign({}, this.state.settings, {bitrate: 12})
           
        }
        handletheresolution=()=>{
           
            this.setState({
                settings:{
                    ...this.state.settings,
                    video:{
                    resolution: "720p"}
                }
            })
            //settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
         
      }
    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.handletheClick}>bitrate</button>
                <button className="resolution" onClick={this.handletheresolution}>resolution</button>

            </div>
        )
    }
}
export default YouTubeDebugger