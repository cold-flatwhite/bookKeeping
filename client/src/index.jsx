import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import New from "./components/New";
import Month from "./components/Month";
import Year from "./components/Year";
import './theme.css'
import { Provider } from "react-redux";
import store from "./store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="month" element={<Month />} />
        <Route path="year" element={<Year />} />
      </Route>
      <Route path="new" element={<New />} />
    </Routes>
  </BrowserRouter>
  </Provider>
  
);
