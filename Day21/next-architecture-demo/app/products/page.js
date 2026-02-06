import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <div>
      <h1>Products</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {data.products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
