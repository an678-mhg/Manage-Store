import React from "react";
import { Route, Routes } from "react-router-dom";
import { adminRouters } from "../routers";

const Admin = () => {
  return (
    <Routes>
      {adminRouters.map((route) => {
        const Component = route.component;
        const Layout = route.layout;

        return (
          <Route
            key={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
            path={route.path}
          />
        );
      })}
    </Routes>
  );
};

export default Admin;
