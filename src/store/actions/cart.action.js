import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";

// GET CART ITEMS BY USER ID
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

// ADD CART BY PRODUCT ID
export const addCartAction = createAsyncThunk(
  "addCart/cart",
  async ({token, id, formData}, {dispatch}) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/secured/cart/${id}`,
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
        `http://localhost:8080/api/secured/updateCart/${id}`,
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
        `http://localhost:8080/api/secured/deleteCart/${id}`,
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
