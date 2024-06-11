import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";
import {backendUrl} from "../../constants";

export const getAddress = createAsyncThunk("getAddress/address", async () => {
  try {
    const response = await axios.get(
      `${backendUrl}/api/secured/getAddressByUserId`,
      {
        withCredentials: true,
      }
    );

    const data = response.data;

    return data;
  } catch (error) {
    new Error(error.message);
  }
});

export const updateAddress = createAsyncThunk(
  "updateAddress/address",
  async ({id, formData}) => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/secured/updateAddress/${id}`,
        formData,
        {
          withCredentials: true,
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
