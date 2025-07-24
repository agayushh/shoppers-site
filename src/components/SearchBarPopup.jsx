import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  filteredItemsSelector,
  searchBarModal,
  searchItem,
} from "../atom/atom.js";
import { MdCancel } from "react-icons/md";

const SearchBarPopup = () => {
  const [isOpen, setIsOpen] = useRecoilState(searchBarModal);
  const [itemToBeSearched, setItemToBeSearched] = useRecoilState(searchItem);
  useEffect(() => {
    const handleESC = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleESC);
    return () => window.removeEventListener("keydown", handleESC)
  }, [setIsOpen]);

  useEffect(() => {
    const handleS = (e) => {
      const activeTag = document.activeElement.tagName;

      // Skip if the user is typing in an input or textarea
      if (
        activeTag === "INPUT" ||
        activeTag === "TEXTAREA" ||
        e.metaKey ||
        e.ctrlKey
      ) {
        return;
      }
      if (e.key === "s") {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleS);
    return () => window.removeEventListener("keydown", handleS);
  }, [setIsOpen]);

  const filteredProducts = useRecoilValue(filteredItemsSelector);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 bg-opacity-50 flex flex-wrap items-start pt-24 justify-center">
      <div className="backdrop-blur-3xl w-full max-w-3xl mx-4 rounded-xl shadow-lg p-6 relative">
        {/* <button
          className="absolute top-2 right-1 text-gray-900 hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          <MdCancel size={24} />
        </button> */}

        <input
          autoFocus
          type="text"
          placeholder="Search products..."
          value={itemToBeSearched}
          onChange={(e) => setItemToBeSearched(e.target.value)}
          className="w-full p-3 mb-6 border border-orange-600 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />
        <div className="overflow-y-auto max-h-[60vh] grid grid-cols-2 md:grid-cols-3 gap-4 pr-2 scrollbar-none">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} className="border p-2 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain"
                />
                <h2 className="mt-2 text-lg text-center text-white">
                  {item.name}
                </h2>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-900 col-span-full">
              No results found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBarPopup;
