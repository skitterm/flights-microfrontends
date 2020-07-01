import React, { useState } from "react";
import FlightPoint from "./FlightPoint";

export default (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <li
      key={props.id}
      style={{
        borderRadius: "3px",
        border: "2px solid #ddd",
        overflow: "hidden",
        height: "300px",
      }}
    >
      {!isFlipped ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: "0 0 150px", backgroundColor: "#ddd" }}></div>
          <div style={{ flex: "1 1 auto", padding: "16px" }}>
            <h3 style={{ marginTop: "4px" }}>
              {props.departure.airport} - {props.arrival.airport}
            </h3>
            <h5 style={{ margin: "8px 0" }}>
              {new Date(props.departure.time).toLocaleString("en-us", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </h5>
            <h5 style={{ margin: "8px 0" }}>
              {props.airline} {props.number}
            </h5>
            <button
              onClick={() => {
                setIsFlipped(!isFlipped);
              }}
            >
              More info
            </button>
          </div>
        </div>
      ) : (
        <div style={{ padding: "16px" }}>
          <FlightPoint {...props.departure} isArrival={false} />
          <FlightPoint {...props.arrival} isArrival={true} />
          <button
            onClick={() => {
              setIsFlipped(!isFlipped);
            }}
          >
            Back
          </button>
        </div>
      )}
    </li>
  );
};
