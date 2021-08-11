import React from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_STORE_URL,
  storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
});

const defaultValues = {
  cart: [],
  addProductToCart: () => {},
  removeLineItem: () => {},
  client,
  checkout: {
    lineItems: [],
  },
};

export const StoreContext = React.createContext(defaultValues);

const isBrowser = typeof window !== "undefined";
const localStorageKey = "shopify_checkout_id";

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = React.useState(defaultValues.checkout);
  const [didJustAddToCart, setDidJustAddToCart] = React.useState(false);

  const setCheckoutItem = (checkout) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id);
    }

    setCheckout(checkout);
  };

  React.useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser
        ? localStorage.getItem(localStorageKey)
        : null;

      if (existingCheckoutID && existingCheckoutID !== `null`) {
        try {
          const existingCheckout = await client.checkout.fetch(
            existingCheckoutID
          );
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout);
            return;
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, null);
        }
      }

      const newCheckout = await client.checkout.create();
      setCheckoutItem(newCheckout);
    };

    initializeCheckout();
  }, []);

  const addProductToCart = (variantId) => {
    const checkoutId = checkout.id;
    const lineItemsToUpdate = [
      {
        variantId,
        quantity: 1,
      },
    ];

    return client.checkout
      .addLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => {
        setCheckout(res);
        setDidJustAddToCart(true);
        console.log("didjustaddtocart", didJustAddToCart);
        setTimeout(() => setDidJustAddToCart(false), 3000);
      });
  };

  const removeLineItem = (checkoutID, lineItemID) => {
    return client.checkout
      .removeLineItems(checkoutID, [lineItemID])
      .then((res) => {
        setCheckout(res);
      });
  };

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addProductToCart,
        removeLineItem,
        checkout,
        didJustAddToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
