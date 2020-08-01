import React from "react";
import styled from "styled-components";
import designSystem from "design/design";
import FlightsList from "./FlightsList";

const Heading = styled.h1`
  font-size: ${designSystem.fontSize.display};
`;

export default () => (
  <>
    <Heading>My Flights</Heading>
    <FlightsList />
  </>
);
