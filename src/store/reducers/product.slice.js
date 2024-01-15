import {createSlice} from "@reduxjs/toolkit";
import {getProductAction} from "../actions/product.action";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProductAction.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getProductAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
