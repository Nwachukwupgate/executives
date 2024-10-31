import { PaginationProps, Pagination as Pcomp, styled } from "@mui/material";
import React from "react";

type props = {
  totalPages: number;
  currentPage: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

const Pagination = styled(Pcomp)<PaginationProps>(({}) => ({
  background: "#F4F0EB",
  boxShadow: "0px 0px 4px rgba(0,0,0,0.2)",
  borderRadius: "10px",

  "& .MuiPaginationItem-root": {
    margin: 0,
  },

  "& .MuiPaginationItem-previousNext": {
    background: "white !important",
  },
  "& .MuiPaginationItem-previousNext.Mui-disabled": {
    opacity: 0.8,
  },
}));

const TablePagination: React.FC<props> = ({
  totalPages,
  currentPage,
  onChange,
}) => {
  return (
    <div>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onChange}
        shape="rounded"
        color="primary"
      />
    </div>
  );
};

export default TablePagination;
