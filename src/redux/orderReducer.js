import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    lastOrder: (state, action) => {
      return (state = action.payload);
    },
    clearOrder: (state, action) => {
      return (state = null);
    },
  },
});

export const { lastOrder, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
