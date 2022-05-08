import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { ProductCard } from "/src/product-card/product-card";
import { theme } from "/src/theme/defaultTheme";

import { product } from "./mock";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ProductCard product={product} />
    </ThemeProvider>
  </StrictMode>
);
