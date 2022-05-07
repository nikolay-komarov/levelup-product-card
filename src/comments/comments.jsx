import React from "react";
import { Button } from "/src/button/button";
import { CommentsWrapper, CommentsList } from "./styled";

export const Comments = ({ comments }) => {
  return (
    <CommentsWrapper>
      <CommentsList>
        {comments &&
          comments.map((item) => (
            <li key={item.id}>
              <b>{item.author}</b>
              <p>{item.text}</p>
            </li>
          ))}
      </CommentsList>
      <Button>Показать еще</Button>
    </CommentsWrapper>
  );
};
