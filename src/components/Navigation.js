import React from "react";
import { StoreContext } from "../context/store-context";
import { Link } from "gatsby";
import { RiHome7Fill } from "react-icons/ri";
import { CartButton } from "./CartButton";
import { Toast } from "./Toast";
import { wrapper, left_item, right_item } from "./Navigation.module.scss";

export const Navigation = () => {
  const { didJustAddToCart } = React.useContext(StoreContext);

  console.log(didJustAddToCart);

  return (
    <nav
      className={`${wrapper} container-xl py-2 d-flex  justify-content-between`}
    >
      <div className={`${left_item} nav-item d-flex`}>
        <Link to="/" className={`nav-link d-flex align-items-center`}>
          <RiHome7Fill />
        </Link>
        <ul className={`nav `}>
          <li className="nav-item ">
            <Link to="/products/women" className="nav-link">
              Women
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products/men" className="nav-link">
              Men
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products/kid" className="nav-link">
              Kids
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${right_item} nav-item d-flex justify-content-end`}>
        <CartButton />
      </div>

      <Toast show={didJustAddToCart} />
    </nav>
  );
};
