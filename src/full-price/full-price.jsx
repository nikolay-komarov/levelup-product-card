import React from "react";
import { InnerPrice, PriceWrapper } from "./styled";
import { OldPrice } from "/src/old-price/old-price";

export const FullPrice = ({ newPrice, oldPrice, className }) => {
  const showOldPrice = oldPrice && newPrice < oldPrice;

  return (
    <PriceWrapper className={className}>
      {showOldPrice ? <OldPrice value={oldPrice} /> : " "}
      <InnerPrice value={newPrice} />
    </PriceWrapper>
  );
};
