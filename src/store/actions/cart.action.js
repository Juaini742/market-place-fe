import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";
import { backendUrl } from "../../constants";

// GET CART ITEMS BY USER ID
export const getCartAction = createAsyncThunk("getCart/cart", async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/secured/cartsUser`, {
      withCredentials: true,
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// ADD CART BY PRODUCT ID
export const addCartAction = createAsyncThunk(
  "addCart/cart",
  async ({id, data}, {dispatch}) => {
    try {

      const response = await axios.post(
        `${backendUrl}/api/secured/cart/${id}`,
        data,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );


      notification.success({
        message: "Success",
        description: "Product has added successfully",
      });

      dispatch(getCartAction());

      return response.data;
    } catch (error) {
      notification.error({
        message: "Errors",
        description: "This product has already been saved",
      });
      throw new Error(error.response.data.message);
    }
  }
);

export const updateCartAction = createAsyncThunk(
  "deleteCart/cart",
  async ({id, quantity}, {dispatch}) => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/secured/updateCart/${id}`,
        {quantity},
        {
          withCredentials: true,
        }
      );

      dispatch(getCartAction());

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const deleteCartAction = createAsyncThunk(
  "deleteCart/cart",
  async ({id}, {dispatch}) => {
    try {
      const response = await axios.delete(
        `${backendUrl}/api/secured/deleteCart/${id}`,
        {
          withCredentials: true,
        }
      );

      notification.success({
        message: "Success",
        description: "Product has deleted successfully",
      });

      dispatch(getCartAction());

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
