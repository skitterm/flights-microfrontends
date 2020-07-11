import React, { useState } from "react";
import styled from "styled-components";
import FlightPoint from "./FlightPoint";

const ListItem = styled.li`
  border-radius: 3px;
  border: 2px solid #ddd;
  overflow: hidden;
  height: 300px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.div`
  flex: 0 0 150px;
  background-color: #ddd;
`;

export default (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ListItem>
      {!isFlipped ? (
        <FlexContainer>
          <Thumbnail />
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
        </FlexContainer>
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
    </ListItem>
  );
};
