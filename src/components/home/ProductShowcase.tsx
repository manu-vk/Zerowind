import { useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";


import shirt from "../../assets/images/shirt1.png";
import shirt2 from "../../assets/images/shirt2.png";
import shirt3 from "../../assets/images/shirt3.png";
import shirt4 from "../../assets/images/shirt4.png";
import shirt5 from "../../assets/images/shirt5.png";
import shirt6 from "../../assets/images/shirt6.png";

import fitSvg from "../../assets/svg/fit.svg";
import ZWRSvg from "../../assets/svg/ZWR.svg";
import powerSvg from "../../assets/svg/power.svg";
import braveSvg from "../../assets/svg/brave.svg";
import motionSvg from "../../assets/svg/motion.svg";


function ProductShowcase() {
    const [cursor, setCursor] = useState({
        x: 0,
        y: 0,
    });
    const products = [
        {
            name: "BERGAMO",
            image: shirt,
            technology: braveSvg,
        },
        {
            name: "ARSENEL",
            image: shirt2,
            technology: motionSvg,
        },
        {
            name: "Eleprint",
            image: shirt3,
            technology: fitSvg,
        },
        {
            name: "Grand prix",
            image: shirt4,
            technology: powerSvg,
        },
        {
            name: "Tempest",
            image: shirt5,
            technology: braveSvg,
        },
        {
            name: "SKIN",
            image: shirt6,
            technology: motionSvg,
        },

    ];


    const [selectedProduct, setSelectedProduct] = useState(0);
    const [showCursor, setShowCursor] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setCursor({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section
            className="relative h-screen bg-[#232323] overflow-hidden flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
        >
           
            {showCursor && (
                <motion.div
                    animate={{
                        x: cursor.x - 30,
                        y: cursor.y - 30,
                        scale: 1,
                        opacity: 1,
                    }}
                    initial={{
                        scale: 0,
                        opacity: 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                    }}
                    className="absolute top-0 left-0 z-50 pointer-events-none"
                >
                    <div className="w-16 h-16 rounded-2xl bg-[#D7E700] flex items-center justify-center shadow-2xl">
                        <Plus className="w-7 h-7 text-black" />
                    </div>
                </motion.div>
            )}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{
                            x: -400,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        exit={{
                            x: -400,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute left-10 top-1/2 -translate-y-1/2 z-30 max-w-[460px] min-h-[300px] bg-black p-5 rounded-[5%] "
                    >
                        <h2 className="text-2xl text-white font-medium mt-5 mb-12">
                            {products[selectedProduct].name}
                        </h2>

                        <div className="flex gap-20 mb-12 ">
                            <div>
                                <p className="text-xs uppercase tracking-[3px] text-white/50 mb-5">
                                    TECHNOLOGY
                                </p>

                                <img
                                    src={products[selectedProduct].technology}
                                    alt="Technology"
                                    className="w-25"
                                />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[3px] text-white/50 mb-5">
                                    FEATURE
                                </p>

                                <img
                                    src={ZWRSvg}
                                    alt="ZWR"
                                    className="w-28"
                                />
                            </div>
                        </div>

                        <p className="text-white/70 text-[20px] leading-9">
                            Custom product exclusively for customer. Light shield
                            fabric for mid-season. Very breathable and with
                            absolute wind protection. Resistant to abrasion.
                            Extremely stretchy, perfect for making slim fit
                            garments.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

           
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-[400px] overflow-hidden z-20">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 1,
                            ease: "linear",
                        },
                    }}
                >
                    <div className="flex items-center shrink-0">
                        <p className="text-white uppercase tracking-[8px] text-sm mr-6">
                            DISCOVER OUR PRODUCTS •
                        </p>
                    </div>

                    <div className="flex items-center shrink-0">
                        <p className="text-white uppercase tracking-[8px] text-sm mr-3">
                            DISCOVER OUR PRODUCTS •
                        </p>
                    </div>
                </motion.div>
            </div>

            
            <motion.h1
                animate={{
                    scale: isHovered ? 1.03 : 1,
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                }}
                style={{
                    WebkitTextStroke: isHovered
                        ? "2px #D7E700"
                        : "2px rgba(255,255,255,0.12)",
                    color: isHovered ? "#D7E700" : "transparent",
                }}
                className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        text-[220px]
        font-extrabold
        leading-none
        select-none
        pointer-events-none
    "
            >
                {products[selectedProduct].name}
            </motion.h1>

           
            <motion.img
                src={products[selectedProduct].image}
                alt="Arsenal Shirt"
                initial={{ opacity: 0, y: 40 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: isHovered ? 1.08 : 1,
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeOut",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="
        relative
        z-20
        w-[300px]
        object-contain
        drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
        cursor-pointer
    "
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-8 z-40 ">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        onClick={() => setSelectedProduct(index)}
                        whileHover={{
                            y: -10,
                            scale: 1.08,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className={`
                w-24 h-24
                rounded-2xl
                flex items-center justify-center
                cursor-pointer
                transition-all duration-300
                ${selectedProduct === index
                                ? "border border-[#D7E700] bg-[#D7E700]/10"
                                : "border border-transparent"
                            }
            `}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default ProductShowcase;