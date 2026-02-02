"use client";
import "./service.css";
import Image from "next/image";

const services = [
  {
    title: "CRM Management",
    desc: "Organize customer data, track interactions, and manage relationships efficiently.",
    icon: "/crm.png",
    link: "/services/crm"
  },
  {
    title: "Sales Tracking",
    desc: "Monitor every deal from start to finish and analyze sales performance in real time.",
    icon: "/map.png",
    link: "/services/sales"
  },
  {
    title: "Performance Analytics",
    desc: "Visualize team performance with clear dashboards and actionable insights.",
    icon: "/performance.png",
    link: "/services/analytics"
  },
  {
    title: "Customer Support",
    desc: "Provide fast and friendly support to keep your clients happy and loyal.",
    icon: "/24-hours-support.png",
    link: "/services/support"
  },
  {
    title: "Task & Pipeline Management",
    desc: "Organize daily tasks and manage pipelines for each team member effectively.",
    icon: "/checklist.png",
    link: "/services/tasks"
  },
];

export default function Services() {
  return (
    <section className="services">
      <h1>Our Services</h1>
      <p>We help businesses manage customers, track sales, and improve performance efficiently.</p>

      <div className="service-cards">
        {services.map((service, idx) => (
          <div key={idx} className="card">
            <Image
              src={service.icon}
              alt={service.title}
              width={80}
              height={80}
            />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <a href={service.link} className="btn">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
