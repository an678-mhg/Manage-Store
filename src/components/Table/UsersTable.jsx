import React from "react";
import { Table } from "react-bootstrap";
import UserItem from "./UsersItem";

const UsersTable = ({ data }) => {
  const labels = [
    "STT",
    "Tên nhân viên",
    "Ảnh",
    "Chức vụ",
    "Email",
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
          <UserItem index={index} p={p} key={p.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
