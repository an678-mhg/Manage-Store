import React from "react";
import { Table, Button } from "react-bootstrap";

const ProductTable = ({ data }) => {
  const labels = [
    "STT",
    "Tên sản phẩm",
    "Ảnh",
    "Danh mục",
    "Giá bán",
    "Số lượng",
    "Ngày tạo",
    "Hành động",
  ];

  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          {labels.map((label) => (
            <th key={label}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((p, index) => (
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
            <td>{p.category || ""}</td>
            <td>{p.price}</td>
            <td>{p.status == 1 ? "Còn hàng" : "Hết hàng"}</td>
            <td>{p.createdAt || "Méo biết!"}</td>
            <td>
              <button className="bg-blue-500 rounded-md px-3 py-2 text-white font-medium btn">
                Sửa
              </button>

              <button className="bg-red-500 rounded-md px-3 py-2 text-white font-medium btn">
                Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;
