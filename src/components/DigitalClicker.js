import React from 'react';
export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }
  handleClick = () => {
    const num = this.state.timesClicked
    this.setState({
      timesClicked: num + 1
    })
  }
  render() {
    return(
      <React.Fragment>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </React.Fragment>
    )
  }
}
