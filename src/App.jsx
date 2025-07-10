import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ContactsPage from "./pages/ContactsPage";

import PrivateRoute from "./components/routes/PrivateRoute";
import RestrictedRoute from "./components/routes/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Sayfa Yükleniyor...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
           <RestrictedRoute redirectTo="/contacts" component={RegistrationPage} />
          }
        />

        <Route
          path="/login"
          element={
           <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
          }
        />

        <Route
          path="/contacts"
          element={
           <PrivateRoute redirectTo="/login" component={ContactsPage} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
