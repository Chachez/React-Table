// Importing necessary dependencies and components
import { useEffect, useState } from "react";
import { TableRow, TableCell, Paper, Grid } from "@mui/material";
import { styled } from "@mui/system";

import "./App.css";
import TableComponent from "./components/useTable";
import api from "./utils/axios";
import { formatNumber } from "./utils/numberFormatter";
import Controls from "./components/controls/controls";

// Define columns for the table
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

// Style the Paper component using MUI's styled API
const PaperComponent = styled(Paper)(({ theme }) => ({
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

const HoverTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#e0e0e0",
    cursor: "pointer",
  },
}));

const MainTable = () => {
  // State variables for holding data and controlling pagination/search
  const [values, setValues] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);

  // Event handler for search input
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setPage(0);
  };

  // Retrieve data from the API
  const retrieveData = async () => {
    try {
      const res = await api.get("/all");
      setValues(res.data);
    } catch (error) {}
  };

  const getSingleCountry = async (row) => {
    try {
      const res = await api.get(`/name/${row.name.official}`);
    } catch (error) {}
  };

  // Fetch data when the component mounts
  useEffect(() => {
    retrieveData();
  }, []);

  // Filter the data based on the search query
  useEffect(() => {
    if (values) {
      const filteredData = values.filter((data) => {
        const nameMatch = data.name?.common
          ?.toLowerCase()
          .includes(searchQuery);
        const capitalMatch = data.capital?.some((city) =>
          city.toLowerCase().includes(searchQuery)
        );
        const continentMatch = data.continents?.some((cont) =>
          cont.toLowerCase().includes(searchQuery)
        );
        const languageMatch = Object.values(data.languages || {}).some((lang) =>
          lang.toLowerCase().includes(searchQuery)
        );
        const currencyMatch = Object.values(data.currencies || {}).some((cur) =>
          cur.name.toLowerCase().includes(searchQuery)
        );
        const populationMatch = formatNumber(data.population)
          .toLowerCase()
          .includes(searchQuery);

        return (
          nameMatch ||
          capitalMatch ||
          continentMatch ||
          languageMatch ||
          currencyMatch ||
          populationMatch
        );
      });

      setFilteredValues(filteredData);
    }
  }, [values, searchQuery]);

  // Event handler for changing the table page
  const onChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Event handler for changing the number of rows per page
  const onRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  // Render table rows based on the search query and pagination
  const renderTableRows = () => {
    const data = searchQuery ? filteredValues : values;
    if (data) {
      return data
        .sort((a, b) =>
          (a.name?.common || "").localeCompare(b.name?.common || "")
        )
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, idx) => (
          <HoverTableRow key={idx} onClick={() => getSingleCountry(row)}>
            <TableCell>{page * rowsPerPage + idx + 1}</TableCell>
            <TableCell>{row.name?.common || ""}</TableCell>
            <TableCell>
              {row.capital && Object.keys(row.capital).length > 0
                ? Object.values(row.capital)[0]
                : ""}
            </TableCell>
            <TableCell>{row.continents?.map((cont) => cont) || ""}</TableCell>
            <TableCell>
              {row.languages && Object.keys(row.languages).length > 0
                ? Object.values(row.languages)[0]
                : ""}
            </TableCell>
            <TableCell>
              {row.currencies && Object.keys(row.currencies).length > 0
                ? Object.values(row.currencies)[0]?.name
                : ""}
            </TableCell>
            <TableCell align="right">{formatNumber(row.population)}</TableCell>
            <TableCell>{row.flag}</TableCell>
          </HoverTableRow>
        ));
    } else {
      return null;
    }
  };

  return (
    <PaperComponent>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} lg={4} />
        <Grid item sm={12} md={6} lg={4}>
          {/* Title */}
          <Controls.MuiTypography
            title="Countries of The World"
            align="center"
            variant="h5"
            sx={{ fontWeight: "bold" }}
          />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          {/* Search input */}
          <Controls.MuiTextField
            label="Search"
            fullWidth
            variant="standard"
            onChange={handleSearch}
          />
        </Grid>
      </Grid>

      {/* Table Component */}
      <TableComponent
        columns={columns}
        count={filteredValues?.length || 0}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={onChangePage}
        onRowsPerPageChange={onRowsPerPageChange}
      >
        {/* Render table rows */}
        {renderTableRows()}
      </TableComponent>
    </PaperComponent>
  );
};

export default MainTable;
