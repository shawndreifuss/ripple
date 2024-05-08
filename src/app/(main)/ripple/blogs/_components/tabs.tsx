"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./featureTabItem";
import featuresTabData from "./featuresTabData";

import { motion } from "framer-motion";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative mt-24   pt-18.5 lg:pb-22.5">
        <div className="relative mx-auto max-w-c-1390 px-2 md:px-8 2xl:px-0">
          <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
            <Image
              fill
              className="dark:hidden"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
            <Image
              fill
              className="hidden dark:block"
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted Shape"
            />
          </div>

          {/* <!-- Tab Menues Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-15  flex justify-center gap-15 rounded-[10px] border border-stroke bg-white shadow-primary-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center "
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative flex w-10 cursor-pointer items-center  border-b border-stroke  px-2 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0  ${
                currentTab === "tabOne"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium border-l border-r px-10 h-10 text-black dark:text-white xl:text-[rem]">
                Ripple
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`relative flex  cursor-pointer items-center gap-4 border-b border-stroke  px-2 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0  ${
                currentTab === "tabTwo"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium border-l border-r px-10 h-10 text-black dark:text-white xl:text-regular">
                Ripple
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`relative flex w-10 cursor-pointer items-center gap-4 border-b border-stroke px-2 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 ${
                currentTab === "tabThree"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium border-l border-r px-10 h-10 text-black dark:text-white xl:text-regular">
                Ripple
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabFour")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-2 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 ${
                currentTab === "tabFour"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium border-l border-r px-10 h-10 text-black dark:text-white xl:text-[rem]">
                Ripple
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabFive")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-2 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 ${
                currentTab === "tabFive"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium border-l border-r px-10 h-10 text-black dark:text-white xl:text-[rem]">
                Ripple
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabSix")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-2 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 ${
                currentTab === "tabSix"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              
              <div className="w-auto">
                <button className="text-sm font-medium border-l border-r px-10 h-10 text-black dark:text-white xl:text-[rem]">
                Ripple
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabSeven")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-2 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 ${
                currentTab === "tabSeven"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              
              <div className="w-auto">
                <button className="text-sm font-medium border-l border-r px-10 h-10 text-black dark:text-white xl:text-[rem]">
                Ripple
                </button>
              </div>
            </div>
          </motion.div>
          {/* <!-- Tab Menues End --> */}

          {/* <!-- Tab Content Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154"
          >
            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </motion.div>
          {/* <!-- Tab Content End --> */}
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default Tabs;
