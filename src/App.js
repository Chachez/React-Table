import { useEffect, useState } from "react";
import { TableRow, TableCell } from "@mui/material";

import "./App.css";
import TableComponent from "./components/useTable";
import api from "./utils/axios";

const columns = [
  { id: "date", label: "Date", minWidth: 100 },
  { id: "account", label: "Account", minWidth: 100 },
  { id: "debit", label: "Debit", minWidth: 100 },
  { id: "credit", label: "Credit", minWidth: 100 },
  { id: "credit", label: "Description", minWidth: 100 },
  { id: "Amount", label: "Amount", minWidth: 100 },
];

const App = () => {
  const [values, setValues] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const retrieveData = async () => {
    try {
      const res = await api.get("/all");
      setValues(res.data);
    } catch (error) {}
  };

  const onChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const onRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  // console.log(values?.map((data) => data.area));

  return (
    <div className="App">
      <TableComponent
        columns={columns}
        count={values?.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={onChangePage}
        onRowsPerPageChange={onRowsPerPageChange}
      >
        {values
          ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((user, idx) => (
            <TableRow key={idx}>
              <TableCell>{user.area}</TableCell>
            </TableRow>
          ))}
      </TableComponent>
    </div>
  );
};

export default App;
