import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Math.round(new Date() / 1000)
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: Math.round(new Date() / 1000)
    });
  }
  getTimeValue;
  render() {
    return (
      <p className="App-clock">
        {this.state.time % 3
          ? "Fizz"
          : this.state.time % 5
          ? "Buzz"
          : "FizzBuzz"}
      </p>
    );
  }
}
export default Clock;
