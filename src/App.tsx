import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Contact from "./pages/contact";
import OrderPackage from "./pages/orderPackage";
import Home from "./pages/home";
import Package from "./pages/package";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Header />
      <Box h='calc(100vh - 80px)'>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-package" element={<OrderPackage />} />
          <Route path="/package/:orderId" element={<Package />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
