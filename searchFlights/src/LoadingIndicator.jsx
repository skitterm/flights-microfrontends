import React from "react";
import styled from "styled-components";
import designSystem from "design/design";

const LargeText = styled.h2`
  margin: auto;
  text-align: center;
  margin-top: ${designSystem.spacing.xl};
  font-size: 64px;
  opacity: 0.5;
  font-style: italic;
`;

export default () => <LargeText>Loading...</LargeText>;
