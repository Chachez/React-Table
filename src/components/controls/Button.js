import React from "react";
import { Button } from "@mui/material";

const MuiButton = ({ label, ...other }) => {
  return <Button {...other}>{label}</Button>;
};

export default MuiButton;
