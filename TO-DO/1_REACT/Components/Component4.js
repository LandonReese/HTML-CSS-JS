import React from 'react';

class ButtonClickCountComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Button Click Count: {this.state.clickCount}</h2>
        <button onClick={() => this.handleClick()}>Click me!</button>
      </div>
    );
  }
}

export default ButtonClickCountComponent;