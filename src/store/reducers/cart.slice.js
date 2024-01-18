import {createSlice} from "@reduxjs/toolkit";
import {getCartAction} from "../actions/cart.action";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    increaseQuantiy: (state, action) => {
      const {id} = action.payload;
      const selectedItem = state.data.find((item) => item.id === id);
      if (selectedItem) selectedItem.quantity++;
    },
    decreaseQuantiy: (state, action) => {
      const {id} = action.payload;
      const selectedItem = state.data.find((item) => item.id === id);
      if (selectedItem && selectedItem.quantity > 0) selectedItem.quantity--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartAction.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getCartAction.fulfilled, (state, action) => {
        state.status = "Success";
        state.data = action.payload;
      })
      .addCase(getCartAction.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const {increaseQuantiy, decreaseQuantiy} = cartSlice.actions;
export default cartSlice.reducer;
