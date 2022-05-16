import React, { useState } from "react";
import { Title } from "/src/title/title";
import { Code } from "/src/code/code";
import { Gallary } from "/src/gallary/gallary";
import { Description } from "/src/description/description";
import { Comments } from "/src/comments/comments";
import { Popularity } from "/src/popularity/popularity";
import { Tabs } from "/src/tabs/tabs";
import {
  BuyButton,
  DeliveryValue,
  Header,
  PageCounter,
  PageFullPrice,
  ProductInfo,
  ProductInfoLine,
  ProductWrapper,
  StyledProductCard
} from "./styled";

export const ProductCard = ({ product }) => {
  const [productCount, setProductCount] = useState(1);
  const price = product.price * productCount;
  const oldPrice = product.oldPrice * productCount;

  const tabs = [
    {
      title: "Описание",
      content: <Description text={product.description} />
    },
    {
      title: "Комментарии",
      content: <Comments comments={product.comments} />
    }
  ];

  return (
    <StyledProductCard>
      <Header>
        <Title>{product.name}</Title>
        <Code>{product.code}</Code>
      </Header>
      <ProductWrapper>
        <Gallary src={product.src} alt={product.alt} />
        <ProductInfo>
          <ProductInfoLine>
            Цена: <PageFullPrice oldPrice={oldPrice} newPrice={price} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количестово:{" "}
            <PageCounter
              value={productCount}
              minValue={1}
              onChange={setProductCount}
            />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка: </span>
            <DeliveryValue>{product.delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton size="large">Купить</BuyButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      <Tabs tabs={tabs} />
    </StyledProductCard>
  );
};
