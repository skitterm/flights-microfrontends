import React, { useState, Suspense } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import FlightsList from "./FlightsList";

const Main = styled.div`
  margin: auto;
  max-width: 900px;
`;

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `${REMOTE_URL}/remoteEntry.js`;
  document.head.appendChild(script);

  script.onload = () => {
    setIsReady(true);
  };

  if (!isReady) {
    return <h1>Loading</h1>;
  }

  // dynamic loading code from https://github.com/jherr/getting-started-mf-0615/blob/master/dashboard/src/App.jsx
  const Header = React.lazy(() =>
    window["remote"].get("./Header").then((factory) => {
      const module = factory();
      return module;
    })
  );

  return (
    <Suspense fallback="Falling back">
      <div>
        <Header />
        <Main>
          <h1>My Flights</h1>
          <FlightsList />
        </Main>
      </div>
    </Suspense>
  );
};

ReactDOM.render(<App />, document.getElementById("app-root"));
