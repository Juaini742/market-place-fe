import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCartAction = createAsyncThunk(
  "getCart/cart",
  async ({token, id}) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/secured/cartsUser/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const addCartAction = createAsyncThunk(
  "addCart/cart",
  async ({token, id}, {dispatch}) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/secured/cart/${id}`,
        {
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(getCartAction());

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
