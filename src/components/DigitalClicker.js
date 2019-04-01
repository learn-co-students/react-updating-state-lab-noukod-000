// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    
    this.state = { timesClicked: 0 }
  }

  HandlerClick =() => {
    this.setState({ timesClicked: this.state.timesClicked + 1 })
=======
  constructor(props) {
    super(props);
    
    this.state = { timesClicked: 0}
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
>>>>>>> f4314f144999589d4cd88f75921e3ea87dcb32d4
  }

  render() {
    return(
<<<<<<< HEAD
      <button onClick={this.HandlerClick}>{this.state.timesClicked}</button>
=======
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
>>>>>>> f4314f144999589d4cd88f75921e3ea87dcb32d4
    )
  }
}