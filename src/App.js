import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Card from "./components/Form.css";

export default function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        about="About TextUtils"
        toggle={toggleMode}
        mode={mode}
      />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/"
          element={<Form heading="welcome to TextUtils" mode="mode" />}
        ></Route>
      </Routes>
    </Router>
  );
}
