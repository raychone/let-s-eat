/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
