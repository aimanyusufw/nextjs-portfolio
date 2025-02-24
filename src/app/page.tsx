"use client";

import AboutMe from "@/components/sections/AboutMe";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import React, { useState } from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Portfolio />
      <FAQ />
    </>
  );
};

export default Home;
