import { combineReducers } from "@reduxjs/toolkit";

import weatherReducer from "./weatherData";
import searchLocationReducer from "./searchLocation";
import favoriteReducer from "./favorite";

const rootReducer = combineReducers({
  weather: weatherReducer,
  searchLocation: searchLocationReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
