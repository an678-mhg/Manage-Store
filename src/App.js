import { Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        const Layout = route.layout;
        const Component = route.component;

        return (
          <Route
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
            key={index}
          />
        );
      })}
    </Routes>
  );
}

export default App;
