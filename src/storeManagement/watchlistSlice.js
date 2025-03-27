import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchlist: [],
  status: 'idle',
  error: null,
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const item = action.payload;
      const exists = state.watchlist.some((watchlistItem) => watchlistItem.id === item.id);
      if (!exists) {
        state.watchlist.push(item);
      }
    },
    removeFromWatchlist: (state, action) => {
      const itemId = action.payload;
      state.watchlist = state.watchlist.filter((item) => item.id !== itemId);
    },
    clearWatchlist: (state) => {
      state.watchlist = [];
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, clearWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;