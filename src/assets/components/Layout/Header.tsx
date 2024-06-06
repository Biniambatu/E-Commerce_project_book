import React from "react";
import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
export const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
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
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white">
              <CiSettings size="30px" />
            </span>
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white">
              <IoIosSearch size="30px" />
            </span>
            <Link to="/cart">
              <span className="cursor-pointer text-xl text-gray-700 dark:text-white">
                <BsCart2 size="30px" />
              </span>
            </Link>
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5">
              <RxAvatar size="30px" />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};
