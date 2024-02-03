import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// GET BANK NAMES
export const getBankAction = createAsyncThunk("getBank/bank", async () => {
  try {
    const response = await axios.get(
      `https://gist.githubusercontent.com/muhammadyana/6abf8480799637b4082359b509410018/raw/dc4aae6808285aea032a3971b3e78c497881aa23/indonesia-bank.json`
    );

    const data = response.data;

    return data;
  } catch (error) {
    new Error(error.message);
  }
});
