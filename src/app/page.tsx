"use client";

import { Skeleton } from "@/components/ui/Skeleton";
import { careerEducation, portfolios, socialMedia } from "@/data/home";
import { slug } from "@/lib/stringConverter";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
      <section className="py-14">
        <div className="container">
          <div className="md:px-4 mb-8 flex gap-4 items-center">
            <div
              className="w-0 h-0 
                  border-t-[5px] md:border-t-[10px] border-t-transparent
                  border-l-[10px] md:border-l-[15px] border-l-green-500
                  border-b-[5px] md:border-b-[10px] border-b-transparent"
            ></div>
            <h1 className="font-firaCode text-xs md:text-base">
              <span className="text-blue-400">@Aimanyusuf/portfolio</span> cat
              aboutMe.txt
            </h1>
          </div>
          <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="space-y-6 md:space-y-8 mb-10 md:mb-0">
              <h1 className="font-medium text-4xl md:text-5xl leading-relaxed max-w-sm md:max-w-md">
                Hello, I&apos;m Aiman Yusuf Wicaksono!
              </h1>
              <p className="text-xs md:text-sm leading-relaxed text-neutral-300 max-w-sm">
                Hello, my name is Aiman, and I&lsquo;m a Software Engineer from
                Indonesia. I enjoy exploring new experiences in my life.
              </p>
              <h3 className="font-medium font-firaCode">Connect With Me ⮧</h3>
              <div className="flex gap-4">
                {socialMedia.map((data) => (
                  <Link href={data.url} key={data.name} target="_blank">
                    <data.icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-lg md:text-xl">Career & Education</h1>
              {careerEducation.map((data, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <Link href={data.link} target="_blank">
                    <div className="flex justify-center items-center p-2 rounded-full bg-white w-14 h-14 md:w-16 md:h-16">
                      <Image
                        src={data.image}
                        width={70}
                        height={70}
                        alt={data.title}
                      />
                    </div>
                  </Link>
                  <div className="">
                    <h1 className="text-base md:text-lg">{data.title}</h1>
                    <span className="text-xs md:text-sm text-opacity-60">
                      {data.role}, {data.from} -{" "}
                      {data.until == "Now" ? (
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          {data.until}
                        </span>
                      ) : (
                        data.until
                      )}
                    </span>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      </section>
      <div className="py-14">
        <div className="container">
          <div className="md:px-4 mb-8 md:mb-12 flex gap-4 items-center">
            <div
              className="w-0 h-0 
                  border-t-[5px] md:border-t-[10px] border-t-transparent
                  border-l-[10px] md:border-l-[15px] border-l-green-500
                  border-b-[5px] md:border-b-[10px] border-b-transparent"
            ></div>
            <h1 className="font-firaCode text-xs md:text-base">
              <span className="text-blue-400">@Aimanyusuf/portfolio</span> cat
              myWork.txt
            </h1>
          </div>
          <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            {portfolios.map((data, index) => (
              <div key={index}>
                <a className="mb-6" href={"portfolio/" + slug(data.title)}>
                  <video
                    className="pointer-events-none mx-auto md:h-96 w-full object-cover object-top rounded-md"
                    src={data.image}
                    autoPlay
                    loop
                  ></video>
                </a>
                <h1 className="text-base md:text-lg font-medium my-4">
                  {data.title}
                </h1>
                <div className="flex mb-4">
                  {data.tag.map((data) => (
                    <span
                      key={data}
                      className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300"
                    >
                      {data}
                    </span>
                  ))}
                </div>
                <p className="text-xs md:text-sm leading-relaxed font-medium text-neutral-300">
                  {data.excrept}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
