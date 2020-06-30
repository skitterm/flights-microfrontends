import React from "react";
import ReactDOM from "react-dom";
import Header from "remote/Header";
import FlightsList from "./FlightsList";

const App = () => (
  <div>
    <Header />
    <h1>My Flights</h1>
    <FlightsList />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app-root"));
