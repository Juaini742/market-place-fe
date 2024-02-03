import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {notification} from "antd";
import {backendUrl} from "../../contants";

// GET ALL PRODUCTS
export const getProductAction = createAsyncThunk(
  "getProduct/product",
  async ({keyword = "", page, filters = {}} = {}) => {
    const {sortBySold, sortByPrice, sortByLowestPrice, sortOrder} = filters;
    try {
      const response = await axios.get(`${backendUrl}/api/public/products`, {
        params: {
          keyword,
          page,
          sortBySold,
          sortByPrice,
          sortByLowestPrice,
          sortOrder,
        },
      });

      const data = response.data || [];

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getProductByIdAction = createAsyncThunk(
  "getProductById/product",
  async (id) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/public/productId/${id}`
      );

      const data = response.data;

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getProductByUserIdAction = createAsyncThunk(
  "getProductByUserId/product",
  async ({id, token}) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/secured/productUser/${id}`,
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

export const addproductAction = createAsyncThunk(
  "getProductById/product",
  async ({token, formData}) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/secured/addProduct`,
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
        description: "Product created successfully",
      });

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const updateproductAction = createAsyncThunk(
  "getProductById/product",
  async ({token, formData, id}) => {
    try {
      const response = await axios.put(
        `${backendUrl}/api/secured/update/${id}`,
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
        description: "Product updated successfully",
      });

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const deleteProductByIdAction = createAsyncThunk(
  "deleteProductById/product",
  async ({id, token}, {dispatch}) => {
    try {
      const response = await axios.delete(
        `${backendUrl}/api/secured/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      notification.success({
        message: "Success",
        description: "Product has been deleted successfully",
      });

      dispatch(getProductByUserIdAction());

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
