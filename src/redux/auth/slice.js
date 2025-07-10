import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      //Kayıt olunduğunda
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //giriş yaptığında
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //çıkış yaptığında
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      //yenilemeye başladığında
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      //kullanıcı yenilendi
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      //yenilemede hata olduğunda
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});
export const authReducer = authSlice.reducer;
