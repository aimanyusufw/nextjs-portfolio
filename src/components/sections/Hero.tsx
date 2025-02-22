"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "../ui/Skeleton";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="container py-44 md:py-80 flex justify-center items-center h-full">
        <div className="md:px-4 space-y-6 md:space-y-8 relative">
          <div className="flex md:justify-center items-center gap-4">
            <div className="rounded-full h-8 w-8 md:w-12 md:h-12">
              {isLoading ? (
                <Skeleton className="h-8 w-8 md:w-12 md:h-12 rounded-full" />
              ) : (
                <Image
                  src="/profile.svg"
                  alt="Aiman Yusuf Wicaksono"
                  width={70}
                  height={70}
                  className="w-full h-full"
                />
              )}
            </div>
            <h4 className="font-medium text-2xl md:text-3xl text-center">
              Hello 👋
            </h4>
          </div>
          <h1 className="font-semibold text-4xl md:text-6xl max-w-sm md:max-w-4xl md:text-center leading-snug md:leading-relaxed">
            My Name Is{" "}
            <span className="md:hidden text-red-500">Aiman Yusuf</span>
            <span
              id="trigger"
              className="text-red-500 cursor-pointer group relative hidden md:inline"
            >
              [name]
              <div
                id="tag"
                className="absolute transition-all duration-300 opacity-0 text-xs md:text-base w-[600px] group-hover:opacity-100 flex flex-col items-center font-firaCode top-10 md:top-20 left-1/2 transform -translate-x-1/2"
              >
                <div
                  className="w-0 h-0 
                  border-l-[15px] border-l-transparent
                  border-b-[20px] border-b-red-500
                  border-r-[15px] border-r-transparent"
                ></div>
                <h1 className="bg-red-500 px-2 py-1.5 text-white font-medium">
                  System Override: Only &lsquo;Aiman Yusuf Wicaksono&rsquo; is
                  valid.
                </h1>
              </div>
            </span>{" "}
            and I&apos;m A Software Engineer;
          </h1>
          <p className="text-text text-xs md:text-sm md:mx-auto max-w-xs md:max-w-lg md:text-center leading-relaxed">
            Hello, my name is Aiman, and I&lsquo;m a Software Engineer from
            Indonesia. I enjoy exploring new experiences in my life.
          </p>
          <div className="flex md:justify-center">
            <Link
              className="px-4 py-3 bg-neutral-800 rounded-xl text-xs md:text-sm font-medium"
              href={"#"}
            >
              Discover My Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
