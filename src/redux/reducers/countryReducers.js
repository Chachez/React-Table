import { countries } from "../constants/countryActionTypes";

const initialState = {
  countries: null,
  country: null,
  loading: false,
};

const countryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case countries.GET_COUNTRIES:
      return {
        ...state,
        countries: payload.data,
      };

    case countries.GET_COUNTRY:
      return {
        ...state,
        country: payload?.[0],
      };

    case countries.LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
