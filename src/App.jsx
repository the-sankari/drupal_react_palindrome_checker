// src/App.jsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import InputForm from "./component/InputForm";
import DisplayResult from "./component/DisplayResult";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<InputForm />} />
            <Route path="result" element={<DisplayResult />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
