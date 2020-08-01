import React from "react";
import styled from "styled-components";
import designSystem from "design/design";

const Header = styled.header`
  position: sticky;
  top: 0;
  background: ${(props) => props.backgroundColor}
  border-left: 10px solid ${(props) => props.borderColor};
  border-right: 10px solid ${(props) => props.borderColor};
  box-shadow: 0 1px 8px 0px #888;
  padding: ${(props) => props.spacing.sm} ${(props) => props.spacing.md};
  display: flex;
  align-items: center;
`;

const MainText = styled.span`
  font-size: ${designSystem.fontSize.lg};
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0 0 0 64px;
  padding: 0;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: ${designSystem.spacing.md};
`;

export default (props) => {
  return (
    <Header
      borderColor={designSystem.colors.primary}
      backgroundColor={designSystem.colors.white}
      spacing={designSystem.spacing}
    >
      <MainText>Flight Booking</MainText>
      <nav>
        <List>
          {props.links.map((link, index) => (
            <ListItem key={index}>{link}</ListItem>
          ))}
        </List>
      </nav>
    </Header>
  );
};
