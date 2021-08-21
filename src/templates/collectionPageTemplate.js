import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";

export default function ProductCollectionIndex({
  data: { shopifyCollection },
}) {
  return (
    <Layout>
      <Header text={shopifyCollection.title} />
      <ProductList products={shopifyCollection.products} />
    </Layout>
  );
}

export const query = graphql`
  query ($collectionID: String!) {
    shopifyCollection(id: { eq: $collectionID }) {
      title
      products {
        id
        title
        handle
        collections {
          handle
        }
        images {
          altText
          src
          gatsbyImageData(width: 200, breakpoints: 10)
          height
          width
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
      }
    }
  }
`;
