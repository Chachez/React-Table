import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  //   TableSortLabel,
  TableBody,
} from "@mui/material";
import { styled } from "@mui/system";

const RootComponent = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "100%",
  margin: "0 auto",
  padding: theme.spacing(3, 3, 6, 3),
  overflow: "auto",
}));

const TableWrapper = styled(Table)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(3),
  [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },
  borderRadius: "10px",
  boxShadow: "0 10px 30px 0 rgba(172, 168, 168, 0.43)",
}));

const columns = [
  { id: "date", label: "Date", minWidth: 100 },
  { id: "account", label: "Account", minWidth: 100 },
  { id: "debit", label: "Debit", minWidth: 100 },
  { id: "credit", label: "Credit", minWidth: 100 },
  { id: "credit", label: "Description", minWidth: 100 },
  { id: "Amount", label: "Amount", minWidth: 100 },
];

const users = [{ id: 1, name: "James Mwangi" }];

const TableComponent = ({
  onPageChange,
  onRowsPerPageChange,
  page,
  rowsPerPage,
}) => {
  return (
    <RootComponent>
      <TableWrapper>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  top: 57,
                  minWidth: column.minWidth,
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((data, idx) => (
            <TableRow>
              <TableCell key={idx}>{data.name}</TableCell>
              <TableCell key={idx}>{data.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableWrapper>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </RootComponent>
  );
};

export default TableComponent;
