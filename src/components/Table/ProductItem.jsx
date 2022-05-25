import React, { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import formatMoney from "../../utils/formatMoney";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/slice/product";
import EditProduct from "../Modal/EditProduct";

const ProductItem = ({ p, index }) => {
  const handleDeleteProduct = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa!")) {
      dispatch(deleteProduct(id));
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const dispatch = useDispatch();

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
      <td className="w-[10%]">
        <div>
          {p?.categories?.map((p) => {
            return (
              <p
                className="bg-blue-500 text-white p-1 rounded-sm cursor-default mb-2 line-clamp-1"
                key={p.id}
              >
                {p.name}
              </p>
            );
          })}
        </div>
      </td>
      <td>{formatMoney(p.price)}</td>
      <td>{p.status}</td>
      <td>{p.createdAt ? formatDate(p.createdAt) : "Chưa biết nha!"}</td>
      <td>
        <button
          onClick={handleOpen}
          className="bg-blue-500 rounded-md px-3 py-2 text-white font-medium btn"
        >
          Sửa
        </button>

        <button
          onClick={() => handleDeleteProduct(p.id)}
          className="bg-red-500 rounded-md px-3 py-2 text-white font-medium btn"
        >
          Xóa
        </button>
      </td>

      {show && <EditProduct show={show} handleClose={handleClose} data={p} />}
    </tr>
  );
};

export default ProductItem;
