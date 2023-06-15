import React from "react";
import { TextField } from "@mui/material";

const MuiTextField = ({ variant, label, ...other }) => {
  return (
    <TextField
      inputProps={{ "aria-label": label }}
      label={label}
      variant={variant}
      {...other}
    />
  );
};

export default MuiTextField;
