"use client";

import { useState } from "react";
import choicesData from "@/data/choices-data.json";
import Image from "next/image";
import NewsLetter from "@/components/newsletter";
import { AnimatePresence, motion } from "framer-motion";

const ChoicesForm = () => {
  const [dataTree, setDataTree] = useState(choicesData?.root ?? []);
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleSelectOption = (option) => {
    const data = dataTree?.find((dataNode) => dataNode.name === option);

    setDataTree(data?.children ?? []);
    if (data.lastNode) {
      setReachedEnd(true);
    }
  };

  if (!dataTree || dataTree?.length < 1) {
    return <h6 className="text-3xl">Oops, something went wrong!</h6>;
  }

  if (reachedEnd) {
    return (
      <motion.div
        key={reachedEnd}
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="mb-2 text-center text-4xl">
          We have found your Perfect Chouquette!
        </h2>
        <div className="mb-10 flex items-center justify-center gap-1">
          <Image
            src="/assets/icons/discount.svg"
            alt="Submit"
            width={14}
            height={7}
            className="h-6 w-6"
          />
          <div>
            Your discount code is <strong>USSOB21</strong>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {dataTree.map((chocolate, index) => (
            <Image
              src={`/assets/images/chocolates/${chocolate?.image ?? "almond.png"}`}
              alt="Chocolate"
              width={200}
              height={200}
              key={index}
              className="h-32 w-32 md:h-52 md:w-52"
            />
          ))}
        </div>

        <div className="mb-6 mt-14 md:mb-2">
          <NewsLetter chocolates={dataTree} />
        </div>
      </motion.div>
    );
  }

  const options = dataTree.map((data) => data.name);
  return (
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <h2 className="mb-10 text-center text-4xl">
        Choose the perfect match for your chocolate cravings
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="wait" initial={false}>
          {options.map((option) => {
            const id = Math.floor(Math.random() * 1000);
            return (
              <motion.button
                key={id}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.25, delay: 0.1 }}
                onClick={() => handleSelectOption(option)}
                className="col-span-1 w-full rounded-full border-2 border-primary bg-light px-20 py-3 text-2xl font-medium outline-none transition-colors duration-200 ease-primary hover:bg-hover-on-light hover:text-light"
              >
                {option}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ChoicesForm;
