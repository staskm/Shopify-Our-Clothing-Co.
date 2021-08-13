import React from "react";
import { StoreContext } from "../context/store-context";
import { Link } from "gatsby";
import { RiHome7Fill } from "react-icons/ri";
import { CartButton } from "./CartButton";
import { Toast } from "./Toast";
import { wrapper } from "./Navigation.module.scss";

export const Navigation = () => {
  const { didJustAddToCart } = React.useContext(StoreContext);

  return (
    <nav className={`${wrapper} container-xl py-2 `}>
      <div className={`w-100 h-100 d-flex justify-content-between `}>
        <div className={`d-flex`}>
          <Link to="/" className={`nav-link center`}>
            <RiHome7Fill />
          </Link>
          <ul className={`nav`}>
            <li className="nav-item center">
              <Link to="/products/women" className="nav-link">
                Women
              </Link>
            </li>
            <li className="nav-item center">
              <Link to="/products/men" className="nav-link">
                Men
              </Link>
            </li>
            <li className="nav-item center">
              <Link to="/products/kid" className="nav-link">
                Kids
              </Link>
            </li>
          </ul>
        </div>
        <div className={`nav-item center d-flex justify-content-end`}>
          <CartButton />
        </div>
      </div>
      <Toast show={didJustAddToCart} />
    </nav>
  );
};
