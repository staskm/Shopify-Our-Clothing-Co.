import React from "react";
import { wrapper } from "./Layout.module.scss";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div
      className={`${wrapper} container-xl
     `}
    >
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
