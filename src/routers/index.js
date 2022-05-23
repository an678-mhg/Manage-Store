import { Fragment } from "react";
import PrivateRoute from "../components/Shared/PrivateRoute";
import Admin from "../pages/Admin";
import Login from "../pages/Login";

import DefaultLayout from "../layout/DefaultLayout";
import Category from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";
import Users from "../pages/Users";

export const routers = [
  {
    path: "/*",
    component: Admin,
    layout: PrivateRoute,
  },
  {
    path: "/login",
    component: Login,
    layout: Fragment,
  },
];

export const adminRouters = [
  {
    path: "",
    component: Dashboard,
    layout: DefaultLayout,
  },
  {
    path: "category",
    component: Category,
    layout: DefaultLayout,
  },
  {
    path: "products",
    component: Product,
    layout: DefaultLayout,
  },
  {
    path: "users",
    component: Users,
    layout: DefaultLayout,
  },
];
