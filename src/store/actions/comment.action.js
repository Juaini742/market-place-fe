import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";
import { backendUrl } from "../../constants";

// GET CART ITEMS BY USER ID
export const getCommentByUserIdAction = createAsyncThunk(
  "getCommentByUserId/comment",
  async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/secured/getCommentUser`,
        {
          withCredentials: true,
        }
      );
      const data = response.data;
      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// GET CART ITEMS BY USER ID
export const getCommentByIdAction = createAsyncThunk(
  "getCommentById/comment",
  async (id) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/secured/getOneComment/${id}`,
        {
          withCredentials: true,
        }
      );
      const data = response.data;

      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// GET CART ITEMS BY USER ID
export const getCommentByProductIdAction = createAsyncThunk(
  "getCommentByProductId/comments",
  async (id) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/public/getCommentProductId/${id}`,
        {
          withCredentials: true,
        }
      );
      const data = response.data;

      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// ADD COMMENT BY PRODUCT ID
export const addCommentAction = createAsyncThunk(
  "addComment/comment",
  async ({ id, formData}) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/secured/addComment/${id}`,
        formData,
        {
          withCredentials: true
        }
      );

      notification.success({
        message: "Success",
        description: "Comment has added successfully",
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const updateCommentAction = createAsyncThunk(
  "updateComment/comment",
  async ({ id, formData}) => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/secured/updateComment/${id}`,
        formData,
        {
        withCredentials: true,
        }
      );

      notification.success({
        message: "Success",
        description: "Comment has updated successfully",
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const deleteCartAction = createAsyncThunk(
  "deleteCart/cart",
  async (id) => {
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

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
