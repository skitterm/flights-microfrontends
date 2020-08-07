import React, { Component } from "react";

// component implemented after manner shown in https://reactjs.org/docs/error-boundaries.html
class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      hasErrors: false,
    };
  }

  async componentDidCatch(error, info) {
    const response = await fetch(
      // "http://ec2-52-91-123-82.compute-1.amazonaws.com:4000/errors",
      "http://localhost:4000/errors",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          module: "viewFlights",
        }),
      }
    );
    const json = await response.json();
    console.log(json);
  }

  render() {
    return this.state.hasError ? (
      <h2>Something went wrong. Please refresh and try again.</h2>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
