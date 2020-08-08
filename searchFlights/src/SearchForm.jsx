import React, { useState, useEffect } from "react";
import styled from "styled-components";
import designSystem from "design/design";
import Button from "design/Button";
import LoadingIndicator from "./LoadingIndicator";
import SearchResults from "./SearchResults";

const Form = styled.div`
  display: flex;
  align-items: stretch;
`;

const Input = styled.input`
  font-size: ${designSystem.fontSize.md};
  margin-right: ${designSystem.spacing.sm};
`;

export default () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");

  const onOriginInputChange = (event) => {
    setOriginCity(event.target.value);
  };

  const onDestinationInputChange = (event) => {
    setDestinationCity(event.target.value);
  };

  const fetchFlights = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://18.191.215.81:33349/searchflights?depcity=${encodeURIComponent(
          encodeURIComponent(originCity)
        )}&arrcity=${encodeURIComponent(encodeURIComponent(destinationCity))}`
      );
      const json = await response.json();
      if (!json.length) {
        throw new Error("Unable to find results");
      }
      setFlights(json);
    } catch (err) {
      console.log("error: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      throw new Error("SearchForm should not show loading for initial state");
    }
  }, []);

  return (
    <>
      <Form>
        <Input type="text" placeholder="Origin" onInput={onOriginInputChange} />
        <Input
          type="text"
          placeholder="Destination"
          onInput={onDestinationInputChange}
        />
        <Button onClick={fetchFlights}>Search</Button>
      </Form>
      {isLoading ? <LoadingIndicator /> : <SearchResults flights={flights} />}
    </>
  );
};
