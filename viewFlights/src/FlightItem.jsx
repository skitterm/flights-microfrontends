import React, { useState } from "react";
import styled from "styled-components";
import Button from "design/Button";
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
  return (
    <ListItem>
      {!isFlipped ? (
        <FlexContainer>
          <Thumbnail />
          <Bottom>
            <Title>
              {props.departure.airport} - {props.arrival.airport}
            </Title>
            <SmallText>
              {new Date(props.departure.time).toLocaleString("en-us", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </SmallText>
            <SmallText>
              {props.airline} {props.number}
            </SmallText>
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
          <FlightPoint {...props.departure} isArrival={false} />
          <FlightPoint {...props.arrival} isArrival={true} />
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
