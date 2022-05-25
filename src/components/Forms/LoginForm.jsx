import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginApi } from "../../api/auth";
import { toast } from "react-toastify";
import { setUser } from "../../redux/slice/user";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await loginApi(data);
      localStorage.setItem("idUser", res.data.user.id);
      localStorage.setItem("token", res.data.accessToken);
      dispatch(setUser(res.data.user));
    } catch (error) {
      toast.error(error.response.data);
    }
    setLoading(false);
  };

  return (
    <form
      className="w-[500px] py-10 rounded-md bg-white px-[32px] max-w-[calc(100%-32px)]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="mb-10 font-bold text-[25px] text-blue-500">
          Trang quản trị
        </h1>
        <div className="w-full flex mb-[14px] flex-col">
          <input
            {...register("email", {
              required: { value: true, message: "Trường này là bắt buộc!" },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, // eslint-disable-line
                message: "Định dạng email không hợp lệ!",
              },
            })}
            className="w-full px-3 py-2 border border-blue-500 rounded-[5px]"
            placeholder="Email"
          />
          {errors.email?.message && (
            <span className="mt-2 text-red-500 text-xs">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="w-full flex mb-[14px] flex-col">
          <input
            {...register("password", {
              required: { value: true, message: "Trường này là bắt buộc!" },
              minLength: {
                value: 6,
                message: "Mật khẩu phải có ít nhất 6 kí tự!",
              },
            })}
            className="w-full px-3 py-2 border border-blue-500 rounded-[5px]"
            placeholder="Password"
            type="password"
          />
          {errors.password?.message && (
            <span className="mt-2 text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <input className="w-[20px] h-[20px] bg-primary" type="checkbox" />
            <span className="ml-[8px] text-[16px] font-medium leading-[20px] text-blue-400">
              Nhớ mật khẩu
            </span>
          </div>
          <div className="cursor-pointer">
            <span className="ml-[14px] text-[16px] font-medium leading-[20px] text-blue-500">
              Quên mật khẩu
            </span>
          </div>
        </div>
        <button
          disabled={loading}
          className={`leading-[20px] font-semibold text-white bg-blue-500 w-full mt-[54px] px-4 py-3 rounded-[5px] ${
            loading && "opacity-50"
          }`}
        >
          {loading ? "Chờ tí nha...." : "Đăng nhập"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
