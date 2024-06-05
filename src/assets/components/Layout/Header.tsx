import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Codebook
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
             <span className="cursor-pointer text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
             <span className="bi bi-search"></span>
             <span className="bi bi-cart-fill"></span>
             <span className="bi bi-person-circle"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};
