// HHHHHHHomme
import "./css/home.css"; // فقط CSS خاص بالهوم
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowWorks from "@/components/HowWorks";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowWorks />
      <CTA />
    </>
  );
}
