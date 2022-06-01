import { createSlice } from "@reduxjs/toolkit";

const {
  actions: { addFavoritesStart, addFavoritesSuccess, addFavoritesFailure },
  reducer,
} = createSlice({
  name: "weatherMenu",
  initialState: {
    isloading: false,
    favorites: [],
  },
  reducers: {
    addFavoritesStart: (state) => ({
      ...state,
      isloading: true,
    }),
    addFavoritesSuccess: (state, { payload }) => ({
      ...state,
      isloading: false,
      favorites: payload,
    }),
    addFavoritesFailure: (state) => ({
      ...state,
      isloading: false,
    }),
  },
});

export default reducer;

export { addFavoritesStart, addFavoritesSuccess, addFavoritesFailure };
