import React, { useState } from "react";
import styled from "styled-components";
import Button from "design/Button";
import designSystem from "design/design";
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

const Bottom = styled.div`
  flex: 1 1 auto;
  padding: 16px;
`;

const Title = styled.h3`
  font-size: ${designSystem.fontSize.lg};
  margin-top: 4px;
`;

const SmallText = styled.h5`
  margin: 8px 0;
`;

const BackfaceWrapper = styled.div`
  padding: 16px;
`;

export default (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const prettifyAirport = (airportName) => {
    const pieces = airportName.split(":");
    return pieces[1] || airportName;
  };

  return (
    <ListItem>
      {!isFlipped ? (
        <FlexContainer>
          <Thumbnail />
          <Bottom>
            <Title>
              {prettifyAirport(props.departure_airport)} -{" "}
              {prettifyAirport(props.arrival_airport)}
            </Title>
            <SmallText>
              {new Date(props.departure_date).toLocaleString("en-us", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </SmallText>
            <SmallText>{props.flight_number}</SmallText>
            <Button
              onClick={() => {
                setIsFlipped(!isFlipped);
              }}
            >
              More info
            </Button>
          </Bottom>
        </FlexContainer>
      ) : (
        <BackfaceWrapper>
          <FlightPoint
            airport={props.departure_airport}
            terminal={props.departure_terminal}
            gate={props.departure_gate}
            date={props.departure_date}
            isArrival={false}
          />
          <FlightPoint
            airport={props.arrival_airport}
            terminal={props.arrival_terminal}
            gate={props.arrival_gate}
            date={props.arrival_date}
            isArrival={true}
          />
          <Button
            onClick={() => {
              setIsFlipped(!isFlipped);
            }}
          >
            Back
          </Button>
        </BackfaceWrapper>
      )}
    </ListItem>
  );
};
