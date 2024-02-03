import {createSlice} from "@reduxjs/toolkit";
import {getAddress} from "../actions/address.action";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddress.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.status = "successful";
        state.data = action.payload;
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default addressSlice.reducer;
