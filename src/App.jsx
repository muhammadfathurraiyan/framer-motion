import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Topping from "./components/Topping";
import Order from "./components/Order";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";

const App = () => {
  const [mie, setMie] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setMie({ ...mie, base });
  };
  
  const addTopping = (topping) => {
    let newToppings;
    if (!mie.toppings.includes(topping)) {
      newToppings = [...mie.toppings, topping];
    } else {
      newToppings = mie.toppings.filter((item) => item !== topping);
    }
    setMie({ ...mie, toppings: newToppings });
  };

  const location = useLocation();

  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/framer-motion/" element={<Home />} />
          <Route path="/framer-motion/base" element={<Base addBase={addBase} mie={mie} />} />
          <Route
            path="/framer-motion/toppings"
            element={<Topping addTopping={addTopping} mie={mie} />}
          />
          <Route path="/framer-motion/order" element={<Order mie={mie} setShowModal={setShowModal} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
