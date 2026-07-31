import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate, } from "framer-motion";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import type { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


import waterproofIcon from "../assets/svg/bulk.svg";
import windproofIcon from "../assets/svg/wind.svg";
import breathableIcon from "../assets/svg/strength.svg";

import rainVideo from "../assets/videos/black.mp4";
import windprotection from "../assets/videos/windprotection.mp4";




import shirt from "../assets/images/shirt1.png";
import vaporaa from "../assets/images/vaporaa.webp";

import vapora from "../assets/svg/Vapora.svg";
import braveSvg from "../assets/svg/Brave.svg";

import zwrSvg from "../assets/svg/ZWR.svg";
import PageTransition from "../components/PageTransition";


function Brave() {
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const shirts = [
        {
            id: 1,
            name: "BERGAMO",
            image: shirt,
            technology: braveSvg,
        },
       

    ];
      const navigate = useNavigate();
    const [showCursor, setShowCursor] = useState(false);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
    
            setCursor({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

    const { scrollY } = useScroll();



    const secondOpacity = useTransform(
        scrollY,
        [60, 100], 
        [0, 1]
    );
    const firsttOpacity = useTransform(
        scrollY,
        [10, 100], 
        [1, 0]
    );
    const firsty =useTransform(
        scrollY,
        [60,180],
        [0,-280]

    )

    const secondX = useTransform(
        scrollY,
        [60, 180], 
        [-80, 0]
    );
  
    const firstParaRef = useRef<HTMLParagraphElement>(null);

    const { scrollYProgress: firstProgress } = useScroll({
        target: firstParaRef,
        offset: ["start end", "center center"],
    });

    const blur = useTransform(firstProgress, [0, 1], [6, 0]);
    const firstOpacity = useTransform(firstProgress, [0, 1], [1, 1]);

    const filter = useMotionTemplate`blur(${blur}px)`;


    
    const bottomParaRef = useRef<HTMLParagraphElement>(null);

    const { scrollYProgress: bottomProgress } = useScroll({
        target: bottomParaRef,
        offset: ["start end", "center center"],
    });

    const bottomOpacity = useTransform(
        bottomProgress,
        [0, 0.5],
        [0, 1]
    );

    const [hoveredShirt, setHoveredShirt] = useState<number | null>(null);


    return (
        <>

           <PageTransition />
            <section className="relative w-full mt-[-30px] min-h-screen overflow-hidden bg-[#232323]">

                <video
                    src={rainVideo

                    }
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 z-10">

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ opacity: firsttOpacity ,
                            y:firsty
                        }}

                        className="absolute left-1/2 top-[34%] -translate-x-1/2
             text-[14px] uppercase tracking-[8px]
             text-[white] font-bold "
                    >
                        TECHNOLOGY
                    </motion.p>
                    <motion.img
                        src={braveSvg}
                        alt="BRAVE"
                        style={{ opacity: firsttOpacity ,
                          y: firsty,
                        }}
                        className="absolute left-1/2 top-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 brightness-150 "
                    />
            
                  
                    <motion.img
                        src={braveSvg}
                        alt="BRAVE"
                        style={{
                            opacity: secondOpacity,
                            x: secondX,
                        }}
                        className="fixed left-[-120px] top-1/2  w-[400px] z-20 brightness-50"
                        animate={{
                            rotate: -90, 
                        }}
                    />


                </div>

            </section>
         
            <section className="bg-[#232323] py-24">
                <div className="mx-auto max-w-[1100px] px-8">
                    <motion.p
                        ref={firstParaRef}
                        style={{
                            opacity: firstOpacity,
                            filter,
                        }}
                        className="mx-auto max-w-[1100px] text-center text-[42px] font-black leading-[1.2] text-white"
                    >
                        With the BRAVE fabric line, ZeroWind redefines the concept of windproof protective shell.
                    </motion.p>
                </div>
            </section>
          
            <div className="bg-[#232323] h-[400px] w-full">
                <section className="bg-[#232323] pb-24">
                    <div className="mx-auto  flex flex-wrap justify-center gap-10">

                       
                        

                       
                        <div className="w-[200px] rounded-[10px] border border-[#D7E700] p-8 text-center">
                            <img
                                src={waterproofIcon}
                                alt="Waterproof"
                                className="mx-auto h-14 w-14 object-contain"
                            />

                            <p className="mt-6 text-sm font-bold  tracking-[2px] text-white">
                                Total wind protection
                            </p>
                        </div>

                       
                        <div className="w-[200px] rounded-[10px] border border-[#D7E700] p-8 text-center">
                            <img
                                src={windproofIcon}
                                alt="Windproof"
                                className="mx-auto h-14 w-14 object-contain"
                            />

                            <p className="mt-6 text-sm font-bold  tracking-[2px] text-white">
                               Minimum bulk and maximum lightness
                            </p>
                        </div>

                       
                        <div className="w-[200px] rounded-[10px] border border-[#D7E700] p-8 text-center">
                            <img
                                src={breathableIcon}
                                alt="Breathable"
                                className="mx-auto h-14 w-14 object-contain"
                            />

                            <p className="mt-6 text-sm font-bold  tracking-[2px] text-white">
                               strength and Durability
                            </p>
                        </div>

                    </div>
                </section>

                <motion.p
                    ref={bottomParaRef}
                    style={{
                        opacity: bottomOpacity,
                    }} className="
            mx-auto max-w-[950px]
            
            px-8
            text-center
            text-[22px]
            leading-[1.6]
            font-large
            text-white
            
        "
                >
                   High wind protection combined with maximum lightness thanks to the innovative single-layer fabric construction. Ultralight fabrics perfect for making garments
                    with excellent technical characteristics, durable and extremely easy to carry.
                  
                </motion.p>



            </div>

            <section className="bg-[#232323]   py-20">
                <div className="mx-auto pl-40  max-w-[1300px] px-8 flex items-center gap-20">

                  
                    <div className="w-1/2  rounded-[10px] overflow-hidden">
                        <video
                            src={windprotection}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>


                    
                    <div className="w-1/2 pl-20 ">
                        <p className="text-[20px] leading-none text-[yellow]">
                            GRAMS
                        </p>

                        <p className=" mt-5 text-[40px] font-bold  leading-none text-[yellow]">
                            20 a 80
                        </p>

                        <p className="mt-5 text-[20px] tracking-[6px]  text-[yellow]">
                            gr/m2
                        </p>

                    </div>

                </div>
            </section>
          
            
            <section className="bg-[#232323] py-32">
                <section className="relative bg-[#232323] py-32">

    {/* Marquee above shirts */}
    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-[400px] overflow-hidden z-20">
        <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 8,
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
                <p className="text-white uppercase tracking-[8px] text-sm mr-6">
                    DISCOVER OUR PRODUCTS •
                </p>
            </div>
        </motion.div>
    </div>


   
    <div className="pt-[-10] flex flex-col gap-10">

        

    </div>

</section>

                <div className=" relative max-w-[1200px] mx-auto px-8"
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



                    <div className="flex flex-col gap-10">


                        {shirts.map((shirt) => (
                            <div
    key={shirt.id}
    className="
    relative
    flex
    items-center
    justify-center
    min-h-[400px]
    "

                            >

                               
                                <AnimatePresence>
                                    {hoveredShirt === shirt.id && (
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
                                            className="
            absolute
            left-10
            top-1/2
            -translate-y-1/2
            z-30
            max-w-[360px]
            min-h-[300px]
            bg-black
            p-8
            rounded-[30px]
            pointer-events-none
            "
                                        >

                                            <h2 className="
            text-3xl
            text-white
            font-black
            mb-12
            ">
                                                {shirt.name}
                                            </h2>


                                            <div className="flex gap-20 mb-10">

                                           
                                                <div>
                                                    <p className="
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-white/50
                    mb-5
                    ">
                                                        TECHNOLOGY
                                                    </p>

                                                    <img
                                                        src={braveSvg}
                                                        alt="Technology"
                                                        className="w-24"
                                                    />
                                                </div>


                                             
                                                <div>
                                                    <p className="
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-white/50
                    mb-5
                    ">
                                                        FEATURE
                                                    </p>

                                                    <img
                                                        src={zwrSvg}
                                                        alt="Feature"
                                                        className="w-24"
                                                    />
                                                </div>

                                            </div>


                                            <p className="
            text-white/70
            text-[18px]
            leading-8
            ">
                                                Custom product exclusively for customer.
                                                Light shield fabric for mid-season.
                                                Very breathable with absolute wind protection.
                                                Resistant to abrasion.
                                                Extremely stretchy, perfect for making slim fit garments.
                                            </p>


                                        </motion.div>
                                    )}
                                </AnimatePresence>


                                
                                <motion.img
                                    src={shirt.image}
                                    alt={shirt.name}

                                    onMouseEnter={() => setHoveredShirt(shirt.id)}
                                    onMouseLeave={() => setHoveredShirt(null)}

                                    animate={{
                                        scale: hoveredShirt === shirt.id ? 1.08 : 1,
                                    }}

                                    transition={{
                                        duration: 0.4,
                                    }}

                                    className="
        w-[330px]
        object-contain
        cursor-pointer
        "
                                />

                            </div>
                        ))}

                    </div>

                </div>

            </section>
           
            <section className="bg-[#232323] pb-10 ">
                <div className="mx-auto max-w-[900px] px-8 text-center">

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        viewport={{ once: true }}
                        className="
            text-white
            text-[34px]
            leading-[1.2]
            
            "
                    >
                        Request expert advice on our products and technologies.
                    </motion.h2>

<button
        className="
            relative
            overflow-hidden
            mt-16
            px-12
            py-5
            rounded-full
            border
            border-[#D7E700]
            text-[#D7E700]
            group
        "
    >
        <span className="relative z-10 group-hover:text-black transition-colors">
            Contact us
        </span>

        <span
            className="
                absolute
                inset-0
                bg-[#D7E700]
                -translate-x-full
                group-hover:translate-x-0
                transition-transform
                duration-500
            "
        />
    </button>

                </div>
                
                 <section
                  onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
             onClick={() => navigate("/vapora")}
    
    className="
    relative
    mt-24
    mx-auto
    max-w-[1200px]
    h-[500px]
    rounded-[30px]
    overflow-hidden
    "
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

    
    <img
        src={vaporaa}
        alt="Power"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
    />


    


   
    <div className="
        relative
        z-10
        h-full
        flex
        flex-col
        items-center
        justify-center
        text-center
    ">


     
        <p className="
            absolute
            top-46
            text-white/60
            uppercase
            tracking-[8px]
            text-sm
            font-bold
        ">
            Discover
        </p>


        
        <img
            src={vapora}
            alt=" technology"
            className="
            w-[220px]
            brightness-0
            invert
            "
        />


       
        <p className="
            mt-16
            text-white
            uppercase
            tracking-[8px]
            text-sm
            font-bold
        ">
            Technology
        </p>


    </div>

</section>

            </section>

           

        </>
    );
}

export default Brave;