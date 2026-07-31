import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";



import zwLogo from "../../assets/svg/zw.svg";

import girlVideo from "../../assets/videos/girl.mp4";
import dropsVideo from "../../assets/videos/drops.mp4";

import ZWRSvg from "../../assets/svg/ZWR.svg";
import reliefSvg from "../../assets/svg/relief.svg";


import rainDropIcon from "../../assets/svg/rainDrop.svg";
import rotateArrowIcon from "../../assets/svg/Roundarrow.svg";

const AboutSection = () => {
    
    const navigate = useNavigate();
    const words = ["unique", "smart"];

    const [currentWord, setCurrentWord] = useState(0);

    const [leftCursor, setLeftCursor] = useState({ x: 0, y: 0 });
const [rightCursor, setRightCursor] = useState({ x: 0, y: 0 });

const [showLeftCursor, setShowLeftCursor] = useState(false);
const [showRightCursor, setShowRightCursor] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative overflow-hidden bg-[#242424] px-8 py-36">

            <motion.img
                src={zwLogo}
                alt="ZW"
                className="
    absolute
    left-1/2
    top-120
    -translate-x-1/2
    -translate-y-1/2
    w-[2900px]
    h-[3000px]
    opacity-7
    brightness-0 invert
    pointer-events-none
    select-none
  "
            />

            <div className="relative z-10">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="
          max-w-[1200px]
          text-7xl
          font-black
          leading-[1]
          text-white
        "
                >
                    ZeroWind creates{" "}
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={words[currentWord]}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block text-[#D7E700]"
                        >
                            {words[currentWord]}
                        </motion.span>
                    </AnimatePresence>
                    <br />
                    fabrics
                </motion.h2>

                
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .25, duration: .8 }}
                    className="mt-24 ml-20 max-w-[650px]"
                >
                    <p className="text-3xl font-medium leading-[1.4] text-white">
                        Passion for outdoor activities and pursuit of technicality
                        make ZeroWind the ideal brand for creating performance
                        fabrics for a wide range of uses.
                    </p>

                    <div className="mt-20 flex gap-16 text-xl leading-9 text-white/45">
                        <p className="w-full md:w-[380px]">
                            From the beginning, ZeroWind has developed much of the
                            fabric range using dynamic breathability membranes,
                            premium softshell technologies and innovative textile
                            solutions designed for demanding environments.
                        </p>

                        <p className="w-full md:w-[380px]">
                            innovative materials to create unique garments for cycling,
                            outdoor, running and urban sectors. Laboratory tests and
                            practical trials ensure the best experience of use and
                            usage by the end consumer.
                        </p>
                    </div>
                </motion.div>

            </div>

            <button
                className="
        relative
        overflow-hidden
        px-10 py-4
        top-10
        left-10
        border border-yellow-400
        text-yellow-400
        bg-transparent
        rounded-full
        transition-colors
        duration-300
        group
    "
            >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    Contact Us
                </span>

                <span
                    className="
            absolute
            inset-0
            bg-yellow-400
            -translate-x-full
            group-hover:translate-x-0
            transition-transform
            duration-500
            ease-out
        "
                ></span>
            </button>
            <div className="mt-24 flex gap-10">

               
               <div className="mt-24 flex gap-10">

    
    <div onClick={() => navigate("/ZWR")} 
        className="relative flex-1 overflow-hidden rounded-[32px] group"
        onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            setLeftCursor({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }}
        onMouseEnter={() => setShowLeftCursor(true)}
        onMouseLeave={() => setShowLeftCursor(false)}
    >
        <video
            src={dropsVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-[70px] overflow-hidden z-20">
    <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 0.8,
                ease: "linear",
            },
        }}
    >
        <div className="flex items-center shrink-0">
            <p className="text-white uppercase tracking-[8px] text-sm mr-6">
                FEATURE.
            </p>
        </div>

       
        <div className="flex items-center shrink-0">
            <p className="text-white uppercase tracking-[8px] text-sm mr-3">
                FEATURE.
            </p>
        </div> 
    </motion.div>
</div>

       
        {showLeftCursor && (
            <motion.div
                animate={{
                    x: leftCursor.x - 28,
                    y: leftCursor.y - 28,
                    scale: 1,
                    opacity: 1,
                }}
                initial={{ scale: 0, opacity: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                }}
                className="absolute top-0 left-0 z-30 pointer-events-none"
            >
                {/* ---------------------------------------------------------------------------------------- */}
                <div className="w-14 h-14 rounded-2xl bg-[#D7E700] flex items-center justify-center shadow-xl">
                    <Plus className="w-6 h-6 text-black" />
                </div>
            </motion.div>
        )}

        
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <img
                src={ZWRSvg}
                alt="ZWR"
                className="w-44"
            />

            <img
                src={rainDropIcon}
                alt="Rain Drop"
                className="w-20 mt-10 mb-5 brightness-0 invert"
            />
        </div>
    </div>

   
    <div  onClick={() => navigate("/ZWR#relife")}
        className="relative flex-1 overflow-hidden rounded-[32px] group"
        onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            setRightCursor({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }}
        onMouseEnter={() => setShowRightCursor(true)}
        onMouseLeave={() => setShowRightCursor(false)}
    >
        <video
            src={girlVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-[70px] overflow-hidden z-20">
    <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 0.8,
                ease: "linear",
            },
        }}
    >
        <div className="flex items-center shrink-0">
            <p className="text-white uppercase tracking-[8px] text-sm mr-6">
                FEATURE.
            </p>
        </div>

       
        <div className="flex items-center shrink-0">
            <p className="text-white uppercase tracking-[8px] text-sm mr-3">
                FEATURE.
            </p>
        </div> 
    </motion.div>
</div>

        
        {showRightCursor && (
            <motion.div
                animate={{
                    x: rightCursor.x - 28,
                    y: rightCursor.y - 28,
                    scale: 1,
                    opacity: 1,
                }}
                initial={{ scale: 0, opacity: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                }}
                className="absolute top-0 left-0 z-30 pointer-events-none"
            >
                <div className="w-14 h-14 rounded-2xl bg-[#D7E700] flex items-center justify-center shadow-xl">
                    <Plus className="w-6 h-6 text-black" />
                </div>
            </motion.div>
        )}

       
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <img
                src={reliefSvg}
                alt="Relief"
                className="w-48"
            />

            <img
                src={rotateArrowIcon}
                alt="Rotate Arrow"
                className="w-20 mt-10 mb-5 animate-spin"
            />
        </div>
    </div>

</div>

            </div>

        </section>
    );
};

export default AboutSection;