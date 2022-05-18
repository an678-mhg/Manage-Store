import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-[20px]">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
