import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowWorks from "../components/HowWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import  "../css/home.css";

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <HowWorks/>
    <CTA/>
    <Footer/>
    
    </>
  );
}

export default Home;
