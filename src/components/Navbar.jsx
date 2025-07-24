import React, { useState } from "react";
import shopperLogo from "../assets/logo_big.png";
import cart from "../assets/cart_icon.png";
import { Link, Routes } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar";

function Navbar() {
  const [searchItem, setsearchItem] = useState("");
  console.log(searchItem);
  return (
    <div className="flex md:flex-row justify-between px-4 md:px-10 pt-2 md:py-4 shadow-lg">
      <div className="flex justify-center md:justify-start md:mr-16 mb-4 md:mb-0">
        <img src={shopperLogo} alt="Shopper Logo" className="h-12" />
        <h1 className="font-normal text-2xl md:text-3xl font-mono flex justify-center items-center pt-2">
          SHOPPER
        </h1>
      </div>
      <div className="lg:block hidden">
        <ol className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8 mt-0 md:mt-2 mr-0 md:mr-16">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/children">Children</Link>
          </li>
        </ol>
      </div>
      <div className="flex justify-center items-center">
        <div className="lg:block hidden">
          <div className="flex justify-center md:justify-end gap-x-5 items-center">
            <button className="py-2 px-4"> Login </button>
            <div className="hidden lg:block">
              <FaShoppingCart size={24} />
            </div>
          </div>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="block lg:hidden">
          <AiOutlineMenu size={24} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
