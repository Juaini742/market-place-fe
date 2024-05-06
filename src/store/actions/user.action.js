import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";
import { backendUrl } from "../../constants";

// GET USER BY TOKEN
export const getUserByTokenAction = createAsyncThunk(
  "getUserByToken/getUser",
  async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/getUserByToken`, {
        withCredentials: true,
      });

      const data = response.data;

      return data;
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
  async (formData) => {
    try {
      const response = await axios.post(`${backendUrl}/api/login`, formData, {
        withCredentials: true,
      });

      const data = response.data;

      window.location.href = "/";

      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// LOGOUT USER
export const logoutAction = createAsyncThunk(
  "lohoutAction/logout",
  async ({navigate}) => {
    try {
      const response = await axios.post(`${backendUrl}/api/logout`, null, {
        withCredentials: true,
      });

      const data = response.data;

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
  async ({formData, id}) => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/updateUser/${id}`,
        formData,
        {
          withCredentials: true,
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
