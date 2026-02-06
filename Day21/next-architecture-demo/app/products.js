"use client";
import ProductCard from "./ProductCard";
import CartSummary from "./CartSummary";

const products = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Phone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
];

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <CartSummary />
      <div style={{ display: "flex", gap: 20 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
