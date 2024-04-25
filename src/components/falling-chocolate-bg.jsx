"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const FallingChocolateBg = () => {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="relative h-64"
    >
      <Image
        src="/assets/images/background/falling-chocolate-desktop.svg"
        alt=""
        width={1440}
        height={292}
        className="hidden h-full w-full lg:block"
      />
      <Image
        src="/assets/images/background/falling-chocolate-mobile.svg"
        alt=""
        width={390}
        height={157}
        className="h-full w-full lg:hidden"
      />
    </motion.div>
  );
};

export default FallingChocolateBg;
