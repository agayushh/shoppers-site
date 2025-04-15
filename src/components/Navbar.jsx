import React, { useState } from "react";
import shopperLogo from "../assets/logo_big.png";
import cart from "../assets/cart_icon.png";
import { Link, Routes } from "react-router-dom";

function Navbar() {
  const [searchItem, setsearchItem] = useState("");
  console.log(searchItem);
  return (
    <div className="flex justify-between px-10 flex-wrap shadow-lg">
      <div className="flex mr-16">
        <img src={shopperLogo} alt="" />
        <h1 className="font-normal text-3xl font-mono mt-7">SHOPPER</h1>
      </div>
      <div>
        <ol className="flex space-x-8 mt-7 mr-16">
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
      <div>
        <input
          type="text"
          placeholder="enter item to search"
          className="p-2 bg-slate-200 mt-5"
          value={searchItem}
          onChange={(e) => {
            setsearchItem(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-x-5">
        <button> Login </button>
        <img src={cart} alt="" className="w-8 h-8 mt-7" />
      </div>
    </div>
  );
}

export default Navbar;
