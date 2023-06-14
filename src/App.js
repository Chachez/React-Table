import { useEffect, useState } from "react";
import { TableRow, TableCell } from "@mui/material";

import "./App.css";
import TableComponent from "./components/useTable";
import api from "./utils/axios";
import { formatNumber } from "./utils/numberFormatter";

const columns = [
  { id: "serial", label: "Serial", minWidth: 100 },
  { id: "name", label: "Country", minWidth: 100 },
  { id: "capital", label: "Capital City", minWidth: 100 },
  { id: "continent", label: "Continent", minWidth: 100 },
  { id: "language", label: "Language", minWidth: 100 },
  { id: "currency", label: "Currency", minWidth: 10 },
  { id: "population", label: "Population", minWidth: 10, align: "right" },
  { id: "flag", label: "Flag", minWidth: 100 },
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

  console.log(values?.[6]);

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
          ?.sort((a, b) =>
            (a.name.common || "").localeCompare(b.name.common || "")
          )
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((data, idx) => (
            <TableRow key={idx}>
              <TableCell>{page * rowsPerPage + idx + 1}</TableCell>{" "}
              <TableCell>{data.name.common || ""}</TableCell>
              <TableCell>{data.capital?.map((city) => city) || ""}</TableCell>
              <TableCell>
                {data.continents?.map((cont) => cont) || ""}
              </TableCell>
              <TableCell>
                {data.languages && Object.keys(data.languages).length > 0
                  ? Object.values(data.languages)[0]
                  : ""}
              </TableCell>
              <TableCell>
                {data.currencies && Object.keys(data.currencies).length > 0
                  ? Object.values(data.currencies)[0]?.name
                  : ""}
              </TableCell>
              <TableCell align="right">
                {formatNumber(data.population)}
              </TableCell>
              <TableCell>{data.flag}</TableCell>
            </TableRow>
          ))}
      </TableComponent>
    </div>
  );
};

export default App;
