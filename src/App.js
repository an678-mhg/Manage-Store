// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Shared/PrivateRoute";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
// import { logOut } from "./redux/slice/user";

function App() {
  // const dispatch = useDispatch();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
