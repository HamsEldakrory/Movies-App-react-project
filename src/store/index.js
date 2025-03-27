import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import watchlistReducer from "./watchlistSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    watchlist: watchlistReducer,
  },
});

export default store;
