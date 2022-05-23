import { Route } from "react-router-dom";

const ezRouters = (routers) => {
  return routers.map((route) => {
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
  });
};

export default ezRouters;
