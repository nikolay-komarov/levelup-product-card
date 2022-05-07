import React from "react";
import { Button } from "/src/button/button";
import { DescriptionText } from "./styled";

export const Description = ({ text }) => {
  return (
    <>
      <DescriptionText>{text}</DescriptionText>
      <Button>Подробнее</Button>
    </>
  );
};
