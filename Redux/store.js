import { configureStore } from "@reduxjs/toolkit";
import input_Click from "./reducers/InputClick";
import errorHandel from "./reducers/errorhandle";
import currency_handle from "./reducers/currency";

export default configureStore({
  reducer: {
    InputField: input_Click,
    ErrorMessage: errorHandel,
    Currency: currency_handle,
  },
});
