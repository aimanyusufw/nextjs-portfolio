import ArticleCard from "@/components/cards/ArticleCard";
import AboutMe from "@/components/sections/AboutMe";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Techs from "@/components/sections/Techs";
import { articles } from "@/data/home";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Techs />
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
      <FAQ />
    </>
  );
};

export default Home;
