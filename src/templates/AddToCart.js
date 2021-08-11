import React from "react";
import { glowOnHover } from "../styles/glowOnHover.module.scss";
import { StoreContext } from "../context/store-context";

export const AddToCart = ({ shopifyProduct }) => {
  const { addProductToCart } = React.useContext(StoreContext);

  const variantId = shopifyProduct.variants[0].storefrontId;
  return (
    <>
      <button
        onClick={() => {
          addProductToCart(variantId);
        }}
        className={`${glowOnHover} btn btn-dark btn-lg mb-3`}
      >
        Add to cart
      </button>
    </>
  );
};
