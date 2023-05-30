import { products } from "../products";
import ProductItem from "./ProductItem";
function Products() {
  return products.map((product, index) => {
    return <ProductItem product={product} index={index} />;
  });
}

export default Products;
