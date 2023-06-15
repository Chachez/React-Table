import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = ({ variant, gutterBottom, display, title, ...other }) => {
  return (
    <Typography
      data-testid="typography"
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
