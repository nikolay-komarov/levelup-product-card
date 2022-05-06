import React from "react";
import { StyledNewPrice } from "./styled";

export const NewPrice = ({ value }) => {
  return <StyledNewPrice>{value} ₽</StyledNewPrice>;
};
