import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 1.5rem;
  margin: 1rem 0;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
`;

export const Card = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};
