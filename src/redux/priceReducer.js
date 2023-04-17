import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    totalPriceCart: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { totalPriceCart } = priceSlice.actions;

export default priceSlice.reducer;
