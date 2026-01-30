
import "./globals.css";
import "@/components/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "@/components/boot";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavbarClient from "@/components/NavbarClient"; // خط أحمر يختفي الآن بعد إنشاء الملف
import React from "react";
import dynamic from "next/dynamic";

export const metadata ={
  title:"SalesFlow",
  description: "Sales Automation Platform",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body className="app-layout">
         <NavbarClient />
        
        <main className="page-content">
        <BootstrapClient />
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
