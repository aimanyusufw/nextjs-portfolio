import { portfolios } from "@/data/home";
import { slug } from "@/lib/stringConverter";
import React from "react";

const Portfolio = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="md:px-4 mb-8 md:mb-12 space-y-4">
          <span className="bg-red-100 text-red-800 text-xs md:text-sm lg:text-base font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">
            Portfolio
          </span>
          <h1 className="font-medium text-lg md:text-2xl lg:text-4xl">
            Unveiling My Creations
          </h1>
          <p className="max-w-sm font-medium leading-relaxed text-xs md:text-sm text-neutral-300">
            Take a look at some of my best projects, crafted with creativity and
            precision. From stunning designs to innovative solutions, it’s all
            here!
          </p>
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
  );
};

export default Portfolio;
