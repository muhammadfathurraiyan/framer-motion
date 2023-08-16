import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="max-w-[800px] m-[100px_auto_40px] text-center"
    >
      <h2 className="text-3xl mb-8">Welcome To Mie Aceh👋😀</h2>
      <Link to="/base">
        <motion.button
          animate={{}}
          className="py-3 px-8 mt-8 rounded-full border-[2px] font-light cursor-pointer opacity-70"
        >
          Pesan mie-mu🚀
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
