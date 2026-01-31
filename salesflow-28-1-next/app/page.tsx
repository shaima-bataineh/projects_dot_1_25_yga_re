// HHHHHHHomme
import "./css/home.css";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowWorks from "@/components/home/HowWorks";
import CTA from "@/components/home/CTA";


const steps = [
  { id: 1, title: "Add Leads" },
  { id: 2, title: "Manage Deals" },
  { id: 3, title: "Close Sales" },
];

export default async function Home() {

  return (
    <div className="main-container">

      <section className="section section-home">
        <Hero />
      </section>

      <section className="section section-features">
        <Features />
      </section>

      <section className="section section-process">
        <HowWorks steps={steps}/>
      </section>

      <section className="section section-cta">
        <CTA />
      </section>

    </div>
  );
}
