"use client";
import { useState } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
}

interface Client {
  id: number;
  name: string;
  email: string;
}

interface HowWorksProps {
  steps: Step[];
}

export default function HowWorks({ steps }: HowWorksProps) {
  const [demoClients, setDemoClients] = useState<Client[]>([]);

  const addDemoClient = () => {
    const newClient: Client = {
      id: demoClients.length + 1,
      name: `Demo Client ${demoClients.length + 1}`,
      email: `client${demoClients.length + 1}@example.com`,
    };
    setDemoClients([...demoClients, newClient]);
  };

  return (
    <div className="process-container">
      <div className="process-header">
        <h2>How SalesFlow Works</h2>
        <p className="process-subtitle">
          Follow these simple steps to manage your sales process efficiently.
        </p>
      </div>

      <div className="process-steps">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-number">{step.id}</div>
            <h4 className="step-title">{step.title}</h4>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </div>

      <button onClick={addDemoClient} className="btn-dem">
        Try Demo Now
      </button>

      {demoClients.length > 0 && (
        <div className="demo-clients">
          {demoClients.map((client) => (
            <div key={client.id} className="client-card">
              <strong>{client.name}</strong>
              <p>{client.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
