import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { cardImage, wrapper } from "./ProductCard.module.scss";

export const ProductCard = ({ product }) => {
  const image = getImage(product.images[0]);
  const price = product.priceRangeV2.maxVariantPrice.amount;

  return (
    <div className={`${wrapper} p-3 card mb-3 text-center `}>
      <Link
        className={`${wrapper} `}
        to={`/products/${product.collections[0].handle}/${product.handle}`}
      >
        <GatsbyImage
          className={`${cardImage}`}
          image={image}
          alt={product.images[0].altText}
        />
        <div className="card-body">
          <h5 className={`card-title`}>{product.title}</h5>
          <p className="card-text ">${price}</p>
        </div>
      </Link>
    </div>
  );
};
