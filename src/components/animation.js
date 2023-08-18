import { easeInOut } from "framer-motion";

export const containerVariantsHome = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: easeInOut },
  },
};

export const containerVariants = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      // delay: 0.5,
      type: "spring",
      mass: 0.4,
      damping: 8,
      // agar animasi children dieksekusi setelah animasi container/parent/ini
      when: "beforeChildren",
      // setting selang waktu animasi children yg akan dieksekusi 1 persatu setelah parents
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: easeInOut },
  },
};

export const nextVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export const orderChilVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const buttonVariants = {
  whileHover: {
    scale: 1.1,
    textShadow: "0px 0px 8px 0px rgb(255,255,255)",
    color: "rgb(20,184,166)",
    boxShadow: "0px 0px 8px 0px rgb(20,184,166)",
    border: "2px solid rgb(20,184,166)",
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
