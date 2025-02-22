"use client";

import Hero from "@/components/sections/Hero";
import Accordion from "@/components/ui/Acordion";
import { Skeleton } from "@/components/ui/Skeleton";
import {
  accordionItems,
  careerEducation,
  portfolios,
  socialMedia,
} from "@/data/home";
import { slug } from "@/lib/stringConverter";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Home = () => {
  const [accordionOpen, setAccordionOpen] = useState(0);

  const handleButton = (i: number) => {
    if (accordionOpen === i) return;
    setAccordionOpen(i);
  };

  return (
    <>
      <Hero />
      <section className="py-20">
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
      <section className="py-20">
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
      </section>
      <section className="py-20">
        <div className="container py-12">
          <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="space-y-6 md:space-y-8 mb-10 md:mb-0">
              <h1 className="font-medium capitalize text-4xl md:text-5xl md:leading-relaxed max-w-sm md:max-w-md">
                frequently asked questions{" "}
              </h1>
              <h3 className="font-medium font-firaCode">My Social Media ⮧</h3>
              <div className="flex gap-4">
                {socialMedia.map((data) => (
                  <Link href={data.url} key={data.name} target="_blank">
                    <data.icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {accordionItems.map((data, index) => (
                <Accordion
                  data={data}
                  isOpen={accordionOpen === index}
                  setIsOpen={handleButton}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
