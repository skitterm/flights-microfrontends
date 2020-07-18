import React, { useState, Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

// loadComponent comes from module-federation-examples repo:
// https://github.com/module-federation/module-federation-examples/blob/bae09de0a68327f411f733d0fe84c9534770afab/advanced-api/dynamic-remotes/app1/src/App.js
function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");

    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

function loadScript(url, callback) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `${url}/remoteEntry.js`;
  document.head.appendChild(script);

  script.onload = callback;
}

const Main = styled.div`
  margin: auto;
  max-width: 900px;
`;

const App = () => {
  const [isHeaderReady, setIsHeaderReady] = useState(false);
  loadScript(HEADER_URL, () => {
    setIsHeaderReady(true);
  });

  const [isViewFlightsReady, setIsViewFlightsReady] = useState(false);
  loadScript(VIEW_FLIGHTS_URL, () => {
    setIsViewFlightsReady(true);
  });

  const [isSearchFlightsReady, setIsSearchFlightsReady] = useState(false);
  loadScript(SEARCH_FLIGHTS_URL, () => {
    setIsSearchFlightsReady(true);
  });

  if (!isHeaderReady || !isViewFlightsReady || !isSearchFlightsReady) {
    return <h1>Loading</h1>;
  }

  const Header = React.lazy(loadComponent("header", "./Header"));
  const ViewFlights = React.lazy(loadComponent("viewFlights", "./ViewFlights"));
  const SearchFlights = React.lazy(
    loadComponent("searchFlights", "./SearchFlights")
  );

  return (
    <Suspense fallback="Falling back">
      <HashRouter>
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
    </Suspense>
  );
};

ReactDOM.render(<App />, document.getElementById("app-root"));
