import { createSlice } from "@reduxjs/toolkit";
const currency_handle = createSlice({
  name: "currency",
  initialState: {
    currencyCode: "INR",
    index: 0,
    title: "Indian rupee",
    iso: "IN",
    currencylogo: "ph:currency-inr-bold",
  },
  reducers: {
    SET_CURRENCY: (state, action) => {
      state.currencyCode = action.payload.value;
      state.index = action.payload.index;
      state.title = action.payload.title;
      state.iso = action.payload.iso;
      state.currencylogo = action.payload.icon;
    },
  },
});

export const { SET_CURRENCY } = currency_handle.actions;
export default currency_handle.reducer;