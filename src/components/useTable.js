import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  TableBody,
} from "@mui/material";
import { styled } from "@mui/system";

const RootComponent = styled("div")(({ theme }) => ({
  // Customize the styling of the root component
  maxWidth: "100%",
  margin: "0 auto",
  padding: theme.spacing(2),
}));

const TableWrapper = styled(Table)(({ theme }) => ({
  // Customize the styling of the table wrapper
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  borderRadius: "5px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
}));

const TableComponent = ({
  onPageChange,
  onRowsPerPageChange,
  page,
  rowsPerPage,
  data,
  children,
  rowsPerPageOptions,
  columns,
  count,
  cellAlign,
  ...other
}) => {
  return (
    <RootComponent>
      <TableWrapper {...other}>
        <TableHead>
          <TableRow>
            {columns?.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  top: 57,
                  minWidth: column.minWidth,
                  fontWeight: "bold", // Add a custom style for the table headers
                  align: cellAlign,
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </TableWrapper>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20] || rowsPerPageOptions} // Customize the rows per page options
        component="div"
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </RootComponent>
  );
};

export default TableComponent;
