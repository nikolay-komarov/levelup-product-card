import React from "react";
import { Button } from "/src/button/button";

export const Description = ({ text }) => {
  return (
    <div>
      <h2>Описание</h2>
      <p>{text}</p>
      <Button>Подробнее</Button>
    </div>
  );
};
