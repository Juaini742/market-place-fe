import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// GET ALL PRODUCTS
export const getProductAction = createAsyncThunk(
  "getProduct/product",
  async ({keyword = "", page, filters = {}} = {}) => {
    const {sortBySold, sortByPrice, sortByLowestPrice, sortOrder} = filters;
    try {
      const response = await axios.get(
        `http://localhost:8080/api/public/products`,
        {
          params: {
            keyword,
            page,
            sortBySold,
            sortByPrice,
            sortByLowestPrice,
            sortOrder,
          },
        }
      );

      const data = response.data || [];

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getProductByIdAction = createAsyncThunk(
  "getProductById/product",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/public/productId/${id}`
      );

      const data = response.data;

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
