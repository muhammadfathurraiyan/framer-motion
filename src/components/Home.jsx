import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonVariants } from "./animation";
import { containerVariantsHome } from "./animation";

const Home = () => {
  return (
    <motion.div
      variants={containerVariantsHome}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-[800px] m-[100px_auto_40px] text-center"
    >
      <h2 className="text-3xl mb-8">Welcome To Mie Aceh👋😀</h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="whileHover"
          className="py-3 px-8 mt-8 rounded-full border-[2px] border-cyan-400 text-cyan-400 font-light cursor-pointer opacity-70"
        >
          Pesan mie-mu🚀
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
