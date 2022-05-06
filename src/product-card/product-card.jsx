import React from "react";
import { Title } from "/src/title/title";
import { Code } from "/src/code/code";
import { Gallary } from "/src/gallary/gallary";
import { OldPrice } from "/src/old-price/old-price";
import { NewPrice } from "/src/new-price/new-price";
import { Counter } from "/src/counter/counter";
import { Description } from "/src/description/description";
import { Comments } from "/src/comments/comments";
import { Popularity } from "/src/popularity/popularity";

export const ProductCard = ({ product }) => {
  return (
    <section>
      <Title>{product.name}</Title>
      <Code>{product.code}</Code>
      <div style={{ display: "flex" }}>
        <Gallary src={product.src} alt={product.alt} />
        <div>
          <p>
            Цена: <OldPrice value={product.oldPrice} />{" "}
            <NewPrice value={product.price} />
          </p>
          <div>
            Количестово: <Counter />
          </div>
          <p>Доставка: {product.delivery}</p>
          <button>Купить</button>
          <Popularity count={product.comments.length} />
        </div>
      </div>
      <Description text={product.description} />
      <Comments comments={product.comments} />
    </section>
  );
};
