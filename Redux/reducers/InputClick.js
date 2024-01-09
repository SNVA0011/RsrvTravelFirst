import { createSlice } from "@reduxjs/toolkit";
const input_Click = createSlice({
  name: "InputField",
  initialState: {
    inputField: "",
  },
  reducers: {
    SET_INPUT: (state, action) => {
      state.inputField = action.payload;
    },
  },
});

export const { SET_INPUT } = input_Click.actions;
export default input_Click.reducer;
