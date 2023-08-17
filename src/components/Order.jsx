import React from "react";
import { motion } from "framer-motion";
import { containerVariants, orderChilVariants } from "./animation";

const Order = ({ mie }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="max-w-[800px] m-[100px_auto_40px] text-center"
    >
      <h2 className="text-xl">Terimakasih atas pesananya😊</h2>
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
