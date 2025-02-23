import { portfolios } from "@/data/home";
import { slug } from "@/lib/stringConverter";
import React from "react";

const Portfolio = () => {
  return (
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
  );
};

export default Portfolio;
