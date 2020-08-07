import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FlightItem from "./FlightItem";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
  gap: 16px;
`;

export default () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("http://18.191.215.81:33349/myflights");
        const json = await response.json();
        setFlights(json);
      } catch (err) {
        console.log("error: ", err);
      }
    };

    fetchFlights();
  }, []);

  return (
    <List>
      {flights.map((flight) => {
        return <FlightItem key={flight.flight_id} {...flight} />;
      })}
    </List>
  );
};
