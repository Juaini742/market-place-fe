import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProductAction = createAsyncThunk(
  "getProduct/product",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/public/products"
      );

      const data = response.data;

      return data;
    } catch (error) {
      new Error(error.message);
    }
  }
);
