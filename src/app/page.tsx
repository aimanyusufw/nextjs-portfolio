import ArticleCard from "@/components/cards/ArticleCard";
import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import { articles } from "@/data/home";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <section className="bg-neutral-900 py-24 sm:py-32">
        <div className="container">
          <h2 className="text-center text-lg/8 font-semibold mb-2">
            Building with the Best Technologies
          </h2>
          <p className="text-center max-w-md mx-auto text-sm text-gray-300">
            A curated selection of tools and platforms I use to build efficient
            and scalable solutions
          </p>
          <div className="mx-auto mt-14 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="img/nextjs.svg"
              alt="Reform"
              width="158"
              height="48"
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="img/laravel.svg"
              alt="Transistor"
              width="158"
              height="48"
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="img/tailwind.svg"
              alt="Tuple"
              width="158"
              height="48"
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="img/react.svg"
              alt="SavvyCal"
              width="158"
              height="48"
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="img/stripe.svg"
              alt="Statamic"
              width="158"
              height="48"
            />
          </div>
        </div>
      </section>
      <Portfolio />
      <div className="py-24 sm:py-32">
        <div className="container">
          <h2 className="text-base/7 font-semibold text-red-500">
            From the blog
          </h2>
          <p className="mt-2 max-w-lg text-balance capitalize text-4xl font-semibold tracking-tight sm:text-5xl">
            Learn how to grow be developers.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((data, index) => (
              <ArticleCard data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
