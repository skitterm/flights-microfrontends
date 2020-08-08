import React from "react";
import styled from "styled-components";
import designSystem from "design/design";
import SearchForm from "./SearchForm";
import ErrorBoundary from "./ErrorBoundary";

const Heading = styled.h1`
  font-size: ${designSystem.fontSize.display};
`;

export default () => {
  return (
    <>
      <Heading>Search Flights</Heading>
      <ErrorBoundary>
        <SearchForm />
      </ErrorBoundary>
    </>
  );
};
