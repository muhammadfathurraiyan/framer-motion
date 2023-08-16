import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, mie }) => {
  const bases = ["Mie Kuning", "Indomie", "Mie Bihun"];
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, type: "spring"}}
      className="max-w-[300px] m-[100px_auto_40px]"
    >
      <h3 className="mb-3 pb-3 border-b border-b-[rgba(255,255,255,0.6)]">
        Step 1: Pilih Mie
      </h3>
      <ul>
        {bases.map((base) => (
          <li
            className="p-3 cursor-pointer"
            key={base}
            onClick={() => addBase(base)}
          >
            <span
              className={
                mie.base === base
                  ? "font-bold before:content-['>'] before:relative before:-top-[2px] before:mr-2 before:inline-block before:scale-[0.8,1]"
                  : ""
              }
            >
              {base}
            </span>
          </li>
        ))}
      </ul>
      {mie.base && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Link to="/toppings">
            <button className="py-2 px-7 m-[40px_auto_0] rounded-full border-[2px] font-light cursor-pointer opacity-70">
              Next
            </button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
