import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";

export const registerAction = createAsyncThunk(
  "registerAction/register",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/register",
        formData
      );

      notification.success({
        message: "Success",
        description: "Shipping data has been successfully added.",
      });

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const loginAction = createAsyncThunk(
  "loginAction/login",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        formData,
        {
          withCredentials: true,
        }
      );

      const data = response.data;

      console.log(data);
      // navigate("/");

      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
