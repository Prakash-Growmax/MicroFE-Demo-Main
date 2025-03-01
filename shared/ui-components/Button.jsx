import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? "#0070f3" : "white")};
  color: ${(props) => (props.primary ? "white" : "#0070f3")};
  font-size: 1em;
  padding: 0.5em 1em;
  border: 2px solid #0070f3;
  border-radius: 4px;
  cursor: pointer;
  margin: 0.5em;

  &:hover {
    background: ${(props) => (props.primary ? "#0057b8" : "#f8f9fa")};
  }
`;

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
