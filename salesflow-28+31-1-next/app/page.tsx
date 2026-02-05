// app/page.jsx (Home)
import "./css/home.css";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowWorks from "@/components/home/HowWorks";
import CTA from "@/components/home/CTA";

const stepsData = [
  { id: 1, title: "Add Clients", description: "Add your clients easily with custom fields." },
  { id: 2, title: "Track Interactions", description: "Monitor every interaction with clients." },
  { id: 3, title: "Analyze Performance", description: "View analytics and reports to improve sales." },
  { id: 4, title: "Grow Efficiently", description: "Automate tasks and focus on growth." }
];

export default function Home() {
  return (
    <main className="main-container">

      <section className="section section-home">
        <Hero />
      </section>

      <section className="section section-features">
        <Features />
      </section>

      <section className="section section-process">
        <HowWorks steps={stepsData} />
      </section>

      <section className="section section-cta">
        <CTA />
      </section>

    </main>
  );
}
