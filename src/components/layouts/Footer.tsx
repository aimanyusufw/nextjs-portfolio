import Link from "next/link";
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
                  <Link href="#" className=" hover:underline">
                    Instagram
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Tiktok
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Technologies
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <Link href="#" className=" hover:underline">
                    NextJS
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    React JS
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Tailwind CSS
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Laravel
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © 2025 <Link href="/">Aiman Yusuf Wicaksono</Link>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
