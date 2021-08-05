import React from "react";
import { Link } from "gatsby";
import { RiHome7Fill, RiShoppingCartFill } from "react-icons/ri";
import { wrapper, icon, left_item, right_item } from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav
      className={`${wrapper} container-xl py-2 d-flex  justify-content-between`}
    >
      <div className={`${left_item} nav-item d-flex`}>
        <Link to="/" className={`nav-link d-flex align-items-center`}>
          <RiHome7Fill className={`${icon} `} />
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
      <div
        className={`${(right_item, icon)} nav-item d-flex justify-content-end`}
      >
        <Link to="/cart" className="nav-link">
          <RiShoppingCartFill className={`${icon} `} />
        </Link>
      </div>
    </nav>
  );
};
