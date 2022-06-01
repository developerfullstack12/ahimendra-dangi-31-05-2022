import { createSlice } from "@reduxjs/toolkit";

const {
  actions: {
    searchLocationStart,
    searchLocationSuccess,
    searchLocationFailure,
  },
  reducer,
} = createSlice({
  name: "weatherMenu",
  initialState: {
    isLoading: false,
    locationList: [],
    error: false,
  },
  reducers: {
    searchLocationStart: (state) => ({
      ...state,
      isLoading: true,
    }),
    searchLocationSuccess: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        locationList: payload.data,
      };
    },
    searchLocationFailure: (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }),
  },
});

export default reducer;

export { searchLocationStart, searchLocationSuccess, searchLocationFailure };
