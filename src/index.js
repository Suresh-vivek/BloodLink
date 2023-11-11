import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Donation from "./Components/Donation";
import Community from "./Components/Community";
import Login from "./Components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Add more routes as needed */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
