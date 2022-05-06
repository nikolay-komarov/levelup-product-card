import React from "react";

export const Description = ({ text }) => {
  return (
    <div>
      <h2>Описание</h2>
      <p>{text}</p>
      <button>Купить</button>
    </div>
  );
};
