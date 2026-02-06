import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ display: "grid", gap: 12 }}>
      <h1>Session 23 - API Routes in Next.js</h1>

      <p>
        This app contains both:
        <br /> Backend (API Routes)
        <br /> Frontend (Server Components)
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href="/api/hello" style={linkStyle}>
          Open /api/hello (API)
        </a>

        <a href="/api/products" style={linkStyle}>
          Open /api/products (API)
        </a>

        <Link href="/products" style={linkStyle}>
          Go to /products (Page)
        </Link>
      </div>

      <hr />

      <p style={{ opacity: 0.8 }}>
        Teaching tip: Ask students which files are frontend vs backend
        <br />
        <code>page.tsx</code>, <code>route.js</code>, <code>layout.tsx</code>
      </p>
    </main>
  );
}

const linkStyle = {
  display: "inline-block",
  padding: "10px 12px",
  border: "1px solid #ddd",
  borderRadius: 10,
  textDecoration: "none",
};
