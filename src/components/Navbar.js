import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="my-0 z-50 bg-purple-900 border-b-2 border-b-red-200 w-auto sticky top-0 "
      style={{ backgroundColor: "var(--violone)" }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-10 items-center justify-between ">
          <div className="absolute inset-y-0  left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 flex items-center  sm:items-stretch sm:justify-start">
            <div className="flex space-x-4">
              <Link
                to="/#home"
                className="hover:bg-red-100  text-red-100 hover:text-indigo-700 rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to="/#aboutMe"
                className="hover:bg-red-100 text-red-100 hover:text-indigo-700 rounded-md px-3 py-2 text-sm font-medium"
              >
                About Me
              </Link>
              <Link
                to="/#myWork"
                className="text-red-100 hover:bg-red-100 hover:text-indigo-700 rounded-md px-3 py-2 text-sm font-medium"
              >
                My work
              </Link>
              <Link
                to="/#myTec"
                className="text-red-100 hover:bg-red-100 hover:text-indigo-700 rounded-md px-3 py-2 text-sm font-medium"
              >
                My technology
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
