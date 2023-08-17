import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants, nextVariants, buttonVariants } from "../components/animation";

const Base = ({ addBase, mie }) => {
  const bases = ["Mie Kuning", "Indomie", "Mie Bihun"];
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      // tidak perlu properti transition karena sudah di includekan pada properti animate
      // alternative code seperti dibawah
      // initial={{ x: "100vw" }}
      // animate={{ x: 0 }}
      // transition={{ delay: 0.5, type: "spring" }}
      className="max-w-[300px] m-[100px_auto_40px]"
    >
      <h3 className="mb-3 pb-3 border-b border-b-[rgba(255,255,255,0.6)]">
        Step 1: Pilih Mie
      </h3>
      <ul>
        {bases.map((base) => (
          <motion.li
            whileHover={{
              scale: 1.5,
              originX: 0,
              color: "rgb(20,184,166)",
            }}
            transition={{ type: "spring", stiffness: 250 }}
            className="p-3 cursor-pointer"
            key={base}
            onClick={() => addBase(base)}
          >
            <span
              className={
                mie.base === base
                  ? "before:content-['>'] before:relative before:-top-[2px] before:mr-2 before:inline-block before:scale-[0.8,1]"
                  : ""
              }
            >
              {base}
            </span>
          </motion.li>
        ))}
      </ul>
      {mie.base && (
        <motion.div
          variants={nextVariants}
          // tidak perlu kode dibawah karena suda propagated dengan parent variant(syarat nya nama properti harus sama)
          // initial="initial"
          // animate="animate"
          // code lama
          // initial={{ x: "-100vw" }}
          // animate={{ x: 0 }}
          // transition={{ type: "spring", stiffness: 120 }}
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover="whileHover"
              className="py-2 px-7 m-[40px_auto_0] rounded-full border-[2px] font-light cursor-pointer opacity-70"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
