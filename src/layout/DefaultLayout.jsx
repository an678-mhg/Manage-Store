import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DefaultLayout = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleToggleMenu = () => {
    setShow(!show);
  };

  return (
    <div className="flex">
      <Sidebar show={show} />

      <div className="flex-1">
        <Header handleToggleMenu={handleToggleMenu} />

        <div className="p-[20px] h-[calc(100vh-69px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
