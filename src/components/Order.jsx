import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, orderChilVariants } from "./animation";

const Order = ({ mie }) => {
  const [toggle, setToggle] = useState(true);
  setTimeout(() => {
    setToggle(false);
  }, 4000);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="max-w-[800px] m-[100px_auto_40px] text-center"
    >
      <AnimatePresence>
        {toggle && (
          <motion.h2 exit={{ y: "-100vh" }} className="text-xl">
            Terimakasih atas pesananya😊
          </motion.h2>
        )}
      </AnimatePresence>
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
