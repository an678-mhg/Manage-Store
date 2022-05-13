import React from "react";

const LoginForm = () => {
  
  return (
    <div className="w-[500px] py-10 rounded-md bg-white px-[32px] max-w-[calc(100%-32px)]">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="mb-10 font-bold text-[25px] text-blue-500">
          Trang quản trị
        </h1>
        <div className="w-full flex mb-[14px]">
          <input
            className="w-full px-4 py-2 border border-blue-500 rounded-[5px]"
            placeholder="Email"
          />
        </div>
        <div className="w-full flex relative mb-[14px]">
          <input
            className="w-full px-4 py-2 border border-blue-500 rounded-[5px]"
            placeholder="Password"
          />
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
        <button className="leading-[20px] font-semibold text-white bg-blue-500 w-full mt-[54px] px-4 py-3 rounded-[5px]">
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
