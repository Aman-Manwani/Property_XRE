import { configureStore } from "@reduxjs/toolkit";
import { propertySlice } from "../pages/addProperty/redux/slice";

export const store = configureStore({
  reducer: {
    property: propertySlice.reducer,
  },
});
