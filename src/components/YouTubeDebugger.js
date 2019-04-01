// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errors: [], user: null,
      settings: { bitrate: 8, video: {
        resolution: '1080p'
        } } }
  }

  HandlerBitrate = () => { console.log('bitrate')
    this.setState({
      settings: {...this.state.settings, bitrate: 12
      },
    });
  }

  HandlerResolution = () => { console.log('bitrate')
    this.setState({
      settings: { ...this.state.settings,
        video: { ...this.state.settings.video, resolution: '720p'
        } },
    });
  }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.HandlerBitrate}>Bitrate</button>
        <button className='resolution' onClick={this.HandlerResolution}>Resolution</button>
      </div>
    )
  }
}