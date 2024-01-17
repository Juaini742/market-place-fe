import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";

export const getUserByTokenAction = createAsyncThunk(
  "getUserByToken/getUser",
  async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/getUserByToken",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
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
  async ({formData, navigate}) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        formData,
        {
          withCredentials: true,
        }
      );

      const data = response.data;

      sessionStorage.setItem("token", data.token);

      navigate("/");

      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const logoutAction = createAsyncThunk(
  "lohoutAction/logout",
  async ({token, navigate}) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/logout",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      sessionStorage.removeItem("token", data.token);

      navigate("/login");

      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const updateUserAction = createAsyncThunk(
  "lohoutAction/logout",
  async ({token, formData, id}) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/updateUser/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;

      notification.success({
        message: "Success",
        description: "User updated successfully",
      });

      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
