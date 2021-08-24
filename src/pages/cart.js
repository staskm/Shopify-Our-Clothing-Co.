import React from "react";
import { CartItem } from "../components/CartItem";
import { Layout } from "../components/Layout";
import { StoreContext } from "../context/store-context";
import { cartTable, checkoutButton } from "../styles/cart.module.scss";

export default function Cart() {
  const { checkout } = React.useContext(StoreContext);

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  return (
    <Layout>
      {!checkout.lineItems.length ? (
        <div className="fs-1">
          <div>
            <span role="img" aria-label="cart-icon" className="center">
              🛒💨
            </span>
          </div>
          <p className="center">Your cart is empty</p>
        </div>
      ) : (
        <>
          <h1 className="fw-bold">Cart</h1>
          <table className={`${cartTable} mb-3`}>
            <tbody>
              {checkout.lineItems.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
              <tr>
                <td></td>
                <td></td>
                <td className="fw-bold">Subtotal: ${checkout.totalPrice}</td>
              </tr>
              <tr className="ml-auto">
                <td></td>
                <td></td>
                <td>
                  <button
                    className={`${checkoutButton} mr-auto btn btn-lg btn-dark`}
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </Layout>
  );
}
