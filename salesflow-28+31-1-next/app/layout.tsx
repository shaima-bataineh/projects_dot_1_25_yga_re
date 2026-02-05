
import "./globals.css";
// import "@/components/layout/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "@/components/boot";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import React from "react";
import dynamic from "next/dynamic";
import BackTOTop from "@/components/common/Backtotop";

export const metadata ={
  title:"SalesFlow",
  description: "Sales Automation Platform",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body className="app-layout">
         <Navbar />
        <main className="page-content">
        <BootstrapClient />
        {children}
        </main>
        <BackTOTop/>
        <Footer />
      </body>
    </html>
  );
}
