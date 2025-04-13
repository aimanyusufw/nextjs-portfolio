"use client";

import { accordionItems } from "@/data/home";
import React, { useState } from "react";
import Accordion from "../ui/Acordion";

const FAQ = () => {
  const [accordionOpen, setAccordionOpen] = useState(0);

  const handleButton = (i: number) => {
    if (accordionOpen === i) return;
    setAccordionOpen(i);
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <h2 className="text-base/7 text-center font-semibold text-red-500 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="mb-10 max-w-lg mx-auto text-center text-balance capitalize text-4xl font-semibold tracking-tight sm:text-5xl">
          Learn how to grow be developers.
        </p>
        <div className="space-y-4  w-full md:w-1/2 mx-auto">
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
    </section>
  );
};

export default FAQ;
