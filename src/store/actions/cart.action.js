import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";
import {backendUrl} from "../../contants";

// GET CART ITEMS BY USER ID
export const getCartAction = createAsyncThunk(
  "getCart/cart",
  async ({token, id}) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/secured/cartsUser/${id}`,
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

// ADD CART BY PRODUCT ID
export const addCartAction = createAsyncThunk(
  "addCart/cart",
  async ({token, id, formData}, {dispatch}) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/secured/cart/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      notification.success({
        message: "Success",
        description: "Product has added successfully",
      });

      dispatch(getCartAction());

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const updateCartAction = createAsyncThunk(
  "deleteCart/cart",
  async ({token, id, quantity}, {dispatch}) => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/secured/updateCart/${id}`,
        {quantity},
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

export const deleteCartAction = createAsyncThunk(
  "deleteCart/cart",
  async ({token, id}, {dispatch}) => {
    try {
      const response = await axios.delete(
        `${backendUrl}/api/secured/deleteCart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
