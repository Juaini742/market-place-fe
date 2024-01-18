import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// GET ALL PRODUCTS
// export const getProductAction = createAsyncThunk(
//   "getProduct/product",
//   async (keyword) => {
//     try {
//       if (!keyword == "") {
//         const response = await axios.get(
//           `http://localhost:8080/api/public/products?keyword=${keyword}`
//         );
//         const data = response.data;

//         return data;
//       } else {
//         const response = await axios.get(
//           `http://localhost:8080/api/public/products?keyword=&page=1`
//         );
//         const data = response.data;

//         return data;
//       }
//     } catch (error) {
//       new Error(error.message);
//     }
//   }
// );

export const getProductAction = createAsyncThunk(
  "getProduct/product",
  async ({keyword = "", page} = {}) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/public/products`,
        {
          params: {keyword, page},
        }
      );

      const data = response.data;

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
