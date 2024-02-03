import {createSlice} from "@reduxjs/toolkit";
import {
  getProductAction,
  getProductByIdAction,
  getProductByUserIdAction,
} from "../actions/product.action";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    dataOne: {},
    dataByUserId: [],
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
      .addCase(getProductByIdAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProductByUserIdAction.pending, (state) => {
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
      .addCase(getProductByUserIdAction.fulfilled, (state, action) => {
        state.status = "success";
        state.dataByUserId = action.payload;
      })
      .addCase(getProductAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(getProductByIdAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(getProductByUserIdAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
