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

  return (
    <HashRouter>
      <GlobalStyles {...designSystem} />
      <div>
        <Header
          links={[
            <NavLink to="/">View Flights</NavLink>,
            <NavLink to="/search">Search</NavLink>,
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
