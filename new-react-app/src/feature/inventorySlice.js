import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    inventory: {},
  },
  reducers: {
    setInventory: (state, action) => {
      state.inventory = action.payload;
    },
    resetInventory: (state) => {
      state.inventory = {};
    },
  },
});

export const { setInventory, resetInventory } = inventorySlice.actions;

export default inventorySlice.reducer;
