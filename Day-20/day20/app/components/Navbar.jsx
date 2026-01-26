// app/components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#f19c9c" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/contact">Contact</Link> |{" "}
      <Link href="/services">Services</Link>
    </nav>
  );
}
