import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductCard } from "./product-card";

import { product } from "./mock";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductCard product={product} />
  </StrictMode>
);
