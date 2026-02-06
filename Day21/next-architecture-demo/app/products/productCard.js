import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 12,
        display: "grid",
        gap: 8,
      }}
    >
      <strong>{product.title}</strong>
      <span>Price: ${product.price}</span>

      <AddToCartButton product={product} />
    </div>
  );
}
