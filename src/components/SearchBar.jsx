import React from "react";
import { useRecoilState } from "recoil";
import { searchItem } from "../atom/atom.js";
const SearchBar = () => {
  const [searchedItem, setSearchedItem] = useRecoilState(searchItem);
  const clearSearchBar = () => {
    setSearchedItem("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter items to search"
        id="searchedItem"
        value={searchedItem}
        onChange={(e) => {
          setSearchedItem(e.target.value);
          console.log(e.target.value);
        }}
        className="w-full p-3 pl-4 pr-10 rounded-2xl shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
      />
      {searchItem && (
        <button
          onClick={() => clearSearchBar()}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
        >
          clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;
