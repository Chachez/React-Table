import { countries } from "../constants/countryActionTypes";
import api from "../../utils/axios";

export const getCountries = () => async (dispatch) => {
  try {
    dispatch({ type: countries.LOADING, payload: true });
    const res = await api.get("/all");
    dispatch({ type: countries.GET_COUNTRIES, payload: res });
    dispatch({ type: countries.LOADING, payload: false });
    return res;
  } catch (error) {
    Promise.reject(error?.response);
  }
};

export const getCountry = (data) => async (dispatch) => {
  try {
    dispatch({ type: countries.LOADING, payload: true });
    const res = await api.get(`/name/${data}`);
    dispatch({ type: countries.GET_COUNTRY, payload: res.data });
    dispatch({ type: countries.LOADING, payload: false });
    return res;
  } catch (error) {
    Promise.reject(error?.response);
  }
};
