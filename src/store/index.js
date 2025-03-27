import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlice';
import watchlistReducer from './slices/watchlistSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    watchlist: watchlistReducer,
  },
});

export default store;
