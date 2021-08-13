import * as React from "react";
import { StoreProvider } from "./src/context/store-context";
import "./src/styles/global.scss";

export const wrapRootElement = ({ element }) => {
  return <StoreProvider>{element}</StoreProvider>;
};
