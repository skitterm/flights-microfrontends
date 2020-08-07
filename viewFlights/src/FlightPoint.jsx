import React from "react";

export default (props) => {
  const truncateAirport = (airportName) => {
    const pieces = airportName.split(":");
    return pieces[0] || airportName;
  };

  return (
    <div>
      <h4>
        {props.isArrival ? "Arrival" : "Departure"} --{" "}
        {truncateAirport(props.airport)}
      </h4>
      <h5>
        {new Date(props.date).toLocaleString("en-us", {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
      </h5>
      <span>
        Terminal {props.terminal}, Gate {props.gate}
      </span>
    </div>
  );
};
