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
        <h1 className="border-b border-b-cyan-400/60 pb-3 text-cyan-400 [text-shadow:0px_0px_8rem_0px_rgb(20_184_166)]">
          Mie Aceh
        </h1>
      </motion.div>
    </header>
  );
};

export default Header;
