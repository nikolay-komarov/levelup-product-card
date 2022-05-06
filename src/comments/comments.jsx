import React from "react";
import { Button } from "/src/button/button";

export const Comments = ({ comments }) => {
  return (
    <div>
      <h2>Комментарии</h2>
      <ul>
        {comments &&
          comments.map((item) => (
            <li key={item.id}>
              <b>{item.author}</b>
              <p>{item.text}</p>
            </li>
          ))}
      </ul>
      <Button>Показать еще</Button>
    </div>
  );
};
