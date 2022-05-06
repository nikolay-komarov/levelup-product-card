import React from "react";
import { Title } from "/src/title/title";
import { Code } from "/src/code/code";
import { Gallary } from "/src/gallary/gallary";
import { Description } from "/src/description/description";
import { Comments } from "/src/comments/comments";
import { Popularity } from "/src/popularity/popularity";
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
            Цена:{" "}
            <PageFullPrice
              oldPrice={product.oldPrice}
              newPrice={product.price}
            />
          </ProductInfoLine>
          <ProductInfoLine>
            Количестово: <PageCounter />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка: </span>
            <DeliveryValue>{product.delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton size="large">Купить</BuyButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      <Description text={product.description} />
      <Comments comments={product.comments} />
    </StyledProductCard>
  );
};
