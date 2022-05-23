// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Routes } from "react-router-dom";
import { routers } from "./routers";
import ezRouters from "./utils/ezRouters";
// import { logOut } from "./redux/slice/user";

function App() {
  // const dispatch = useDispatch();

  return <Routes>{ezRouters(routers)}</Routes>;
}

export default App;
