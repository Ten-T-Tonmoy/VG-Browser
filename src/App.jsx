import React, { useState } from "react";
import Home from "./Pages/Home";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";
import GamePage from "./GamePage/GamePage";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Navbar />
      <Home />
    </>
  );
};

export default App;
