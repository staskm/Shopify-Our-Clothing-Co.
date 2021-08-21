import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import "../styles/index.scss";
import "../styles/global.scss";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Header text="Featured" />
      <main>
        <ProductList products={data.allShopifyProduct.products} />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allShopifyProduct(filter: { tags: { eq: "bestseller" } }) {
      products: nodes {
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
export default IndexPage;
