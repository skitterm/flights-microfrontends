import React from "react";
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

export default () => {
  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        listStyleType: "none",
        gap: "16px",
      }}
    >
      {flights.map((flight) => {
        return <FlightItem key={flight.id} {...flight} />;
      })}
    </ul>
  );
};
