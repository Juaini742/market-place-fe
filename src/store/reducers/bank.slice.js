import {createSlice} from "@reduxjs/toolkit";
import {getBankAction} from "../actions/bank.action";

const bankSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBankAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getBankAction.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getBankAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default bankSlice.reducer;
