import React from "react";
import { SEO } from "./SEO";
import { wrapper } from "./Layout.module.scss";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div
      className={`${wrapper} container-xl
       `}
    >
      <SEO />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
