import React from "react";
import styled from "styled-components";
import designSystem from "../design";

const Button = styled.button`
  color: ${designSystem.colors.white};
  background-color: ${designSystem.colors.accent};
  padding: ${designSystem.spacing.xs} ${designSystem.spacing.sm};
  border: none;
  box-shadow: none;
  cursor: pointer;
`;

export default (props) => <Button {...props}>{props.children}</Button>;
