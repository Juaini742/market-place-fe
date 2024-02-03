import {createSlice} from "@reduxjs/toolkit";
import {getShipping} from "../actions/shipping.action";

const shippingSlice = createSlice({
  name: "shipping",
  initialState: {
    checkout: [],
    shipping: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShipping.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getShipping.fulfilled, (state, action) => {
        state.status = "success";
        state.checkout = action.payload.checkout;
        state.shipping = action.payload.shipping;
      })
      .addCase(getShipping.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default shippingSlice.reducer;
