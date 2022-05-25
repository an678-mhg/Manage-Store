import React from "react";
import LoginForm from "../components/Forms/LoginForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useSearchParams from "../hooks/useSearchParams";
import Title from "../components/Shared/Title";

const Login = () => {
  const { currentUser } = useSelector((state) => state.user);
  const searchParams = useSearchParams();
  if (currentUser) return <Navigate to={searchParams.get("redirect") || "/"} />;

  return (
    <div className="h-screen bg-center flex items-center justify-center bg-blue-500">
      <Title title="Đăng Nhập" />
      <LoginForm />
    </div>
  );
};

export default Login;
