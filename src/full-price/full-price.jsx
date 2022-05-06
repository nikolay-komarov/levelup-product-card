import React from "react";
import { InnerPrice, PriceWrapper } from "./styled";
import { OldPrice } from "/src/old-price/old-price";

export const FullPrice = ({ newPrice, oldPrice }) => {
  const showOldPrice = oldPrice && newPrice < oldPrice;

  return (
    <PriceWrapper>
      {showOldPrice ? <OldPrice value={oldPrice} /> : " "}
      <InnerPrice value={newPrice} />
    </PriceWrapper>
  );
};
