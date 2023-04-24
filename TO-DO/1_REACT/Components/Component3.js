import React from 'react';

class CurrentTimeComponent extends React.Component {
  // Properties
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h2>Current Time: {this.state.currentTime}</h2>
      </div>
    );
  }
}

export default CurrentTimeComponent;