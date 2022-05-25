import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux/slice/categories";
import EditCategory from "../Modal/EditCategory";

const CategoryItem = ({ p, index }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Bạn chắc chắn muốn xóa!")) {
      dispatch(deleteCategory(id));
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{p.name}</td>
      <td>
        <img
          className="w-[80px] h-[80px] mx-autok"
          src={p.image}
          alt={p.name}
        />
      </td>
      <td>{p.isSell == "1" ? "Có" : "Không"}</td>
      <td>{p.descr}</td>
      <td>
        <button
          onClick={handleOpen}
          className="bg-blue-500 rounded-md px-3 py-2 text-white font-medium btn"
        >
          Sửa
        </button>

        <button
          onClick={() => handleDelete(p.id)}
          className="bg-red-500 rounded-md px-3 py-2 text-white font-medium btn"
        >
          Xóa
        </button>
      </td>

      {show && <EditCategory show={show} handleClose={handleClose} data={p} />}
    </tr>
  );
};

export default CategoryItem;
