import React from "react";
import { Label } from "./styled";
import { Button } from "/src/button/button";

export const Order = () => {
  return (
    <form>
      <Label>
        Имя: <input />
      </Label>
      <Label>
        Телефон: <input type="tel" />
      </Label>
      <Label>
        Адрес доставки: <input />
      </Label>
      <Button>Оформить</Button>
    </form>
  );
};
