import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home/components/home";
import { MonthStatictics } from "./pages/MonthStatictics/components/MonthStatictics";
import { Header } from "./shared/Header";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MonthStatictics" element={<MonthStatictics />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
