import React, { useState } from "react";
import styled from "styled-components";
import designSystem from "design/design";
import Button from "design/Button";
import LoadingIndicator from "./LoadingIndicator";
import SearchResults from "./SearchResults";

const Heading = styled.h1`
  font-size: ${designSystem.fontSize.display};
`;

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
  const [isLoading, setIsLoading] = useState(true);
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
      const response = await fetch(
        `http://18.191.215.81:33349/searchflights?depcity=${originCity}&arrcity=${destinationCity}`
      );
      const json = await response.json();
      setFlights(json);
    } catch (err) {
      console.log("error: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Heading>Search Flights</Heading>
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
