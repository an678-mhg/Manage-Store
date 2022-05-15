import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Category from "./Category";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Statistical from "./Statistical";
import Users from "./Users";

const Admin = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <DefaultLayout>
            <Dashboard />
          </DefaultLayout>
        }
      />
      <Route
        path="category"
        element={
          <DefaultLayout>
            <Category />
          </DefaultLayout>
        }
      />
      <Route
        path="products"
        element={
          <DefaultLayout>
            <Product />
          </DefaultLayout>
        }
      />
      <Route
        path="users"
        element={
          <DefaultLayout>
            <Users />
          </DefaultLayout>
        }
      />
      <Route
        path="statistical"
        element={
          <DefaultLayout>
            <Statistical />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default Admin;
