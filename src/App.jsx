import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Children from "./pages/Children";

import "./App.css";
import Navbar from "./components/Navbar";
import AddToCart from "./pages/AddToCart";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import SearchBarPopup from "./components/SearchBarPopup";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname)
  return (
    <div>
      {shouldShowNavbar && <Navbar />}
      {shouldShowNavbar && <SearchBarPopup />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/children" element={<Children />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
    </div>
  );
}

export default App;
