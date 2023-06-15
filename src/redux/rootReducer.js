import { combineReducers } from "redux";

import countryReducer from "./reducers/countryReducers";

const rootReducer = combineReducers({
  countries: countryReducer,
});

export default rootReducer;
