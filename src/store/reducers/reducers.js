import {combineReducers} from "@reduxjs/toolkit";
import productSlice from "./product.slice";
import bankSlice from "./bank.slice";
import userSlice from "./user.slice";

const rootReducer = combineReducers({
  products: productSlice,
  banks: bankSlice,
  user: userSlice,
});

export default rootReducer;
