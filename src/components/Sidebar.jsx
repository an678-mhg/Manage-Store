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

const Sidebar = () => {
  return (
    <div className="bg-blue-500 shadow-md h-screen text-white w-[250px] md:block hidden">
      <div className="p-[20px]">
        <Link to="/" className="text-[30px] font-semibold flex items-center">
          Dashboard
        </Link>
      </div>

      <ul className="mt-[30px]">
        {items.map((item) => (
          <li key={item.name}>
            <NavLink
              activeclassname="active"
              className="flex items-center py-3 px-[20px]"
              to={`${item.path}`}
            >
              <i className={`${item.icon} text-[20px]`}></i>{" "}
              <span className="ml-[10px] text-[18px]">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
