"use client";

import Image from "next/image";
import NewsLetter from "@/components/newsletter";
import { motion } from "framer-motion";

const ChocolateResults = ({ chocolates }) => {
  const handleStartAgain = () => {
    window.location.reload();
  };

  return (
    <motion.div
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

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 1 }}
      >
        <div className="flex flex-wrap items-center justify-center gap-6">
          {chocolates.map((chocolate, index) => (
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
      </motion.div>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 2 }}
      >
        <div className="mt-8 text-center">
          <button
            className="cursor-pointer text-primary-light"
            onClick={handleStartAgain}
          >
            Start over again?
          </button>
        </div>

        <div className="mb-6 mt-8 md:mb-2">
          <NewsLetter chocolates={chocolates} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChocolateResults;
