import { configureStore } from '@reduxjs/toolkit';
import watchlistReducer from './watchlistSlice';

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});
