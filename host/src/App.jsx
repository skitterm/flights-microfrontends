import React from "react";
import ReactDOM from "react-dom";
import CoolButton from "remote/CoolButton";
import FlightsList from "./FlightsList";

const App = () => (
  <div>
    <h1>Host page</h1>
    <CoolButton />
    <FlightsList />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app-root"));
