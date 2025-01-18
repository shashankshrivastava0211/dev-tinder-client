import { configureStore } from "@reduxjs/toolkit";
import addUserSlice from "./addUserSlice";
import { loadState, saveState } from "../utils/loadStorage"; // Utility functions for local storage
import feedUser from "./feedSlice";
import connectionSlice from "./connectionSlice";

// Load persisted state from localStorage
const persistedState = loadState();

const store = configureStore({
  reducer: {
    addUserSlice: addUserSlice,
    feedUser: feedUser,
    connectionSlice: connectionSlice,
  },
  preloadedState: persistedState, // Use the persisted state
});

store.subscribe(() => {
  saveState({
    addUserSlice: store.getState().addUserSlice, // Persist only the required slice of state
  });
});

export default store;
