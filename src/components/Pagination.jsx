import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationCustom = ({ page, totalProducts, limit, setPage }) => {
  return (
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
  );
};

export default PaginationCustom;
