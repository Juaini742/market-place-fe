import {createSlice} from "@reduxjs/toolkit";
import {loginAction} from "../actions/user.action";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.rejected, (state, action) => {
        (state.data = null), (state.error = action.payload);
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        (state.data = action.payload), (state.error = null);
      });
  },
});

export default userSlice.reducer;
