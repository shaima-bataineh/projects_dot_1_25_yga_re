import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="products-list">
      {products.map(product => (
        <ProductCard
          key={product.id}      //  React فقط(المستخدم لا يراه)
          product={product}     //  object كامل
        />
      ))}
    </div>
  );
}

export default ProductsList;
