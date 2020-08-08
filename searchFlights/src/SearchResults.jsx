import React from "react";
import styled from "styled-components";
import FlightItem from "./FightItem";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
  gap: 16px;
`;

export default (props) => {
  return (
    <List>
      {props.flights.map((flight) => {
        return <FlightItem {...flight} key={flight.quoteID} />;
      })}
    </List>
  );
};
