import React from "react";
import FlightPoint from "./FlightPoint";

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
    <ul>
      {flights.map((flight) => {
        return (
          <li key={flight.id}>
            <h3>
              {flight.departure.airport} - {flight.arrival.airport}
            </h3>
            <h5>
              {flight.airline} {flight.number}
            </h5>
            <FlightPoint {...flight.departure} isArrival={false} />
            <FlightPoint {...flight.arrival} isArrival={true} />
          </li>
        );
      })}
    </ul>
  );
};
