import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Topping from "./components/Topping";
import Order from "./components/Order";
import { AnimatePresence } from "framer-motion";

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
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/base" element={<Base addBase={addBase} mie={mie} />} />
          <Route
            path="/toppings"
            element={<Topping addTopping={addTopping} mie={mie} />}
          />
          <Route path="/order" element={<Order mie={mie} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
