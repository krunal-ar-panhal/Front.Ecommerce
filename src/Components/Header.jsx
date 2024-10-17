import React from "react";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div>
          <Link to='/'>
          <p className="font-extrabold text-2xl font-serif text-blue-600 cursor-pointer">
            Let,s <span className="text-green-500">Shop</span>
          </p>
          </Link>
          
        </div>

        <div className="hidden lg:flex items-center border rounded-lg p-2 focus-within:shadow-md ">
          <input
            type="text"
            placeholder="Search here..."
            className="outline-none w-96"
          />
          <CiSearch className="text-xl cursor-pointer" />
        </div>

        <div className="flex items-center gap-5">
          <div>
            <CiUser className="text-3xl cursor-pointer" />
          </div>
          <div className="relative mr-2">
            <span>
              <CiShoppingCart className="text-3xl cursor-pointer" />
            </span>
            <div className="bg-black absolute -top-2 -right-3 text-white h-5 rounded-full w-5 p-1 flex items-center justify-center">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div className="flex items-center">
            <Link to='/login'>
            <buttton className="bg-black text-white hover:opacity-85 cursor-pointer active:bg-white active:border active:border-black  active:text-black rounded-md p-2"> Log In</buttton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
