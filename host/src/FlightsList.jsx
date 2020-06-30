import React from "react";

const flights = [
  {
    id: "a",
    airline: "american",
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
    airline: "delta",
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
    airline: "southwest",
    number: "86",
    departure: {
      airport: "SLC",
      terminal: 5,
      gate: 33,
      time: 1593558460223,
    },
    arrival: {
      airport: "JFK",
      terminal: 3,
      gate: 14,
      time: 1593658460223,
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
            <h4>
              {flight.departure.airport} - {flight.arrival.airport}
            </h4>
          </li>
        );
      })}
    </ul>
  );
};
