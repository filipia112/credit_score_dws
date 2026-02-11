import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import "../index.css";

export default function MainContent() {
  const kpiData = [
    { title: "Total Sales", value: "21,324", change: "+2,031" },
    { title: "Total Income", value: "$221,324.50", change: "-$2,201" },
    { title: "Total Sessions", value: "16,703", change: "+3,392" },
    { title: "Conversion Rate", value: "12.8%", change: "-1.22%" }
  ];

  const salesData = [
    { month: "Jan", Laptops: 4000, Headsets: 2400, Monitors: 2000, Phones: 3000 },
    { month: "Feb", Laptops: 3000, Headsets: 1398, Monitors: 2210, Phones: 2780 },
    { month: "Mar", Laptops: 2000, Headsets: 9800, Monitors: 2290, Phones: 2000 },
    { month: "Apr", Laptops: 2780, Headsets: 3908, Monitors: 2000, Phones: 2181 },
    { month: "May", Laptops: 1890, Headsets: 4800, Monitors: 2181, Phones: 2500 }
  ];

  const categoryData = [
    { name: "Electronics", value: 400 },
    { name: "Furniture", value: 300 },
    { name: "Toys", value: 300 }
  ];

  const colors = ["#6366f1", "#22c55e", "#f59e0b"];

  return (
    <div className="dashboard-main">
      <header className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="user-info">
          <span>Renee McKelvey</span>
          <span>Product Manager</span>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="kpi-cards">
        {kpiData.map((kpi, index) => (
          <div key={index} className="card kpi-card">
            <p>{kpi.title}</p>
            <h3>{kpi.value}</h3>
            <span>{kpi.change}</span>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Sales Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Laptops" fill="#6366f1" />
              <Bar dataKey="Headsets" fill="#22c55e" />
              <Bar dataKey="Monitors" fill="#f59e0b" />
              <Bar dataKey="Phones" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Popular Categories</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {categoryData.map((_, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Customers / Table Placeholder */}
      <div className="table-card">
        <h3>Recent Customers</h3>
        <p>Tambahkan tabel recent customer di sini.</p>
      </div>
    </div>
  );
}
