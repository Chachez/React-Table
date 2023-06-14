import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LinearProgress } from "@mui/material";

import MainTable from "./MainTable";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainTable />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
