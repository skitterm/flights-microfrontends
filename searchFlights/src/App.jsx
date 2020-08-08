import React from "react";
import ReactDOM from "react-dom";
import SearchFlights from "./SearchFlights";

ReactDOM.render(
  <ErrorBoundary>
    <SearchFlights />
  </ErrorBoundary>,
  document.getElementById("app-root")
);
