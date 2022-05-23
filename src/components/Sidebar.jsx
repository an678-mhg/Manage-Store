import React from "react";
import { NavLink, Link } from "react-router-dom";

const items = [
  {
    path: "/",
    name: "Thống kê",
    icon: "bx bxl-stack-overflow",
  },
  {
    path: "/category",
    name: "Danh mục",
    icon: "bx bx-list-ul",
  },
  {
    path: "/products",
    name: "Sản phẩm",
    icon: "bx bx-code-alt",
  },
  {
    path: "/users",
    name: "Nhân viên",
    icon: "bx bx-user",
  },
];

const Sidebar = ({ show }) => {
  return (
    <div
      className={`bg-blue-500 shadow-md h-screen ${
        show ? "w-[250px]" : "w-[80px]"
      } text-white md:block hidden transition`}
    >
      <div
        className={`px-[20px] py-2 flex items-center ${
          show || "justify-center"
        }`}
      >
        <Link
          to="/"
          className="text-[30px] font-semibold flex items-center hover:bg-blue-500"
        >
          {show ? "Dashboard" : "D"}
        </Link>
      </div>

      <ul className="mt-[30px]">
        {items.map((item) => (
          <li key={item.name}>
            <NavLink
              activeclassname="active"
              className={`flex items-center ${
                show || "justify-center"
              } py-3 px-[20px]`}
              to={`${item.path}`}
            >
              <i className={`${item.icon} text-[20px]`}></i>{" "}
              {show && (
                <span className="ml-[10px] text-[18px]">{item.name}</span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
