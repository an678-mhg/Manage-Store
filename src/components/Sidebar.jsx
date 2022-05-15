import React from "react";
import { Link, useParams } from "react-router-dom";

const items = [
  {
    path: "/category",
    name: "Category",
    icon: "bx bx-list-ul",
  },
  {
    path: "/products",
    name: "Products",
    icon: "bx bx-code-alt",
  },
  {
    path: "/users",
    name: "Users",
    icon: "bx bx-user",
  },
  {
    path: "/statistical",
    name: "Statistical",
    icon: "bx bxl-stack-overflow",
  },
];

const Sidebar = () => {
  const params = useParams();

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
            <Link
              className={`flex items-center py-3 px-[20px] ${
                item.name.toLowerCase() === params["*"] && "bg-blue-600"
              }`}
              to={`${item.path}`}
            >
              <i className={`${item.icon} text-[20px]`}></i>{" "}
              <span className="ml-[10px] text-[18px]">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
