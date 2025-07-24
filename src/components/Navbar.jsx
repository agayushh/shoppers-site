import shopperLogo from "../assets/logo_big.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useSetRecoilState } from "recoil";
import { searchBarModal } from "../atom/atom";

function Navbar() {
  const setSearchModalState = useSetRecoilState(searchBarModal);
  const openSearchModal = () => {
    setSearchModalState(true);
  };

  return (
    <div className="flex md:flex-row justify-between px-4 md:px-10 pt-2 md:py-4 shadow-lg">
      <div className="flex justify-center md:justify-start md:mr-16 mb-4 md:mb-0">
        <img src={shopperLogo} alt="Shopper Logo" className="h-12" />
        <Link to="/">
          <h1 className="font-normal text-2xl md:text-3xl font-mono flex justify-center items-center pt-2">
            SHOPPER
          </h1>
        </Link>
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
        <div className="m-auto mr-10 lg:mr-3 ">
          <IoIosSearch
            size={24}
            onClick={openSearchModal}
            className="cursor-pointer"
          />
        </div>
        <div className="lg:block hidden">
          <div className="flex justify-center md:justify-end gap-x-5 items-center">
            <Link className="py-2 px-4" to="/login">
              {" "}
              Login{" "}
            </Link>
            <div className="hidden lg:block">
              <Link to="/cart">
                <FaShoppingCart size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <AiOutlineMenu size={24} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
