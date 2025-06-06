import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Children from "./pages/Children";

import "./App.css";
import Navbar from "./components/Navbar";
import AddToCart from "./pages/AddToCart";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/children" element={<Children />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
    </div>
  );
}

export default App;
