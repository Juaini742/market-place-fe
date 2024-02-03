import {createSlice} from "@reduxjs/toolkit";
import {
  getCommentByUserIdAction,
  getCommentByIdAction,
  getCommentByProductIdAction,
} from "../actions/comment.action";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    userId: [],
    single: {},
    productId: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentByUserIdAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCommentByUserIdAction.fulfilled, (state, action) => {
        state.status = "success";
        state.userId = action.payload;
      })
      .addCase(getCommentByUserIdAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(getCommentByIdAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCommentByIdAction.fulfilled, (state, action) => {
        state.status = "success";
        state.single = action.payload;
      })
      .addCase(getCommentByIdAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(getCommentByProductIdAction.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCommentByProductIdAction.fulfilled, (state, action) => {
        state.status = "success";
        state.productId = action.payload;
      })
      .addCase(getCommentByProductIdAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default commentSlice.reducer;
