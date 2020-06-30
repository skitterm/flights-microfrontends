import React from "react";

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
            <h3>
              {flight.departure.airport} - {flight.arrival.airport}
            </h3>
            <h5>
              {flight.airline} {flight.number}
            </h5>
            <div>
              <h4>Departure -- {flight.departure.airport}</h4>
              <h5>
                {new Date(flight.departure.time).toLocaleString("en-us", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </h5>
              <span>
                Terminal {flight.departure.terminal}, Gate{" "}
                {flight.departure.gate}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
