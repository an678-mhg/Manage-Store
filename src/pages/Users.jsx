import React, { useEffect, useState } from "react";
import LayoutPrimary from "../layout/LayoutPrimary";
import Title from "../components/Shared/Title";
import UsersTable from "../components/Table/UsersTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/slice/users";
import PaginationCustom from "../components/Pagination";
import AddStaff from "../components/Modal/AddStaff";

const Users = () => {
  const { users, totalUsers } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    dispatch(getAllUsers({ page: page, limit: limit }));
  }, [page, dispatch]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <LayoutPrimary title="Quản lí nhân viên">
      <Title title="Quản Lí Nhân Viên" />
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
            Lọc nhân viên
          </button>

          <button
            onClick={handleOpen}
            className="bg-blue-500 rounded-md px-3 py-2 text-white font-medium btn"
          >
            Thêm nhân viên
          </button>
        </div>
      </div>

      <UsersTable data={users} />

      <PaginationCustom
        page={page}
        setPage={setPage}
        totalProducts={totalUsers}
        limit={limit}
      />

      {show && <AddStaff show={show} handleClose={handleClose} />}
    </LayoutPrimary>
  );
};

export default Users;
