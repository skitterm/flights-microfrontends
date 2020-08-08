import React, { useState, useEffect } from "react";
import styled from "styled-components";
import designSystem from "design/design";
import LoadingIndicator from "./LoadingIndicator";
import SearchResults from "./SearchResults";

const Heading = styled.h1`
  font-size: ${designSystem.fontSize.display};
`;

export default () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        // params are depcity and arrcity
        const response = await fetch(
          "http://18.191.215.81:33349/searchflights"
        );
        const json = await response.json();
        setFlights(json);
      } catch (err) {
        console.log("error: ", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlights();
  }, []);

  return (
    <>
      <Heading>Search Flights</Heading>
      {isLoading ? <LoadingIndicator /> : <SearchResults flights={flights} />}
    </>
  );
};
