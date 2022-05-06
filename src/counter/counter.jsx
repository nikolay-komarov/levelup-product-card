import React from "react";
import { StyledCounter, StyledValue } from "./styled";
import { Button } from "/src/button/button";

export const Counter = ({ className }) => {
  return (
    <StyledCounter className={className}>
      <Button size="small">-</Button>
      <StyledValue>1</StyledValue>
      <Button size="small">+</Button>
    </StyledCounter>
  );
};
