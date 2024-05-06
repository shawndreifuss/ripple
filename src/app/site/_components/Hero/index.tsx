"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
                Build Manage Grow
              </h4>
              <h1 className="mb-32 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Empower Your Agency <br />
                <div className="absolute mt-7 flex space-around align-center ">
                  <span>with</span>{" "}
                  <span className="text-[6rem] ml-7 text-primary">Ripple.</span>
                </div>
              </h1>
              <div>
                <span className="font-bolder  uppercase text-primary ">
                  Supercharge {""}
                </span>
                {"\u00A0"}
                {"\u00A0"}Your SaaS with Built-in Integrations: Auth, Database,
                Blog & More - Next-Gen Tech Stack for
                Seamless SaaS Development: Next.js 13, React 18, TypeScript -
                This rephrase emphasizes the modern technologies used in Solid
                Pro.
              </div>

              <div className="mt-10">
                  <div className="flex flex-wrap gap-5">
                    <Link href={"/agency"}
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </Link>
                    <Link href={"/contact-us"}
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Contact Us
                    </Link>
                  </div>
                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div>
            </div>
            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
