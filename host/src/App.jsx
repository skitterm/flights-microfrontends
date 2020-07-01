import React from "react";
import ReactDOM from "react-dom";
import Header from "remote/Header";
import FlightsList from "./FlightsList";

const App = () => (
  <div>
    <Header />
    <div
      style={{
        margin: "auto",
        maxWidth: "900px",
      }}
    >
      <h1>My Flights</h1>
      <FlightsList />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app-root"));
