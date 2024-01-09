import { createSlice } from "@reduxjs/toolkit";
const errorHandel = createSlice({
  name: "ErrorMessage",
  initialState: {
    errorMessage: null,
  },
  reducers: {
    SET_ERROR: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { SET_ERROR } = errorHandel.actions;
export default errorHandel.reducer;
