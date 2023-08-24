import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants, buttonVariants } from "./animation";

const Topping = ({ addTopping, mie }) => {
  const toppings = [
    "Telur🥚",
    "Kepiting🦀",
    "Udang🍤",
    "Cumi-cumi🦑",
    "Daging🥩",
  ];
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-[300px] m-[100px_auto_40px]"
    >
      <h3 className="mb-3 pb-3 border-b border-b-cyan-400/60">
      <span className="text-cyan-400 font-semibold">Step 2</span> : Pilih Topping
      </h3>
      <ul>
        {toppings.map((topping) => (
          <motion.li
            whileHover={{
              scale: 1.5,
              originX: 0,
              color: "rgb(34 211 238)",
            }}
            transition={{ type: "spring", stiffness: 250 }}
            className="p-3 cursor-pointer"
            key={topping}
            onClick={() => addTopping(topping)}
          >
            <span
              className={
                mie.toppings.includes(topping)
                  ? "before:content-['>'] before:relative before:-top-[2px] before:mr-2 before:inline-block before:scale-[0.8,1]"
                  : ""
              }
            >
              {topping}
            </span>
          </motion.li>
        ))}
      </ul>
      <Link to="/framer-motion/order">
        <motion.button
          variants={buttonVariants}
          whileHover="whileHover"
          className="py-2 px-7 m-[40px_auto_0] rounded-full border-[2px] border-cyan-400 text-cyan-400 font-light cursor-pointer opacity-70"
        >
          Pesan
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Topping;
