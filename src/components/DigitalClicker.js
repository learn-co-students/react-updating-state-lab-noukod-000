import React, {Component} from 'react';
 
class DigitalClicker extends Component {
  constructor() {
    super()
    // initial state has count set at 0
    this.state = {
      timesClicked: 0
    }
  }
 
  handleClick = () => {
    // when handleClick is called, newTimesClicked is set to whatever this.state.timesClicked is plus 1 PRIOR to calling this.setState
    let newTimesClicked = this.state.timesClicked + 1
    this.setState({
      timesClicked: newTimesClicked
    })
  }
 
  render() {
    return (
      <div>
        <h1>{this.state.timesClicked}</h1>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
 
export default DigitalClicker