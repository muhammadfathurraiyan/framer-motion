import React from "react";
import { easeInOut, motion } from "framer-motion";

const svgVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      ease: easeInOut,
      duration: 3
    },
  },
};

const Header = () => {
  return (
    <header className="flex p-10 items-center">
      <div className="w-16">
        <motion.svg
          variants={svgVariant}
          initial="initial"
          animate="animate"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 261.66 248.79"
        >
          <motion.path
            variants={pathVariants}
            className="cls-1"
            d="m258.16,16.97v214.84c0,7.44-6.03,13.47-13.47,13.47h-12.71c-7.44,0-13.47-6.03-13.47-13.47V95.15c0-3.55-4.85-4.58-6.29-1.34l-63.91,113.48c-2.16,4.86-6.99,7.99-12.31,7.99h-10c-5.31,0-10.13-3.12-12.3-7.97L49.45,93.74c-1.45-3.24-6.29-2.2-6.29,1.34v136.73c0,7.44-6.03,13.47-13.47,13.47h-12.71c-7.44,0-13.47-6.03-13.47-13.47V16.97c0-7.44,6.03-13.47,13.47-13.47h20.59c5.31,0,10.13,3.12,12.3,7.97l78.31,124.92c1.16,2.59,4.85,2.59,6,0L212.16,11.49c2.17-4.86,6.99-7.99,12.31-7.99h20.23c7.44,0,13.47,6.03,13.47,13.47Z"
          />
        </motion.svg>
      </div>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="grow ml-10 text-xl"
      >
        <h1 className="border-b border-b-cyan-400/60 pb-3 text-cyan-400 [text-shadow:0px_0px_8rem_0px_rgb(20_184_166)]">
          Mie Aceh
        </h1>
      </motion.div>
    </header>
  );
};

export default Header;
