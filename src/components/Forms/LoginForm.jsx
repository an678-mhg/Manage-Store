import React from "react";

const LoginForm = () => {
  return (
    <div className="w-[502px] h-[542px] rounded-md bg-white px-[32px] max-w-[calc(100%-32px)]">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="mb-10 font-bold text-[25px] text-blue-500">
          Trang quản trị
        </h1>
        <div className="w-full flex relative mb-[14px]">
          <div className="absolute left-[21px] top-[50%] translate-y-[-50%]">
            <i className="bx bxs-phone-call text-[25px] text-blue-500"></i>
          </div>
          <input
            className="w-full pl-[64px] pr-[16px] py-[15.5px] border border-[#80808080] rounded-[5px] flex-1"
            placeholder="Email"
          />
        </div>
        <div className="w-full flex relative mb-[14px]">
          <div className="absolute left-[21px] top-[50%] translate-y-[-50%]">
            <i className="bx bx-key text-[25px] text-blue-500"></i>
          </div>
          <input
            className="w-full pl-[64px] pr-[16px] py-[15.5px] border border-[#80808080] rounded-[5px] flex-1"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <input className="w-[20px] h-[20px] bg-primary" type="checkbox" />
            <span className="ml-[14px] text-[16px] font-medium leading-[20px] text-blue-300">
              Nhớ mật khẩu
            </span>
          </div>
          <div className="cursor-pointer">
            <span className="ml-[14px] text-[16px] font-medium leading-[20px] text-blue-500">
              Quên mật khẩu
            </span>
          </div>
        </div>
        <button className="text-[20px] leading-[20px] font-bold text-white bg-blue-500 w-full mt-[54px] py-[18.5px] rounded-[5px]">
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
