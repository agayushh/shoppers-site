import shopperLogo from "../assets/logo_big.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchBarModal, usernameNav } from "../atom/atom";
import { useCart } from "../hooks/useCart";

function Navbar() {
  const { cart } = useCart();
  const name = useRecoilValue(usernameNav);
  const setSearchModalState = useSetRecoilState(searchBarModal);
  const openSearchModal = () => {
    setSearchModalState(true);
  };

  const cartMapped = cart.map((item) => item);
  const totalItems = cartMapped.length;

  return (
    <div
      className="flex md:flex-row justify-between px-4 md:px-10 pt-2 md:py-4 shadow-lg 
                    transition-shadow duration-300 hover:shadow-xl bg-white relative z-10"
    >
      <div className="flex justify-center md:justify-start md:mr-16 mb-4 md:mb-0 group">
        <img
          src={shopperLogo}
          alt="Shopper Logo"
          className="h-12 transition-transform duration-300 group-hover:scale-105"
        />
        <Link to="/" className="group">
          <h1
            className="font-normal text-2xl md:text-3xl font-mono flex justify-center items-center pt-2 
                         transition-all duration-300 hover:text-gray-700 group-hover:tracking-wider"
          >
            SHOPPER
          </h1>
        </Link>
      </div>
      <div className="lg:block hidden">
        <ol className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8 mt-0 md:mt-2 mr-0 md:mr-16">
          <li>
            <Link
              to="/"
              className="relative py-2 px-3 text-gray-700 font-medium transition-all duration-300 hover:text-black hover:scale-105 
                         after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-black 
                         after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/men"
              className="relative py-2 px-3 text-gray-700 font-medium transition-all duration-300 hover:text-black hover:scale-105 
                         after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-black 
                         after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              to="/women"
              className="relative py-2 px-3 text-gray-700 font-medium transition-all duration-300 hover:text-black hover:scale-105 
                         after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-black 
                         after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/children"
              className="relative py-2 px-3 text-gray-700 font-medium transition-all duration-300 hover:text-black hover:scale-105 
                         after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-black 
                         after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              Children
            </Link>
          </li>
        </ol>
      </div>
      <div className="flex justify-center items-center">
        <div className="m-auto mr-10 lg:mr-3">
          <IoIosSearch
            size={24}
            onClick={openSearchModal}
            className="cursor-pointer text-gray-600 hover:text-black transition-all duration-300 hover:scale-110 active:scale-95"
          />
        </div>
        <div className="lg:block hidden">
          <div className="flex justify-center md:justify-end gap-x-5 items-center">
            {name ? (
              <Link
                className="py-2 px-4 text-gray-700 font-medium border border-transparent rounded-md 
                         transition-all duration-300 hover:text-black hover:border-gray-300 hover:bg-gray-50 hover:scale-105 
                         active:scale-95 shadow-sm hover:shadow-md"
              >
                {name}
              </Link>
            ) : (
              <Link
                className="py-2 px-4 text-gray-700 font-medium border border-transparent rounded-md 
                         transition-all duration-300 hover:text-black hover:border-gray-300 hover:bg-gray-50 hover:scale-105 
                         active:scale-95 shadow-sm hover:shadow-md"
                to="/login"
              >
                Login
              </Link>
            )}
            <div className="hidden lg:block">
              <Link to="/cart" className="relative group">
                <FaShoppingCart
                  size={24}
                  className="text-gray-600 hover:text-black transition-all duration-300 group-hover:scale-110 
                             group-active:scale-95 cursor-pointer"
                />
                <span
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 
                                 flex items-center justify-center opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-300 transform group-hover:scale-110"
                >
                  {totalItems}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <AiOutlineMenu
            size={24}
            className="cursor-pointer text-gray-600 hover:text-black transition-all duration-300 hover:scale-110 
                       active:scale-95 hover:rotate-90"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
