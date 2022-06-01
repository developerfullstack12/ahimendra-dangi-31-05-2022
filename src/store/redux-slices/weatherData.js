import { createSlice } from "@reduxjs/toolkit";

const {
  actions: {
    getCurrentWeatherStart,
    getCurrentWeatherSuccess,
    getCurrentWeatherFailure,
    selectLocationStart,
    selectLocationComplete,
  },
  reducer,
} = createSlice({
  name: "weatherData",
  initialState: {
    isloading: false,
    currentWeather: null,
    selectedLocation: { name: "Paris", key: "623" },
  },
  reducers: {
    getCurrentWeatherStart: (state) => ({
      ...state,
      isloading: true,
    }),
    getCurrentWeatherSuccess: (state, { payload }) => ({
      ...state,
      isloading: false,
      currentWeather: payload.data[0],
    }),
    getCurrentWeatherFailure: (state) => ({
      ...state,
      isloading: false,
    }),
    selectLocationStart: (state) => ({
      ...state,
      isloading: true,
    }),
    selectLocationComplete: (state, { payload }) => {
      return {
        ...state,
        selectedLocation: payload,
        isloading: true,
      };
    },
  },
});

export default reducer;

export {
  getCurrentWeatherStart,
  getCurrentWeatherSuccess,
  getCurrentWeatherFailure,
  selectLocationStart,
  selectLocationComplete,
};
