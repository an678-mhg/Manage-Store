import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/slice/user";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white h-[69px] shadow-md flex items-center justify-between px-[20px]">
      <div>
        <i className="bx bx-menu text-[30px]"></i>
      </div>
      <h1 className="font-semibold flex items-center">
        <i className="text-[30px] bx bx-shopping-bag"></i>{" "}
        <span className="ml-[10px] text-[25px]">MyStore</span>
      </h1>
      <div className="relative parents">
        <div className="w-[40px] h-[40px]">
          <img
            className="rounded-full"
            alt="avatar"
            src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/139437052_801021070484467_6579343261364892799_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=SwZ-xo-09TYAX9ILVFt&tn=18I7kIywl0Z1hEFj&_nc_ht=scontent.fvca1-2.fna&oh=00_AT_2pFXpyjcWXdWwUOpFLFexqYAlvGtwYZDdbw_kFGDQaQ&oe=62A718AE"
          />
        </div>

        <ul className="absolute bg-white right-0 shadow-md rounded-sm p-3 children">
          <li className="p-2">an567008@gmail.com</li>
          <li className="p-2">Admin</li>
          <li onClick={() => dispatch(logOut())} className="p-2 cursor-pointer">
            Đăng xuất
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
