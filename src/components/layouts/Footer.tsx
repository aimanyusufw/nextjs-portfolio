import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:py-8 px-4 py-6">
          <h1 className="font-popins font-bold text-2xl text-text">AYW.</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 justify-end">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Social Media
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Tiktok
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Technologies
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    NextJS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    React JS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Laravel
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © 2025 <a href="/">Aiman Yusuf Wicaksono</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
