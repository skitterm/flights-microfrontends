import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 1px 8px 0px #888;
  padding: 16px 32px;
`;

export default () => {
  return <Header>Flight Booking</Header>;
};
