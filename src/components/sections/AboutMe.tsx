import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <h2 className="text-base/7 font-semibold text-red-500">About Me</h2>
        <p className="mt-2 max-w-lg text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Hello, I&apos;m Aiman Yusuf Wicaksono!
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-neutral-900 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">
                  Educating & Inspiring Developers
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                  I share tech insights and tutorials to help developers grow.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <Image
                    width={100}
                    height={100}
                    className="size-full object-cover object-top"
                    src="img/tiktok.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-neutral-900 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">
                  Building Solutions, Earning Trust
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                  Delivering high-quality, scalable software for global clients
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  width={100}
                  height={100}
                  className="w-full max-lg:max-w-xs"
                  src="img/progres.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-neutral-900"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">
                  What Clients Say
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image
                  width={400}
                  height={100}
                  className="h-[min(152px,40cqw)] object-cover"
                  src="img/testimoni.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-neutral-900 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">
                  Mastering Modern Technologies
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                  I build scalable applications with cutting-edge tools.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-700 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-300">
                      <div className="border-b border-r border-b-white/40 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        <Image
                          width={100}
                          height={100}
                          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                          className="w-4 h-4 inline me-2"
                          alt=""
                        />
                        Language.js
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        <Image
                          width={100}
                          height={100}
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/768px-Go_Logo_Blue.svg.png"
                          className="w-6 h-3 inline me-2"
                          alt=""
                        />
                        Experience.go
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6"></div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
