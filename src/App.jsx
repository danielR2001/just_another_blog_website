import React from "react";
import { AppBar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import MyAppBar from "./ui/components/appBar/MyAppBar";

export default function App() {
  return (
    <>
      <MyAppBar />
      <Outlet />
    </>
  );
}
