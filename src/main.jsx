import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Base from "./components/Base";
import Topping from "./components/Topping";
import Order from "./components/Order";

const router = createBrowserRouter([{
  path: "/framer-motion/",
  element: <App />,
  children: [
    {
      path: "/framer-motion/",
      element: <Home />,
    },
    {
      path: "/framer-motion/base",
      element: <Base />,
    },
    {
      path: "/framer-motion/order",
      element: <Order />,
    },
    {
      path: "/framer-motion/toppings",
      element: <Topping />,
    },
  ],
}])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
