"use client";

import { useState } from "react";
import choicesData from "@/data/choices-data.json";
import ChocolateResults from "@/components/chocolate-results";
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
    return <ChocolateResults chocolates={dataTree} />;
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
                className="col-span-1 w-full rounded-full border-2 border-primary bg-light px-20 py-3 text-2xl font-medium outline-none transition-colors duration-200 ease-primary lg:hover:bg-hover-on-light lg:hover:text-light"
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
