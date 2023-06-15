import React from "react";
import { styled } from "@mui/system";
import {
  Paper,
  Grid,
  CardMedia,
  CardContent,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Controls from "./components/controls/controls";
import { formatNumber } from "./utils/numberFormatter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PaperComponent = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(30),
  width: "80%",
  marginBottom: theme.spacing(3),
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  padding: theme.spacing(3),
  [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },
  borderRadius: "50px",
  boxShadow: "0 10px 30px 0 rgba(172, 168, 168, 0.43)",
}));

const CountryDetails = () => {
  const country = useSelector((state) => state.countries.country);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const currencyName =
    country.currencies && Object.keys(country.currencies).length > 0
      ? `${Object.values(country.currencies)[0].name} (${
          Object.values(country.currencies)[0].symbol
        })`
      : "Not Declared";

  return (
    <PaperComponent>
      <Tooltip title="Back Home" sx={{ marginBottom: "2rem" }}>
        <IconButton onClick={handleGoBack}>
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <CardMedia
            component="img"
            height="300"
            image={country.flags.svg}
            alt={country.name.common}
          />
          <CardContent>
            <Controls.MuiTypography
              title={country.name.official}
              sx={{ fontWeight: "bold" }}
              variant="h5"
            />
          </CardContent>
        </Grid>
        {country.coatOfArms.svg && (
          <Grid item xs={12} md={6} lg={4}>
            <CardMedia
              component="img"
              height="300"
              image={country.coatOfArms.svg}
              alt="Coat of Arms"
            />
            <CardContent>
              <Controls.MuiTypography
                title={`${country.name?.common} Coat of Arms`}
                sx={{ fontWeight: "bold" }}
                variant="h5"
              />
            </CardContent>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={12}
          lg={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <Controls.MuiTypography
                title="General Information"
                sx={{ fontWeight: "bold" }}
                variant="h5"
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <Controls.MuiTypography
                title="Capital"
                sx={{ fontWeight: "bold", display: "inline" }}
                variant="body1 "
              />
            </Grid>

            <Grid item xs={12} md={12} lg={8}>
              <Controls.MuiTypography
                title={country.capital?.map((city) => city) || "Not Declared"}
                sx={{ display: "inline" }}
                variant="body1 "
              />
            </Grid>

            <Grid item xs={12} md={12} lg={4}>
              <Controls.MuiTypography
                title="Region"
                sx={{ fontWeight: "bold", display: "inline" }}
                variant="body1 "
              />
            </Grid>

            <Grid item xs={12} md={12} lg={8}>
              <Controls.MuiTypography
                title={country.continents.map((cont) => cont)}
                sx={{ display: "inline" }}
                variant="body1 "
              />
            </Grid>

            <Grid item xs={12} md={12} lg={4}>
              <Controls.MuiTypography
                title="Population"
                sx={{ fontWeight: "bold", display: "inline" }}
                variant="body1 "
              />
            </Grid>

            <Grid item xs={12} md={12} lg={8}>
              <Controls.MuiTypography
                title={formatNumber(country.population)}
                sx={{ display: "inline" }}
                variant="body1 "
              />
            </Grid>

            <Grid item xs={12} md={12} lg={4}>
              <Controls.MuiTypography
                title="Currency"
                sx={{ fontWeight: "bold", display: "inline" }}
                variant="body1 "
              />
            </Grid>

            <Grid item xs={12} md={12} lg={8}>
              <Controls.MuiTypography
                title={currencyName}
                sx={{ display: "inline" }}
                variant="body1 "
              />
            </Grid>

            <Grid item xs={12} md={12} lg={4}>
              <Controls.MuiTypography
                title="Latlng"
                sx={{ fontWeight: "bold", display: "inline" }}
                variant="body1 "
              />
            </Grid>

            <Grid item xs={12} md={12} lg={8}>
              <Controls.MuiTypography
                title={`${country.latlng[0]}, ${country.latlng[1]}`}
                sx={{ display: "inline" }}
                variant="body1 "
              />
            </Grid>

            <Grid item xs={12} md={12} lg={4}>
              <Controls.MuiTypography
                title="Area"
                sx={{ fontWeight: "bold", display: "inline" }}
                variant="body1 "
              />
            </Grid>

            <Grid item xs={12} md={12} lg={8}>
              <Controls.MuiTypography
                title={formatNumber(country.area)}
                sx={{ display: "inline" }}
                variant="body1 "
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PaperComponent>
  );
};

export default CountryDetails;
