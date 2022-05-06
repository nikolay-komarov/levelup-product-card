import React from "react";
import { Title } from "./title";
import { Code } from "./code";
import { Gallary } from "./gallary";
import { OldPrice } from "./old-price";
import { NewPrice } from "./new-price";
import { Counter } from "./counter";
import { Description } from "./description";

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
        </div>
      </div>
      <Description text={product.description} />
    </section>
  );
};
