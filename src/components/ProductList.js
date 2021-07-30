import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }) => {
  return (
    <div className="container  mb-3">
      <div className="row ">
        {products.map((product) => {
          return (
            <div key={product.id} className="col col-sm-6 col-md-4 mt-5">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
