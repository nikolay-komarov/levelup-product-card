import React from "react";

export const Popularity = ({ count }) => {
  let result = null;

  if (count === 0) {
    result = <p>Будь первым. Поделись впечатлениями</p>;
  }

  if (count > 5) {
    result = <p style={{ color: "green" }}>Проверенный товар</p>;
  }

  return result;
};
