import React from "react";

const Header = () => {
  return (
    <div className="bg-white h-[69px] shadow-md flex items-center justify-between px-[20px]">
      <div>
        <i className="bx bx-menu text-[30px]"></i>
      </div>
      <h1 className="font-semibold flex items-center">
        <i className="text-[30px] bx bx-shopping-bag"></i>{" "}
        <span className="ml-[10px] text-[25px]">MyStore</span>
      </h1>
      <div>
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-blue-400 border-[2px]">
          <img
            className="rounded-full"
            alt="avatar"
            src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/139437052_801021070484467_6579343261364892799_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=SwZ-xo-09TYAX9ILVFt&tn=18I7kIywl0Z1hEFj&_nc_ht=scontent.fvca1-2.fna&oh=00_AT_2pFXpyjcWXdWwUOpFLFexqYAlvGtwYZDdbw_kFGDQaQ&oe=62A718AE"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
