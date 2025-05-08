import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Alerts from "./components/Alerts";
import ProfileBoard from "./components/ProfileBoard";
import Reports from "./components/pages/Reports";
import Footer from "./components/Footer";
import NotFound from "./components/pages/NotFound";
export const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/profileboard" element={<ProfileBoard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
};
