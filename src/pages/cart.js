import React from "react";
import { CartItem } from "../components/CartItem";
import { Layout } from "../components/Layout";
import { StoreContext } from "../context/store-context";
import {
  cartTable,
  tableHeader,
  checkoutButton,
} from "../styles/cart.module.scss";

export default function Cart() {
  const { checkout } = React.useContext(StoreContext);

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  console.log(checkout);

  return (
    <Layout>
      <h1>Cart</h1>
      <table className={`${cartTable} `}>
        <tbody>
          <tr>
            <th className={`${tableHeader} `}></th>
            <th className={`${tableHeader} `}>Product</th>
            <th className={`${tableHeader} `}>Price</th>
            <td></td>
            <td></td>
          </tr>
          {checkout.lineItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>subtotal</td>
            <td>{checkout.totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <button
        className={`${checkoutButton} btn btn-main`}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </Layout>
  );
}
