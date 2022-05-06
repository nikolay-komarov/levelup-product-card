import React from "react";
import { StyledNewPrice } from "./styled";

export const NewPrice = ({ value, className }) => {
  return <StyledNewPrice className={className}>{value} ₽</StyledNewPrice>;
};
