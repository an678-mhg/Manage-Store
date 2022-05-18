import React from "react";
import TableComponent from "../components/Table/Table";

const LayoutPrimary = ({ title, children }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="my-4">{children}</div>

      <TableComponent />
    </div>
  );
};

export default LayoutPrimary;
