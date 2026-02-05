import Image from "next/image";
import "./dashboard.css";

// هذا يخلي الصفحة SSR
export const dynamic = "force-dynamic";

// دالة mock لجلب البيانات من السيرفر
async function fetchLeads() {
  // بدل هذا ممكن تربطه بـ API حقيقي لاحقاً
  return [
    { id: 1, name: "Acme Corp", status: "Open", value: "$10,000" },
    { id: 2, name: "Beta LLC", status: "Closed", value: "$7,500" },
    { id: 3, name: "Gamma Inc", status: "In Progress", value: "$12,000" },
  ];
}

export default async function DashboardPage() {
  const leads = await fetchLeads(); // جلب البيانات كل مرة يفتح فيها أحد الصفحة

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Welcome back! Here’s a summary of your leads:</p>

      <div className="leads-grid">
        {leads.map((lead) => (
          <div key={lead.id} className="lead-card">
            <h3>{lead.name}</h3>
            <p>Status: {lead.status}</p>
            <p>Value: {lead.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
