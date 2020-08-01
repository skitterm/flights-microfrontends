import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import designSystem from "design/design";
import Header from "header/Header";
import SearchFlights from "searchFlights/SearchFlights";
import ViewFlights from "viewFlights/ViewFlights";

const Main = styled.div`
  margin: auto;
  max-width: 900px;
`;

const App = () => {
  const GlobalStyles = createGlobalStyle`
    body {
      color: ${(props) => props.colors.textDark};
      font-family: Trebuchet MS, sans-serif;
    }        
  `;

  const StyledNavLink = styled(NavLink)`
    border-bottom: 3px solid transparent;
    text-decoration: none;
    color: ${designSystem.colors.textDark};
    padding: 4px 0;

    &:visited {
      color: inherit;
    }
  `;

  return (
    <HashRouter>
      <GlobalStyles {...designSystem} />
      <div>
        <Header
          links={[
            <StyledNavLink
              to="/"
              exact
              activeStyle={{ borderBottomColor: designSystem.colors.accent }}
            >
              View Flights
            </StyledNavLink>,
            <StyledNavLink
              to="/search"
              activeStyle={{ borderBottomColor: designSystem.colors.accent }}
            >
              Search
            </StyledNavLink>,
          ]}
        ></Header>
        <Main>
          <Switch>
            <Route path="/search">
              <SearchFlights />
            </Route>
            <Route path="/">
              <ViewFlights />
            </Route>
          </Switch>
        </Main>
      </div>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app-root"));
