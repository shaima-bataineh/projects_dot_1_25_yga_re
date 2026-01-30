"use client"// important use to make this client component 

import { useState } from "react";

export default function HowWorks() {
  const [democlients,setDemoClients] = useState([]);

  const addDemoClient = () => {
    const newClient ={
      id:democlients.length +1,
      name:"Demo Client " + (democlients.length +1),
      email:`client${democlients.length + 1}@example.com`,

    };
    setDemoClients([...democlients,newClient]);
  };
  return (
    <section className="process-section" id="how">
      <h2>How SalesFlow Works</h2>
      <p className="process-subtitle">
        A simple and powerful workflow to manage your sales efficiently.
      </p>

      <div className="process-steps">
        <div className="process-card">
          <div className="icon-circle">1</div>
          <h4>Add Leads</h4>
          <p>Collect and organize your leads in one place.</p>
        </div>

        <div className="process-line"></div>

        <div className="process-card">
          <div className="icon-circle">2</div>
          <h4>Manage Deals</h4>
          <p>Track progress and move deals across stages.</p>
        </div>

        <div className="process-line"></div>

        <div className="process-card">
          <div className="icon-circle">3</div>
          <h4>Close Sales</h4>
          <p>Convert leads into customers faster.</p>
        </div>
      </div>

      {/*demo button */}
      <button onClick={addDemoClient} className="btn-dem">
      Try Demo Now
      </button>

      {/*demo clients display*/}
      {democlients.length>0 && (
        <div className="demo-clients">
          <h4>Demo Clients:</h4>
          <div className="client-cards">
            {democlients.map((client) =>(
              <div key={client.id} className="client-card">
                <strong>{client.name}</strong>
                <p>{client.email}</p>
                </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
