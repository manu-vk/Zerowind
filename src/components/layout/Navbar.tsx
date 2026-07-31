import { Menu, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";


import fitImg from "../../assets/images/fit.jpg";
import motionImg from "../../assets/images/motion.jpg";
import powerImg from "../../assets/images/power.jpg";
import braveImg from "../../assets/images/brave.jpg";
import vaporaImg from "../../assets/images/vapora.jpg";

import zwLogo from "../../assets/svg/zw.svg";
import zerowindLogo from "../../assets/svg/zerowind.svg";
import fitLogo from "../../assets/svg/fit.svg";
import motionLogo from "../../assets/svg/motion.svg";
import powerLogo from "../../assets/svg/power.svg";
import braveLogo from "../../assets/svg/brave.svg";
import vaporaLogo from "../../assets/svg/vapora.svg";
import zwrIcon from "../../assets/svg/rainDrop.svg";
import zwrLogo from "../../assets/svg/ZWR.svg";
import relifeIcon from "../../assets/svg/Roundarrow.svg";
import relifeLogo from "../../assets/svg/relief.svg";


const logoVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.03,
  },
};


const Navbar = () => {
  const [showTech, setShowTech] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showMenu, setShowMenu] = useState(false);


  const location = useLocation();

  const navigate = useNavigate();

  return (
    <>
      {location.pathname === "/" && (
        <header className="bg-[#242424] w-full h-[100px]" />
      )};
      <div className="relative z-50">
        <div className="relative  ">

          
          <motion.div
            variants={logoVariants}
            initial="rest"
            whileHover="hover"
            transition={{ duration: 0.2, ease: "easeOut" }} onClick={() => navigate("/")}
            className="  fixed
    top-0
    left-0
    z-50
    flex
    h-[100px]
    w-[200px]
    rounded-br-[35px]
    bg-[#242424]
    cursor-pointer
    overflow-hidden "
          >
            <motion.img
              src={zwLogo}
              alt="ZW"
              variants={{
                rest: {
                  x: 0,
                  opacity: 1,
                },
                hover: {
                  x: -28,
                  opacity: 0,
                },
              }}
              transition={{
                duration: 0.28,
                ease: "easeInOut",
              }}

              className="absolute  mt-10 pl-5 left-0 top-0 h-8"
            />

            <motion.div
              variants={{
                rest: {
                  width: 0,
                },
                hover: {
                  width: 177,
                },
              }}
              transition={{
                duration: 0.45,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute left-0 top-0 overflow-hidden"
            >
              <motion.img
                src={zerowindLogo}
                alt="ZeroWind"
                variants={{
                  rest: {
                    x: 34,
                    opacity: 0,
                  },
                  hover: {
                    x: 0,
                    opacity: 1,
                    width: 300,

                  },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="pl-6  h-15 mt-5 w-300"
              />
            </motion.div>
          </motion.div>


         
          <div className=" fixed
    top-0
    right-0
    z-50
    flex
    items-center
    px-10
    h-[100px]
    rounded-bl-[35px]
    bg-[#242424]  ">

            
            <nav className="hidden lg:flex items-center gap-8">

              <motion.div
                className="relative"
                onHoverStart={() => setShowTech(true)}
                onHoverEnd={() => setShowTech(false)}
              >
                <button className="group flex items-center gap-2 text-[17px] font-medium uppercase tracking-wide text-[#D7E700] transition-all duration-300 hover:text-white">
                  <span>Technologies</span>

                  <Plus
                    size={15}
                    strokeWidth={2.5}
                    className={`transition-transform duration-300 ${showTech ? "rotate-90" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {showTech && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -25,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -25,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      className="absolute left-[-50px] top-full mt-6 w-[450px] rounded-xl border border-[#3b3b3b] bg-[#2A2A2A] p-6 shadow-2xl z-50"
                    >
                      <div className="grid grid-cols-2 gap-4">

                        <div onClick={() => navigate("/fit")} className=" group relative overflow-hidden rounded-xl cursor-pointer">
                          <img
                            src={fitImg}
                            alt="Fit"
                            className="h-36 w-full object-cover transition duration-500 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[#D7E700]/75 mix-blend-multiply opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <img
                              src={fitLogo}
                              alt="Fit Logo"
                              className="w-18 transition-all duration-300 group-hover:scale-100"
                            />
                          </div>
                        </div>

                        <div onClick={() => navigate("/motion")} className=" group relative overflow-hidden rounded-xl cursor-pointer">
                          <img
                            src={motionImg}
                            alt="Motion"
                            className="h-36 w-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[#D7E700]/75 mix-blend-multiply opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <img
                              src={motionLogo}
                              alt="Motion Logo"
                              className="w-28 transition-all duration-300 group-hover:scale-100"
                            />
                          </div>
                        </div>

                        <div onClick={() => navigate("/power")} className=" group relative overflow-hidden rounded-xl cursor-pointer">
                          <img
                            src={powerImg}
                            alt="Power"
                            className="h-36 w-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[#D7E700]/75 mix-blend-multiply opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <img
                              src={powerLogo}
                              alt="Power Logo"
                              className="w-28 transition-all duration-300 group-hover:scale-100"
                            />
                          </div>
                        </div>

                        <div onClick={() => navigate("/brave")} className=" group relative overflow-hidden rounded-xl cursor-pointer">
                          <img
                            src={braveImg}
                            alt="Brave"
                            className="h-36 w-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[#D7E700]/75 mix-blend-multiply opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <img
                              src={braveLogo}
                              alt="Brave Logo"
                              className="w-28 transition-all duration-300 group-hover:scale-100"
                            />
                          </div>
                        </div>

                        <div onClick={() => navigate("/Vapora")} className="group relative col-span-2 overflow-hidden rounded-xl cursor-pointer">
                          <img
                            src={vaporaImg}
                            alt="Vapora"
                            className="h-44 w-full object-cover transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-[#D7E700]/75 mix-blend-multiply opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <img
                              src={vaporaLogo}
                              alt="Vapora Logo"
                              className="w-28 transition-all duration-300 group-hover:scale-100"
                            />
                          </div>
                        </div>


                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="relative"
                onHoverStart={() => setShowFeatures(true)}
                onHoverEnd={() => setShowFeatures(false)}
              >
                <button className="group flex items-center gap-2 text-[17px] font-medium uppercase tracking-wide text-[#D7E700] transition-all duration-300 hover:text-white">
                  <span>Features</span>

                  <Plus
                    size={15}
                    strokeWidth={2.5}
                    className={`transition-transform duration-300 ${showFeatures ? "rotate-90" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {showFeatures && (
                    <motion.div
                      initial={{ opacity: 0, y: -25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -25 }}
                      transition={{ duration: 0.35 }}
                      className="absolute left-1/2 top-full -translate-x-[60%] -ml-[30px] mt-6 w-[520px] rounded-xl bg-[#242424] p-4 shadow-2xl z-50"
                    >
                      <div className="space-y-5">

                       
                        <div className="group cursor-pointer rounded-xl border border-[#666] p-10 transition-all duration-300 hover:border-[#D7E700]">

                          <motion.div
                            className="flex items-center gap-5"
                            initial="rest"
                            whileHover="hover"
                            onClick={() => navigate("/zwr")}

                          >
                            <motion.img
                              src={zwrIcon}
                              alt="ZWR Icon"
                              className="w-14 brightness-0 invert"
                              variants={{
                                rest: { y: 0 },
                                hover: {
                                  y: [0, -8, 0],
                                  transition: {
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  },
                                },
                              }}
                            />

                            <div>
                              <img
                                src={zwrLogo}
                                alt="ZWR"
                                className="w-52"
                              />

                              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white">
                                Water Repellent Treatment
                              </p>
                            </div>
                          </motion.div>

                        </div>

                        <motion.div
                          initial="rest"
                          whileHover="hover"
                          className="group cursor-pointer rounded-xl border border-[#666] p-6 transition-all duration-300 hover:border-[#D7E700]"
                        >
                          <div onClick={() => navigate("/zwr#relife")}
                            className="flex items-center gap-6">

                            <motion.img
                              src={relifeIcon}
                              alt="Relife Icon"
                              className="w-14"
                              variants={{
                                rest: { rotate: 0 },
                                hover: { rotate: 360 },
                              }}
                              transition={{
                                duration: 1.8,
                                ease: "linear",
                                repeat: Infinity,

                              }}
                            />

                            <div>
                              <img
                                src={relifeLogo}
                                alt="Relife"
                                className="w-56"
                              />

                              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white">
                                Eco-Friendly Solutions
                              </p>
                            </div>

                          </div>
                        </motion.div>

                        <p className="pt-3 text-center text-xs uppercase tracking-[3px] text-gray-400">
                          Select one of our features and discover its technical characteristics
                        </p>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

            </nav>

            
            <div
              className="relative ml-12"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <button
                className="text-[#D7E700] transition-all duration-300 hover:text-white"
              >
                <motion.div
                  animate={{
                    rotate: showMenu ? 90 : 0,
                    scale: showMenu ? 1.1 : 1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <Menu size={30} strokeWidth={2.2} />
                </motion.div>
              </button>

              <AnimatePresence>
                {showMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.35 }}
                    className="absolute right-0 top-full mt-6 w-[420px] rounded-xl bg-[#242424] p-10 shadow-2xl z-50"
                  >
                    <nav className="flex flex-col items-end gap-8 text-right">

                      <a
                        onClick={() => navigate("/")}
                        className="cursor-pointer text-4xl font-black uppercase tracking-wide text-white transition-all duration-300 hover:text-[#D7E700]"
                      >
                        HOME
                      </a>

                      <a
                        onClick={() => navigate("/News")}
                        className="cursor-pointer text-4xl font-black uppercase tracking-wide text-white transition-all duration-300 hover:text-[#D7E700]"
                      >
                        NEWS
                      </a>

                      <a
                        onClick={() => navigate("/contact")}
                        className="cursor-pointer text-4xl font-black uppercase tracking-wide text-white transition-all duration-300 hover:text-[#D7E700]"
                      >
                        CONTACT
                      </a>

                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;