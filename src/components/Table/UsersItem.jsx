import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/slice/users";
import { formatDate } from "../../utils/formatDate";
import EditStaff from "../Modal/EditStaff";

const UserItem = ({ p, index }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Bạn chắc chắn muốn xóa!")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{p.username}</td>
      <td>
        <img
          className="w-[80px] h-[80px] mx-autok"
          src={p.avatar ? p.avatar : "https://source.unsplash.com/random"}
          alt={p.name}
        />
      </td>
      <td className="uppercase">{p.roleId}</td>
      <td>{p.email}</td>
      <td>{p.createdAt ? formatDate(p.createdAt) : "Không biết nữa!"}</td>
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

      <EditStaff show={show} handleClose={handleClose} data={p} />
    </tr>
  );
};

export default UserItem;
