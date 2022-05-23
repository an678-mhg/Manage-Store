import React from "react";
import { Routes } from "react-router-dom";
import { adminRouters } from "../routers";
import ezRouters from "../utils/ezRouters";

const Admin = () => {
  return <Routes>{ezRouters(adminRouters)}</Routes>;
};

export default Admin;
