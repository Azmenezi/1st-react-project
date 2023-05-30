import React from "react";

const ProductItem = ({ product, index }) => {
  return (
    <div className="product" key={index + "jhgjhg"}>
      <img className="prod-img" src={product.image} alt={product.name} />
      <p className="prod-name">{product.name}</p>
      <p className="prod-name">{product.price} kd</p>
    </div>
  );
};

export default ProductItem;
