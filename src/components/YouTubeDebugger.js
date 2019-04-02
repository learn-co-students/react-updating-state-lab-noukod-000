import React, { Component } from 'react';

export default class YouTubeDebugger  extends Component {

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

    render() {
        return(
            <div>
                <button className='bitrate'
                onClick={this.handleClick}
                >bitrate</button>

                <button className='resolution'
                onClick={this.handleClick2}
                >resolution</button>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state))
  
    }

    handleClick2 = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state))
    }
}