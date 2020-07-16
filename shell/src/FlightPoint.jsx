import React from "react";

export default (props) => {
  return (
    <div>
      <h4>
        {props.isArrival ? "Arrival" : "Departure"} -- {props.airport}
      </h4>
      <h5>
        {new Date(props.time).toLocaleString("en-us", {
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
