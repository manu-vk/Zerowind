import { motion } from "framer-motion";

function PageTransition() {
  return (
    <motion.div
      className="fixed top-0 left-0 h-screen w-[2900px] bg-[#D7E700] z-[9999] pointer-events-none"
      initial={{ x: "-100%" }}
      animate={{ x: "120vw" }}
      transition={{
        duration: 1.2,
        ease: "linear"
        // ease: [0.76, 0, 0.24, 1],
      }}
    />
  );
}

export default PageTransition;