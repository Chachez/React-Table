import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = ({ variant, gutterBottom, display, title, ...other }) => {
  return (
    <Typography
      variant={variant}
      display={display}
      gutterBottom={gutterBottom}
      {...other}
    >
      {title}
    </Typography>
  );
};

export default MuiTypography;
