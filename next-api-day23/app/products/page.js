import { getProducts } from "@/lib/ProductStore";

export default function ProductsPage() {
  const products = getProducts();

  return (
    <main style={{ padding: 20 }}>
      <h1>Products</h1>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
