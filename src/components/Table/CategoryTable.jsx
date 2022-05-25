import React from "react";
import { Table } from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const CategoryTable = ({ data }) => {
  const labels = ["STT", "Tên danh mục", "Ảnh", "Mở bán", "Mô tả", "Hành động"];

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
          <CategoryItem index={index} p={p} key={p.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default CategoryTable;
