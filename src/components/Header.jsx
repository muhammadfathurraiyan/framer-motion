import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <header className="flex p-10 items-center">
      <div className="">Logo</div>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="grow ml-10 text-xl"
      >
        <h1 className="border-b border-b-[rgba(255,255,255,0.6)] pb-3">
          Mie Aceh
        </h1>
      </motion.div>
    </header>
  );
};

export default Header;
