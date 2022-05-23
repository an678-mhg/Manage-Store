import React from "react";
import LayoutPrimary from "../layout/LayoutPrimary";

const Product = () => {
  return (
    <LayoutPrimary title="Quản lí sản phẩm">
      <div className="flex items-center justify-between">
        <form className="w-[300px] relative">
          <input
            placeholder="Tìm kiếm sản phẩm..."
            className="border border-gray-600 px-3 py-2 w-full rounded-md"
          />
          <button className="bg-blue-500 px-3 text-white font-medium absolute right-0 h-full rounded-r-md">
            Tìm
          </button>
        </form>

        <div>
          <button className="bg-blue-500 rounded-md px-3 py-2 text-white font-medium btn">
            Lọc sản phẩm
          </button>

          <button className="bg-blue-500 rounded-md px-3 py-2 text-white font-medium btn">
            Thêm sản phẩm
          </button>
        </div>
      </div>
    </LayoutPrimary>
  );
};

export default Product;
