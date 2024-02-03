import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";
import {backendUrl} from "../../contants";

export const getAddress = createAsyncThunk(
  "getAddress/address",
  async ({id, token}) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/secured/getAddressByUserId/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      return data;
    } catch (error) {
      new Error(error.message);
    }
  }
);

export const updateAddress = createAsyncThunk(
  "updateAddress/address",
  async ({id, token, formData}) => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/secured/updateAddress/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      notification.success({
        message: "Successfully",
        description: "Address updated successfully",
      });

      return response.data;
    } catch (error) {
      new Error(error.message);
    }
  }
);
