import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MainMobile from "./pages/MainMobile";

export default function App() {
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Routes>
          <Route exact path="/" element={<MainMobile />} />
        </Routes>
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Box>
    </>
  );
}
