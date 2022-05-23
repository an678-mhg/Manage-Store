import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductTable from "../components/Table/ProductTable";
import LayoutPrimary from "../layout/LayoutPrimary";
import { getAllProducts } from "../redux/slice/product";

const Product = () => {
  const limit = 5;
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { products, totalProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts({ page: page, limit: limit }));
  }, [page]);

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

      <ProductTable data={products} />

      <Pagination>
        <Pagination.Prev
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        />
        {Array.from(Array(Math.ceil(totalProducts / limit)).keys()).map((p) => (
          <Pagination.Item
            active={p + 1 === page}
            onClick={() => setPage(p + 1)}
            key={p}
          >
            {p + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setPage(page + 1)}
          disabled={page === Math.ceil(totalProducts / limit)}
        />
      </Pagination>
    </LayoutPrimary>
  );
};

export default Product;
