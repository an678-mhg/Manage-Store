import React from "react";

const LayoutPrimary = ({ title, children }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="my-4">{children}</div>
    </div>
  );
};

export default LayoutPrimary;
