import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  SearchPage,
} from "./ui/pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
