"use client";

import { accordionItems, socialMedia } from "@/data/home";
import Link from "next/link";
import React, { useState } from "react";
import Accordion from "../ui/Acordion";

const FAQ = () => {
  const [accordionOpen, setAccordionOpen] = useState(0);

  const handleButton = (i: number) => {
    if (accordionOpen === i) return;
    setAccordionOpen(i);
  };

  return (
    <section className="py-24">
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
                  <data.icon size={20} className="w-4 md:w-5" />
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
  );
};

export default FAQ;
