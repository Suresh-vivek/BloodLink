import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { useRef } from "react";
import Map from "./Components/Map";

import Navbar from "./Components/Navbar";
import Problems from "./Components/Problems";
import Solution from "./Components/Solution";
import Footer from "./Components/Footer";

function App() {
  const myRef = useRef(null);
  return (
    <div className="App">
      <Navbar />
      <Map />
      <Problems />
      <Solution />
      <Footer />
    </div>
  );
}

export default App;
