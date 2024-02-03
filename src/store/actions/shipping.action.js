import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {backendUrl} from "../../contants";

export const getShipping = createAsyncThunk(
  "postShipping/shipping",
  async ({id, token}) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/secured/shipping/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export const postShipping = createAsyncThunk(
  "postShipping/shipping",
  async ({id, token, formData}) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/secured/shipping/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      window.snap.pay(data.token);

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
