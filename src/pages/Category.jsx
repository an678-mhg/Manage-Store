import LayoutPrimary from "../layout/LayoutPrimary";
import Title from "../components/Shared/Title";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../redux/slice/categories";
import CategoryTable from "../components/Table/CategoryTable";
import AddCategory from "../components/Modal/AddCategory";
import PaginationCustom from "../components/Pagination";

const Category = () => {
  const dispatch = useDispatch();
  const limit = 5;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const [page, setPage] = useState(1);

  const { totalCategories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories({ page: page, limit: limit }));
  }, [page, dispatch]);

  const { categories } = useSelector((state) => state.categories);

  return (
    <LayoutPrimary title="Quản lí danh mục">
      <Title title="Quản Lí Danh Mục" />
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
            Lọc danh mục
          </button>

          <button
            onClick={handleOpen}
            className="bg-blue-500 rounded-md px-3 py-2 text-white font-medium btn"
          >
            Thêm danh mục
          </button>
        </div>
      </div>

      <CategoryTable data={categories} />

      <PaginationCustom
        page={page}
        setPage={setPage}
        totalProducts={totalCategories}
        limit={limit}
      />

      {show && <AddCategory show={show} handleClose={handleClose} />}
    </LayoutPrimary>
  );
};

export default Category;
