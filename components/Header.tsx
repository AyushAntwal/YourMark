import Link from "next/link";
import React from "react";
function Header() {
  return (
    <header className="w-full  relative bg-transparent flex">
      <div className="px-7 py-4 fancy-goo relative bg-white text-black font-serif">
        <div className="relative w-full text-black">
          <div className="absolute w-[200px] bg-white -top-[1.9rem] -right-[4rem] h-4"></div>
          <div className="absolute w-4 bg-white -end-[6rem] -left-[2.75rem] h-[100px]"></div>
          <h1 className="sm:text-xl md:text-xl lg:text-1xl text-nowrap font-bold ">
            Yourmark
          </h1>
          <div className="w-full h-[1px] bg-black"></div>
          <p className="sm:text-xs md:text-xs lg:text-sm text-nowrap text-center text-black/60">
            Make It Yours
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full bg-transparent items-center px-3">
        <div className="hidden md:flex gap-4">
          <Link
            href="/"
            className="rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 font-semibold text-md text-white text-center px-5 py-2 shadow-md hover:scale-105 transition-transform duration-300"
          >
            Home
          </Link>
          <Link
            href="/d/about"
            className="rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 font-semibold text-md text-white text-center px-5 py-2 shadow-md hover:scale-105 transition-transform duration-300"
          >
            About
          </Link>
        </div>

        <div className="flex gap-3">
          <Link
            href={"/"}
            className="rounded-xl  sm:w-full group text-md flex items-center bg-yellow-300 hover:bg-white  shadow-white text-black font-bold text-center px-4 py-2"
          >
            About
            <span className="material-symbols-outlined pl-2 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1 duration-300 ">
              deployed_code_account
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
