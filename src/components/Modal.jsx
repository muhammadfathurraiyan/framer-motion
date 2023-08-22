import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const backdropVariants = {
  animate: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
};

const modalVariants = {
  inital: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    y: "200px",
    opacity: 1,
    // transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="initial"
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-[1]"
        >
          <motion.div
            variants={modalVariants}
            className="text-center bg-stone-100 max-w-md px-10 py-5 mx-auto rounded-xl"
          >
            <h2 className="text-xl text-stone-900">
              Ingin membuat pesanan lagi?
            </h2>
            <Link to="/">
              <button className="py-3 px-8 mt-8 rounded-full border-[2px] text-stone-900 border-black font-light cursor-pointer">
                Ok
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
