import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "./Footer";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Registration from "../pages/Registration";

const Main: React.FC = () => {
  return (
    <main className="w-full md:w-9/12 sm:w-10/12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Main;
