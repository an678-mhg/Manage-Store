import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "./ProductItem";

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
          <ProductItem index={index} p={p} key={p.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;
