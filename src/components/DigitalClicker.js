// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor(state) {
    super(state);
    
    this.state = { timesClicked: 0 }
  }

  HandlerClick =() => {
    this.setState({ timesClicked: this.state.timesClicked + 1 })
  }

  render() {
    return(
      <button onClick={this.HandlerClick}>{this.state.timesClicked}</button>
    )
  }
}