import React, { useState, Suspense } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Main = styled.div`
  margin: auto;
  max-width: 900px;
`;

const App = () => {
  const [isHeaderReady, setIsHeaderReady] = useState(false);

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `${HEADER_URL}/remoteEntry.js`;
  document.head.appendChild(script);

  script.onload = () => {
    setIsHeaderReady(true);
  };

  const [isViewFlightsReady, setIsViewFlightsReady] = useState(true);

  // const script2 = document.createElement("script");
  // script2.type = "text/javascript";
  // script2.src = `${VIEW_FLIGHTS_URL}/remoteEntry.js`;
  // document.head.appendChild(script2);

  // script2.onload = () => {
  //   setIsViewFlightsReady(true);
  // };

  if (!isHeaderReady || !isViewFlightsReady) {
    return <h1>Loading</h1>;
  }

  const Header = React.lazy(loadComponent("header", "./Header"));

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

  // const ViewFlights = React.lazy(() =>
  //   window["viewFlights"].get("./ViewFlights").then((factory) => {
  //     const module = factory();
  //     return module;
  //   })
  // );

  return (
    <Suspense fallback="Falling back">
      <div>
        <Header />
        <Main>{/* <ViewFlights /> */}</Main>
      </div>
    </Suspense>
  );
};

ReactDOM.render(<App />, document.getElementById("app-root"));
