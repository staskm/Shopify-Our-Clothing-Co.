import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Layout } from "../components/Layout";
import { wrapper } from "./productPageTemplate.module.scss";
import { StoreContext } from "../context/store-context";

export default function ProductPageTemplate({ data: { shopifyProduct } }) {
  const image = getImage(shopifyProduct.images[0]);
  const { addProductToCart } = React.useContext(StoreContext);
  const variantId = shopifyProduct.variants[0].storefrontId;

  return (
    <Layout>
      <div className={`${wrapper} text-center container-xl pb-3`}>
        <div>
          <GatsbyImage image={image} alt={shopifyProduct.images[0].altText} />
        </div>
        <div className={`align-self-center`}>
          <h1>{shopifyProduct.title}</h1>
          <p className={`display-1 `}>$10</p>
          <button
            onClick={() => {
              addProductToCart(variantId);
            }}
            className={`btn btn-main mb-3`}
          >
            Add to cart
          </button>
          <p className={`description `}>{shopifyProduct.description}</p>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($productID: String!) {
    shopifyProduct(id: { eq: $productID }) {
      id
      title
      description
      variants {
        storefrontId
      }
      images {
        src
        altText
        gatsbyImageData(width: 500, breakpoints: 10)
      }
    }
  }
`;
