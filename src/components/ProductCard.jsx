import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { wrapper } from "./ProductCard.module.scss";

export const ProductCard = ({ product }) => {
  const image = getImage(product.images[0]);
  const price = product.priceRangeV2.maxVariantPrice.amount;

  return (
    <div className={`${wrapper} card `}>
      <Link
        className="text-center py-3"
        to={`/products/${product.collections[0].handle}/${product.handle}`}
      >
        <GatsbyImage image={image} alt={product.images[0].altText} />
      </Link>
      <Link to={`/products/${product.collections[0].handle}/${product.handle}`}>
        <div className="card-body text-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${price}</p>
        </div>
      </Link>
    </div>
  );
};
