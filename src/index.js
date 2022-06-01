import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/HomePage";
import { Favorite } from "./pages/Favorite";
import store from "./store";
import { Routes as AppRoutes } from "./utils/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ToastContainer
      theme="colored"
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />

    <Router>
      <Routes>
        <Route
          path={AppRoutes.homepage}
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path={AppRoutes.favorites}
          element={
            <Layout>
              <Favorite />
            </Layout>
          }
        />
      </Routes>
    </Router>
  </Provider>
);
