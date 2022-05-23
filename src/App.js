import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes } from "react-router-dom";
import { routers } from "./routers";
import ezRouters from "./utils/ezRouters";
import { logOut, setUser } from "./redux/slice/user";
import { authenticationApi } from "./api/auth";
import setAuthToken from "./utils/setToken";
import { BarWave } from "react-cssfx-loading";

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("token") && localStorage.getItem("idUser")) {
        const token = localStorage.getItem("token");
        const idUser = localStorage.getItem("idUser");

        setAuthToken(token);

        try {
          const res = await authenticationApi(idUser);
          dispatch(setUser(res.data));
        } catch (error) {
          dispatch(logOut());
        }
      }
    })();
  }, []);

  if (typeof currentUser === "undefined")
    return (
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-white flex items-center justify-center">
        <BarWave />
      </div>
    );

  return <Routes>{ezRouters(routers)}</Routes>;
}

export default App;
