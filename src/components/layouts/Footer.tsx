import { socialMedia } from "@/data/home";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 bg-neutral-900">
      <div className="container">
        <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <h1 className="text-sm">© 2023. Aiman Yusuf Wicaksono.</h1>
          <div className="flex justify-end gap-4">
            {socialMedia.map((data) => (
              <Link href={data.url} key={data.name} target="_blank">
                <data.icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
