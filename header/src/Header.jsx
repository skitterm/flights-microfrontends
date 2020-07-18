import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 1px 8px 0px #888;
  padding: 16px 32px;
  display: flex;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0 0 0 64px;
  padding: 0;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 15px;
`;

export default (props) => {
  return (
    <Header>
      <span>Flight Booking</span>
      <nav>
        <List>
          {props.links.map((link) => (
            <ListItem>{link}</ListItem>
          ))}
        </List>
      </nav>
    </Header>
  );
};
