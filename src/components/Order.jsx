import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, orderChilVariants } from "./animation";

const Order = ({ mie, setShowModal }) => {
  // const [toggle, setToggle] = useState(true);
  // setTimeout(() => {
  //   setToggle(false);
  // }, 4000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [setShowModal]);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-[800px] m-[100px_auto_40px] text-center"
    >
      {/* <AnimatePresence> */}
      {/* {toggle && ( */}
      <motion.h2 className="text-xl">Terimakasih atas pesananya😊</motion.h2>
      {/* )} */}
      {/* </AnimatePresence> */}
      <motion.p variants={orderChilVariants} className="my-5 mx-auto">
        Pesanan kamu adalah {mie.base} dengan toping:
      </motion.p>
      <motion.div variants={orderChilVariants}>
        {mie.toppings.map((topping) => (
          <p key={topping}>{topping}</p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
