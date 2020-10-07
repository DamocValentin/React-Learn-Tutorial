import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 });
  }

  handleDecrease() {
    this.setState({ value: this.state.value > 0 ? this.state.value - 1 : 0 });
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrease}
          className="btn btn-secondary btn-sm"
        >
          Decrease
        </button>
      </div>
    );
  }
}

export default Counter;
