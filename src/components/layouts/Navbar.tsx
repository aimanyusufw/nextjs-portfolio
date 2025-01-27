import React from "react";

const Navbar = () => {
  return (
    <nav className="py-7 absolute top-0 left-0 right-0">
      <div className="container">
        <div className="flex md:px-4 justify-between">
          <h1 className="font-popins font-bold text-2xl">AYW.</h1>
          <div className="flex gap-4 text-sm font-medium">
            <a href="#">Projects</a>
            <span className="text-xs text-neutral-400 px-4">/</span>
            <a href="#">Blog</a>
            <span className="text-xs text-neutral-400 px-4">/</span>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
