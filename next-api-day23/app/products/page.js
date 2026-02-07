// this is frontend code runing on the client this code send to client or visible to user.

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
