import React from "react";
import { StyledCounter, StyledValue } from "./styled";
import { Button } from "/src/button/button";

export const Counter = ({ value, minValue, onChange, className }) => {
  const isDisabledMinus = value === minValue;

  const handleUpClick = () => {
    onChange && onChange(value - 1);
  };
  const handleDownClick = () => {
    onChange && onChange(value + 1);
  };

  return (
    <StyledCounter className={className}>
      <Button disabled={isDisabledMinus} size="small" onClick={handleUpClick}>
        -
      </Button>
      <StyledValue>{value}</StyledValue>
      <Button size="small" onClick={handleDownClick}>
        +
      </Button>
    </StyledCounter>
  );
};
