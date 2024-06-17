import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav
      className="my-0 z-50 bg-purple-900 border-b-2 border-b-red-200 w-auto sticky top-0 "
      style={{ backgroundColor: "var(--violone)" }}
    >
      <div className="mx-auto max-w-7xl px-2 lg:px-8 "></div>

      <div className="flex h-10 items-center xs:justify-between md:justify-start inset-y-0 left-0 ">
        <button className="text-red-100 flex rounded-md  gap-2 px-3 text-md lg:hidden md:hidden sm:font-light">
          <FaCat />
          Alessia Mori
        </button>
        <button
          onClick={toggleNav}
          className="text-red-100 rounded-md mx-3 px-4 py-2 text-md lg:hidden md:hidden sm:font-light"
        >
          <TiThMenuOutline />
        </button>
        <Link
          to="/#home"
          className="hover:bg-red-100 text-red-100 xs:hidden md:block lg:block hover:text-indigo-700 rounded-md px-3 py-2 text-sm font-medium"
          aria-current="page"
        >
          Home
        </Link>
        <Link
          to="/#aboutMe"
          className="hover:bg-red-100 text-red-100 xs:hidden md:block lg:block hover:text-indigo-700 rounded-md px-3 py-2 text-sm font-medium"
        >
          About Me
        </Link>
        <Link
          to="/#myWork"
          className="hover:bg-red-100 text-red-100 xs:hidden md:block lg:block hover:text-indigo-700 rounded-md px-3 py-2 text-sm font-medium"
        >
          My work
        </Link>
        <Link
          to="/#myTec"
          className="hover:bg-red-100 text-red-100 xs:hidden md:block lg:block hover:text-indigo-700 rounded-md px-3 py-2 text-sm font-medium"
        >
          My technology
        </Link>
      </div>

      {navOpen && (
        <div
          className="absolute top-10 left-56 flex flex-col flex-wrap p-4  rounded-md shadow-md"
          style={{
            backgroundColor: "var(--rosetto)",
            color: "var(--violone)",
          }}
        >
          {/* Dropdown menu items */}
          <Link
            to="/#home"
            className="hover:bg-red-100  hover:text-purple-900 rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            Home
          </Link>

          <Link
            to="/#aboutMe"
            className="hover:bg-red-100  hover:text-purple-900 rounded-md px-3 py-2 text-sm font-medium"
          >
            About Me
          </Link>
          <Link
            to="/#myWork"
            className=" hover:bg-red-100 hover:text-purple-900 rounded-md px-3 py-2 text-sm font-medium"
          >
            My work
          </Link>
          <Link
            to="/#myTec"
            className=" hover:bg-red-100 hover:text-purple-900 rounded-md px-3 py-2 text-sm font-medium"
          >
            My technology
          </Link>
        </div>
      )}
    </nav>
  );
}
