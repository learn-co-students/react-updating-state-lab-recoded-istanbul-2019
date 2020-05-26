import React from 'react';

export default class YouTubeDebugger extends React.Component {
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
    setBitrate = () => this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
    });
    setResolution = () => this.setState({
        settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
        }
    });
    /*setBitrate = () => this.setState({
        ...this.state.settings,
        bitrate: 12

    });
    setResolution = () => this.setState({
        ...this.state.settings,
        resolution: '720p'
    });*/
    render() {
        //const { bitrate, video: { resolution } } = this.state.settings;
        return (
            <React.Fragment>
                <button className="bitrate" onClick={this.setBitrate}></button>
                <button className="resolution" onClick={this.setResolution}></button>
            </React.Fragment>
        )
    }
}