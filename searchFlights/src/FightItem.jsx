import React, { useState } from "react";
import styled from "styled-components";
import designSystem from "design/design";

const ListItem = styled.li`
  border-radius: 3px;
  border: 2px solid #ddd;
  overflow: hidden;
  height: 330px;
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

export default (props) => {
  const prettifyAirport = (airportName) => {
    const pieces = airportName.split("-");
    return pieces[1] || airportName;
  };

  return (
    <ListItem>
      <FlexContainer>
        <Thumbnail />
        <Bottom>
          <Title>
            {prettifyAirport(props.departureAirport)} -{" "}
            {prettifyAirport(props.arrivalAirport)}
          </Title>
          <SmallText>
            {new Date(props.departureDate).toLocaleString("en-us", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </SmallText>
          <SmallText>{props.price}</SmallText>
          <SmallText>{props.carrier}</SmallText>
        </Bottom>
      </FlexContainer>
    </ListItem>
  );
};
