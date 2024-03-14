import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
