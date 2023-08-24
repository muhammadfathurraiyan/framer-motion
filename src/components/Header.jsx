import React from "react";
import { motion } from "framer-motion";

const svgVariant = {
  initial: {
    rotate: -180,
  },
  animate: {
    rotate: 0,
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
      ease: "easeInOut",
      duration: 2,
    },
  },
};

const Header = () => {
  return (
    <header className="flex p-10 items-center">
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.7}
        className="w-16"
      >
        <motion.svg
          variants={svgVariant}
          initial="initial"
          animate="animate"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="cls-1"
        >
          <motion.path
            variants={pathVariants}
            d="M11.4141,15l-8-8L2,8.4141,8.5859,15H2v1a14,14,0,0,0,28,0V15ZM16,28A12.0166,12.0166,0,0,1,4.0415,17h23.917A12.0166,12.0166,0,0,1,16,28Z"
          />
          <motion.path
            variants={pathVariants}
            d="M22,8a5.0049,5.0049,0,0,0-1.5708.2554A8.0242,8.0242,0,0,0,14,5,7.9364,7.9364,0,0,0,9.0938,6.68L4.4141,2,3,3.4141,9.05,9.4648l.707-.7075A5.96,5.96,0,0,1,14,7a6.02,6.02,0,0,1,4.6875,2.2642,5.06,5.06,0,0,0-.59.61A2.9892,2.9892,0,0,1,15.7544,11H12v2h3.7544a4.98,4.98,0,0,0,3.9033-1.8745A3,3,0,0,1,25,13h2A5.0059,5.0059,0,0,0,23,8Z"
          />
        </motion.svg>
      </motion.div>
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
