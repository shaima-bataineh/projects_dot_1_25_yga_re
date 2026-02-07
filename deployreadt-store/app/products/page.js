// 

import style from "./page.module.css";

async function getproduct() {
  const baseurl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseurl}/api/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("failed to fetch products");
  return res.json();
}

export default async function ProductPage() {
  const data = await getproduct();

  return (
    <main className={style.page}>
      <div className={style.main}>
        <h1>Products</h1>
        <p>Total: {data.total}</p>

        <div className={style.grid}>
          {data.products.map(p => (
            <div key={p.id} className={style.card}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>Price: JOD {p.price}</p>
              <p>In Stock: {p.inStock ? "Yes" : "No"}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
