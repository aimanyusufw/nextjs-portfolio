import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <section>
      <div className="container min-h-screen flex justify-center items-center h-full">
        <div className="md:px-4 space-y-5 relative">
          <h4 className="font-medium text-3xl text-center">Hello 👋</h4>
          <h1 className="font-semibold text-7xl max-w-5xl text-center leading-relaxed">
            My Name Is{" "}
            <span
              id="trigger"
              className="text-red-500 cursor-pointer group relative"
            >
              ${"{name}"}
              <div
                id="tag"
                className="absolute transition-all duration-200 opacity-0 text-base w-[800px] group-hover:opacity-100 flex flex-col items-center font-firaCode top-20 left-1/2 transform -translate-x-1/2"
              >
                <div
                  className="w-0 h-0 
            border-l-[20px] border-l-transparent
            border-b-[25px] border-b-red-500
            border-r-[20px] border-r-transparent"
                ></div>
                <h1 className="bg-red-500 px-2 py-1.5 text-white font-medium">
                  System Override: Only &lsquo;Aiman Yusuf Wicaksono&rsquo; is
                  valid.
                </h1>
              </div>
            </span>{" "}
            and I&apos;m A Software Engineer;
          </h1>
          <Image
            src="/profile.svg"
            alt="Aiman Yusuf Wicaksono"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
