import React from "react";
import { Image } from "/src/elements";

export const Gallary = ({ src, alt }) => {
  return <Image width="200" height="257" maxWidth="200" src={src} alt={alt} />;
};
