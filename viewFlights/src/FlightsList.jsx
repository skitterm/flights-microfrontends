import React, { useEffect } from "react";
import styled from "styled-components";
import FlightItem from "./FlightItem";

const flights = [
  {
    id: "a",
    airline: "American",
    number: "355",
    departure: {
      airport: "LAX",
      terminal: 5,
      gate: 33,
      time: 1593558460223,
    },
    arrival: {
      airport: "DCA",
      terminal: 3,
      gate: 14,
      time: 1593658460223,
    },
    aircraft: {
      make: "boeing",
      model: "747",
    },
  },
  {
    id: "b",
    airline: "Delta",
    number: "23",
    departure: {
      airport: "DCA",
      terminal: 5,
      gate: 33,
      time: 1594558460223,
    },
    arrival: {
      airport: "LAX",
      terminal: 3,
      gate: 14,
      time: 1594658460223,
    },
    aircraft: {
      make: "airbus",
      model: "a380",
    },
  },
  {
    id: "c",
    airline: "Southwest",
    number: "86",
    departure: {
      airport: "SLC",
      terminal: 5,
      gate: 33,
      time: 1595558460223,
    },
    arrival: {
      airport: "JFK",
      terminal: 3,
      gate: 14,
      time: 1595658460223,
    },
    aircraft: {
      make: "boeing",
      model: "737",
    },
  },
];

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
  gap: 16px;
`;

export default () => {
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("http://18.191.215.81:8090/myflights");
        const json = await response.json();
        console.log("response: ", json);
      } catch (err) {
        console.log("error: ", err);
      }
    };

    fetchFlights();
  }, []);

  return (
    <List>
      {flights.map((flight) => {
        return <FlightItem key={flight.id} {...flight} />;
      })}
    </List>
  );
};
