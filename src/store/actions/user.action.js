import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";
import {backendUrl} from "../../contants";

// GET USER BY TOKEN
export const getUserByTokenAction = createAsyncThunk(
  "getUserByToken/getUser",
  async (token) => {
    try {
      const response = await axios.get(`${backendUrl}/api/getUserByToken`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// REGISTER USER
export const registerAction = createAsyncThunk(
  "registerAction/register",
  async (formData) => {
    try {
      const response = await axios.post(`${backendUrl}/api/register`, formData);

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

// LOGIN USER
export const loginAction = createAsyncThunk(
  "loginAction/login",
  async ({formData, navigate}) => {
    try {
      const response = await axios.post(`${backendUrl}/api/login`, formData, {
        withCredentials: true,
      });

      const data = response.data;

      sessionStorage.setItem("token", data.token);

      navigate("/");

      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// LOGOUT USER
export const logoutAction = createAsyncThunk(
  "lohoutAction/logout",
  async ({token, navigate}) => {
    try {
      const response = await axios.post(`${backendUrl}/api/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;

      sessionStorage.removeItem("token", data.token);

      navigate("/login");

      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// UPDATE USER
export const updateUserAction = createAsyncThunk(
  "lohoutAction/logout",
  async ({token, formData, id}) => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/updateUser/${id}`,
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
