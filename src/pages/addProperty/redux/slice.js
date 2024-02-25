import { createSlice } from "@reduxjs/toolkit";
import { postPropertyDeatils } from "./thunk";

export const propertySlice = createSlice({
  name: "property",
  initialState: {
    isLoading: false,
    properties: [],
    property: {},
    floor: {},
    unit: {},
    user: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postPropertyDeatils.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(postPropertyDeatils.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.posts = state.posts.concat(action.payload);
      })
      .addCase(postPropertyDeatils.rejected, (state, action) => {
        state.status = false;
        // state.error = action.error.message;
      });
  },
});

export const propertySliceActions = propertySlice.actions;
