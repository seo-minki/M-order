import { easeIn, easeInOut, easeOut } from "framer-motion";

export const SlideUp = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" },
  transition: { ease: "easeIn", duration: 0.3 },
};

export const SlideLeftAndOpacity = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4 },
};
