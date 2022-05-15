import React from "react";
import LoginForm from "../components/Forms/LoginForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useSearchParams from "../hooks/useSearchParams";

const Login = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const searchParams = useSearchParams();
  if (currentUser) return <Navigate to={searchParams.get("redirect") || "/"} />;

  return (
    <div className="h-screen bg-center flex items-center justify-center bg-blue-500">
      <LoginForm />
    </div>
  );
};

export default Login;
