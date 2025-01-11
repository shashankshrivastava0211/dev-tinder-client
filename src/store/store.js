import { configureStore } from "@reduxjs/toolkit";
import addUserSlice from "./addUserSlice";
import { loadState, saveState } from "../utils/loadStorage"; // Utility functions for local storage
import feedUser from "./feedSlice";

// Load persisted state from localStorage
const persistedState = loadState();

const store = configureStore({
  reducer: {
    addUserSlice: addUserSlice,
    feedUser: feedUser,
  },
  preloadedState: persistedState, // Use the persisted state
});

// Save state to localStorage whenever the store changes
store.subscribe(() => {
  saveState({
    addUserSlice: store.getState().addUserSlice, // Persist only the required slice of state
  });
});

export default store;
