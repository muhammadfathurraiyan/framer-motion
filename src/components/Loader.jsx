import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animate1: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
        ease: "easeOut",
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animate2: {
    y: [0, -30],
    x: 0,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animate1", "animate2");
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="w-4 h-4 my-20 mx-auto rounded-full bg-cyan-500"
      ></motion.div>
      {/* <div onClick={() => cycleAnimation()}>Cycle Animation</div> */}
    </>
  );
};

export default Loader;
