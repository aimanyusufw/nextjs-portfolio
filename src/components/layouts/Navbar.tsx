import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="py-7 absolute top-0 left-0 right-0">
      <div className="container">
        <div className="flex md:px-4 items-center justify-between">
          <Link href={"/"}>
            <h1 className="font-popins font-bold text-2xl text-text">AYW.</h1>
          </Link>
          <div className="hidden md:flex gap-4 text-sm font-medium text-text ">
            <Link className="hover:opacity-70 transition-all" href="#">
              Projects
            </Link>
            <span className="opacity-50 text-xs px-4">/</span>
            <Link className="hover:opacity-70 transition-all" href="#">
              Blog
            </Link>
            <span className="opacity-50 text-xs px-4">/</span>
            <Link className="hover:opacity-70 transition-all" href="#">
              Contact
            </Link>
          </div>
          <button className="md:hidden">
            <FiMenu className="w-8 h-8" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
