import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "../components/Modal/AddProduct";
import Pagination from "../components/Pagination";
import Title from "../components/Shared/Title";
import ProductTable from "../components/Table/ProductTable";
import LayoutPrimary from "../layout/LayoutPrimary";
import { getAllProducts } from "../redux/slice/product";

const Product = () => {
  const limit = 5;
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const { products, totalProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts({ page: page, limit: limit }));
  }, [page, dispatch]);

  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);

  return (
    <LayoutPrimary title="Quản lí sản phẩm">
      <Title title="Quản Lí Sản Phẩm" />
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

          <button
            onClick={handleOpen}
            className="bg-blue-500 rounded-md px-3 py-2 text-white font-medium btn"
          >
            Thêm sản phẩm
          </button>
        </div>
      </div>

      <ProductTable data={products} />

      <Pagination
        page={page}
        totalProducts={totalProducts}
        limit={limit}
        setPage={setPage}
      />

      {showModal && <AddProduct show={showModal} handleClose={handleClose} />}
    </LayoutPrimary>
  );
};

export default Product;
