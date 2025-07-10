import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`; //Taşıyıcı token ekleme yazdım.
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};
// kullanıcı kayıt
export const register = createAsyncThunk(
  
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      console.log("merhaba ben hata");
      const res = await axios.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      // teSt kodu
      console.log("REGISTER RESPONSE:", res.data);
      return res.data;
    } catch (error) {
      console.log("❌ REGISTER ERROR:", error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//kullanıcı giriş
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Kullanıcı çıkışı
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Kullanıcıyı yenileme
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Giriş bilgisi yok!");
    }

    try {
      setAuthHeader(token);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
