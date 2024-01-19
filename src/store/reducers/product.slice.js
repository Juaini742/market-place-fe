import {createSlice} from "@reduxjs/toolkit";
import {
  getProductAction,
  getProductByIdAction,
} from "../actions/product.action";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    dataOne: {},
    total: 0,
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
        state.data = action.payload.Products;
        state.total = action.payload.totalProduct;
      })
      .addCase(getProductByIdAction.fulfilled, (state, action) => {
        state.status = "success";
        state.dataOne = action.payload;
      })
      .addCase(getProductAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
