// Code DigitalClicker Component Here
import React {component} from 'react';

export class DigitalClicker from React.Component {
  constructor() {
    super();

    
    this.state = {
      timesClicked: 0
    };
  }

  updateTimesClicked = () => {
    this.setState((prevState) => ({
        timesClicked: prevState.timesClicked +1
    }))
  };

  render() {
    return (
      <button
      onClick={this.updateTimesClicked}
      >
      {this.state.timesClicked}
      </button>
    );
  }
}

export default DigitalClicker;
