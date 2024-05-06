import {createSlice} from "@reduxjs/toolkit";
import {getUserByTokenAction, loginAction} from "../actions/user.action";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserByTokenAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.data = null;
        state.error = action.payload;
      })
      .addCase(getUserByTokenAction.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
        state.data = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getUserByTokenAction.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload.dataUser;
        state.error = null;
      });
  },
});

export default userSlice.reducer;
