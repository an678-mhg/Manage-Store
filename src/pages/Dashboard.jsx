import React from "react";
import Box from "../components/Box";
import ChartDashboard from "../components/Charts/ChartDashboard";
import ChartPie from "../components/Charts/ChartPie";
import Title from "../components/Shared/Title";

const dashboards = [
  {
    name: "Danh mục",
    count: 100000000,
    color: "#3498db",
  },
  {
    name: "Nhân viên",
    count: 20,
    color: "#2ecc71",
  },
  {
    name: "Sản phẩm",
    count: 100,
    color: "#f1c40f",
  },
  {
    name: "Khác",
    count: 200,
    color: "#e74c3c",
  },
];

const Dashboard = () => {
  return (
    <div>
      <Title title="Trang Tổng Quan" />
      <h1 className="text-2xl font-bold">Trang tổng quan</h1>
      <div className="grid grid-cols-4 gap-3 mt-4">
        {dashboards.map((dashboard, index) => (
          <Box dashboard={dashboard} key={index} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="bg-white shadow-md p-3 rounded-md">
          <ChartDashboard />
        </div>

        <div className="bg-white shadow-md p-3 rounded-md">
          <ChartPie />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
