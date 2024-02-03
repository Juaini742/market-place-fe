import {combineReducers} from "@reduxjs/toolkit";
import productSlice from "./product.slice";
import bankSlice from "./bank.slice";
import userSlice from "./user.slice";
import cartSlice from "./cart.slice";
import addressSlice from "./address.slice";
import shippingSlice from "./shipping.slice";
import commentSlice from "./comment.slice";

const rootReducer = combineReducers({
  products: productSlice,
  banks: bankSlice,
  user: userSlice,
  cart: cartSlice,
  address: addressSlice,
  shipping: shippingSlice,
  comment: commentSlice,
});

export default rootReducer;
