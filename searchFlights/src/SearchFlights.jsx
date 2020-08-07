import React, { useState, useEffect } from "react";
import styled from "styled-components";
import designSystem from "design/design";
import FlightItem from "./FightItem";
import LoadingIndicator from "./LoadingIndicator";

const Heading = styled.h1`
  font-size: ${designSystem.fontSize.display};
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
  gap: 16px;
`;

export default () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        // params are depcity and arrcity
        const response = await fetch(
          "http://18.191.215.81:33349/searchflights"
        );
        const json = await response.json();
        setFlights(json);
      } catch (err) {
        console.log("error: ", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlights();
  }, []);

  return (
    <>
      <Heading>Search Flights</Heading>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <List>
          {flights.map((flight) => {
            return <FlightItem {...flight} key={flight.quoteID} />;
          })}
        </List>
      )}
    </>
  );
};
