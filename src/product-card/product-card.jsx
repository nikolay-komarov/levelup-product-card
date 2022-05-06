import React from "react";
import { Title } from "/src/title/title";
import { Code } from "/src/code/code";
import { Gallary } from "/src/gallary/gallary";
import { Counter } from "/src/counter/counter";
import { Description } from "/src/description/description";
import { Comments } from "/src/comments/comments";
import { Popularity } from "/src/popularity/popularity";
import { Button } from "/src/button/button";
import { FullPrice } from "/src/full-price/full-price";

export const ProductCard = ({ product }) => {
  return (
    <section>
      <Title>{product.name}</Title>
      <Code>{product.code}</Code>
      <div style={{ display: "flex" }}>
        <Gallary src={product.src} alt={product.alt} />
        <div>
          <p>
            Цена:{" "}
            <FullPrice oldPrice={product.oldPrice} newPrice={product.price} />
          </p>
          <div>
            Количестово: <Counter />
          </div>
          <p>Доставка: {product.delivery}</p>
          <Button size="large">Купить</Button>
          <Popularity count={product.comments.length} />
        </div>
      </div>
      <Description text={product.description} />
      <Comments comments={product.comments} />
    </section>
  );
};
