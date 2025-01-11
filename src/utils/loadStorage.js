// src/localStorage.js

// Function to load state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined; // Return undefined if no state is found, so the default state is used
    }
    return JSON.parse(serializedState); // Parse the saved state
  } catch (err) {
    console.error("Could not load state", err);
    return undefined; // If there's an error, return undefined to use the default state
  }
};

// Function to save state to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState); // Save state in localStorage
  } catch (err) {
    console.error("Could not save state", err);
  }
};
