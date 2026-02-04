import Link from "next/link";

export default function HomePage()
{
  return(
    <main style={{padding:24}}>

      <h1>DeployReady Store</h1>
      <p> Session 24 Project: Deploy + Env + Build Optimization</p>
    
    <Link href="/products">
    Go to Products
    </Link>
    </main>
  );
}