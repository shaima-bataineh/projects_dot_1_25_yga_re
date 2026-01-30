export default function DashboardLayout({
    children,
}) {

    return (
        <div >
            <aside style={{ width: "220px", background: "#1f2933", color: "#fff", padding: "20px" }}>
                <h3> Dashboard</h3>
                <ul>
                    <li>Overview</li>
                    <li>Sales</li>
                    <li>Reports</li>
                </ul>
            </aside>
            <main style={{flex: 1, padding:"30px"}}>
                {children}
            </main>
        </div>

    );
}