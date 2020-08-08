import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import designSystem from "design/design";
import SearchFlights from "./SearchFlights";
import ErrorBoundary from "./ErrorBoundary";

const Heading = styled.h1`
  font-size: ${designSystem.fontSize.display};
`;

ReactDOM.render(
  <>
    <Heading>Search Flights</Heading>
    <ErrorBoundary>
      <SearchFlights />
    </ErrorBoundary>
  </>,
  document.getElementById("app-root")
);
