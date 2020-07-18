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

  // dynamic loading code from https://github.com/jherr/getting-started-mf-0615/blob/master/dashboard/src/App.jsx
  const Header = React.lazy(() =>
    window["header"].get("./Header").then((factory) => {
      const module = factory();
      return module;
    })
  );

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
