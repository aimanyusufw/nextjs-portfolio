"use client";

import { Skeleton } from "@/components/ui/Skeleton";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section>
        <div className="container py-80 flex justify-center items-center h-full">
          <div className="md:px-4 space-y-8 relative">
            <div className="flex justify-center items-center gap-4">
              <div className="rounded-full w-12 h-12">
                {isLoading ? (
                  <Skeleton className="w-12 h-12 rounded-full" />
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
              <h4 className="font-medium text-3xl text-center">Hello 👋</h4>
            </div>
            <h1 className="font-semibold text-6xl max-w-4xl text-center leading-relaxed">
              My Name Is{" "}
              <span
                id="trigger"
                className="text-red-500 cursor-pointer group relative"
              >
                [name]
                <div
                  id="tag"
                  className="absolute transition-all duration-300 opacity-0 text-base w-[600px] group-hover:opacity-100 flex flex-col items-center font-firaCode top-20 left-1/2 transform -translate-x-1/2"
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
            <p className="text-text text-sm mx-auto max-w-lg text-center leading-relaxed">
              Hello, my name is Aiman, and I'm a Software Engineer from
              Indonesia. I enjoy exploring new experiences in my life.
            </p>
            <div className="flex justify-center">
              <Link
                className="px-6 py-4 bg-neutral-800 rounded-xl text-sm font-medium"
                href={"#"}
              >
                Discover My Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container">
          <div className="md:px-4 mb-8 flex gap-4 items-center">
            <div
              className="w-0 h-0 
                  border-t-[10px] border-t-transparent
                  border-l-[15px] border-l-green-500
                  border-b-[10px] border-b-transparent"
            ></div>
            <h1 className="font-firaCode">
              <span className="text-blue-400">@Aimanyusuf/portfolio</span> cat
              aboutMe.txt
            </h1>
          </div>
          <div className="md:px-4 flex flex-wrap items-center">
            <div className="space-y-8 w-full md:w-1/2">
              <h1 className="font-medium text-5xl leading-relaxed max-w-md">
                Hello, I&apos;m Aiman Yusuf Wicaksono!
              </h1>
              <p className="text-xs md:text-sm leading-relaxed text-neutral-300 max-w-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&lsquo;s
              </p>
              <h3 className="font-medium font-firaCode">Connect With Me ⮧</h3>
              <div className="flex gap-4">
                <FaTiktok className="w-5 h-5" />
                <FaInstagram className="w-5 h-5" />
                <FaFacebook className="w-5 h-5" />
                <FaXTwitter className="w-5 h-5" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                className="mx-auto"
                alt="skills image"
                src={"/skills.svg"}
                height={320}
                width={320}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
