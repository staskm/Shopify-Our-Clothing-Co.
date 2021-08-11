import React from "react";
import { Link } from "gatsby";
import { RiShoppingCartFill } from "react-icons/ri";
import { StoreContext } from "../context/store-context";
import { wrapper, badge } from "./CartButton.module.scss";

export const CartButton = () => {
  const { checkout } = React.useContext(StoreContext);

  const items = checkout ? checkout.lineItems : [];

  const quantity = items.reduce((total) => {
    return total + 1;
  }, 0);

  return (
    <Link to="/cart" className={`${wrapper} `}>
      <RiShoppingCartFill />
      {quantity > 0 && <div className={`${badge} `}>{quantity}</div>}
    </Link>
  );
};
