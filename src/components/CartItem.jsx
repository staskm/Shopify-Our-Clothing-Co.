import React from "react";
import { graphql } from "gatsby";
import { StoreContext } from "../context/store-context";
import { GatsbyImage } from "gatsby-plugin-image";
import { getShopifyImage } from "gatsby-source-shopify";
// import { IoRemoveCircleSharp } from "react-icons/io5";

export const CartItem = ({ item }) => {
  const { checkout, removeLineItem } = React.useContext(StoreContext);
  const variantImage = {
    ...item.variant.image,
    originalSrc: item.variant.image.src,
  };

  const image = React.useMemo(
    () =>
      getShopifyImage({
        image: variantImage,
        layout: "constrained",
        crop: "contain",
        width: 200,
        height: 200,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [variantImage.src]
  );

  return (
    <>
      {item && (
        <tr>
          <td>
            <GatsbyImage image={image} alt={item.variant.image.altText} />
          </td>
          <td className="fw-bold">{item.title}</td>
          <td>
            <div className="d-flex justify-content-around">
              {/* d-flex flex-column  align-items-start */}
              <p className=" p-0 display-inline-block my-auto ">
                ${item.variant.price}
              </p>
              <button
                onClick={() => {
                  removeLineItem(checkout.id, item.id);
                }}
                className="btn fw-lighter p-0 text-decoration-underline"
              >
                x
              </button>
            </div>
          </td>
          <td></td>
          <td></td>
        </tr>
      )}
    </>
  );
};

// export const query = graphql`
//   query ($variantID: String!) {
//     shopifyProduct(
//       variants: { elemMatch: { storefrontId: { eq: $variantID } } }
//     ) {
//       id
//       handle
//       collections {
//         handle
//       }
//     }
//   }
// `;
