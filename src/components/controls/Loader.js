import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = ({ open, ...other }) => {
  return (
    <div>
      {open && (
        <Backdrop
          data-testid="loader-backdrop"
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          {...other}
        >
          <CircularProgress
            data-testid="loader-circular-progress"
            color="inherit"
            role="progressbar"
          />
        </Backdrop>
      )}
    </div>
  );
};

export default Loader;
