import { createSlice } from "@reduxjs/toolkit";

const feedUser = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: (state, action) => {
      return null;
    },
  },
});
export const { addFeed, removeFeed } = feedUser.actions;
export default feedUser.reducer;
