// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routers } from "./routers";
// import { logOut } from "./redux/slice/user";

function App() {
  // const dispatch = useDispatch();

  return (
    <Routes>
      {routers.map((route) => {
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
}

export default App;
