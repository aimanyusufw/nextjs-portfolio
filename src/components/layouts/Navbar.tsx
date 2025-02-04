import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-7 absolute top-0 left-0 right-0">
      <div className="container">
        <div className="flex md:px-4 justify-between">
          <Link href={"/"}>
            <h1 className="font-popins font-bold text-2xl text-text">AYW.</h1>
          </Link>
          <div className="flex gap-4 text-sm font-medium text-text">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
