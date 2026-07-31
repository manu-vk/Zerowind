import { motion, useScroll, useTransform, useMotionTemplate, } from "framer-motion";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import type { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import thermoIcon from "../assets/svg/thermo.svg";
import waterproofIcon from "../assets/svg/expand.svg";
import windproofIcon from "../assets/svg/wind.svg";
import breathableIcon from "../assets/svg/breathable.svg";

import rainVideo from "../assets/videos/black.mp4";

import fitLogo from "../assets/svg/fit.svg";
import fitsvg from "../assets/images/fitt.webp";
import vaporabreathable from "../assets/images/vapora-breathable-.webp";
import vaporasvg from "../assets/svg/Vapora.svg";
import PageTransition from "../components/PageTransition";





function Vapora() {
     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
    const [showCursor, setShowCursor] = useState(false);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
    
            setCursor({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };
    const navigate = useNavigate();
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
                        src={vaporasvg}
                        alt="vapora"
                        style={{ opacity: firsttOpacity ,
                          y: firsty,
                        }}
                        className="absolute left-1/2 top-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 brightness-150 "
                    />
            
                  
                    <motion.img
                        src={vaporasvg}
                        alt="vapora"
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
                        Designed for those who live the outdoors without limits, Vapora is the new technical fabric in the ZeroWind range that meets the
                         needs of every adventure—from trail running to trekking, from cycling to everyday exploration.
                    </motion.p>
                </div>
            </section>
     
            <div className="bg-[#232323] h-[400px] w-full">
                <section className="bg-[#232323] pb-24">
                    <div className="mx-auto  flex flex-wrap justify-center gap-10">
                         
                       
                         <div className="w-[220px] rounded-[10px] border border-[#D7E700] p-8 text-center">
                            <img
                                src={windproofIcon}
                                alt="Windproof"
                                className="mx-auto h-14 w-14 object-contain"
                            />

                            <p className="mt-6 text-sm font-bold  tracking-[2px] text-white">
                                Total wind protection
                            </p>
                        </div>

                         <div className="w-[220px] rounded-[10px] border border-[#D7E700] p-8 text-center">
                            <img
                                src={breathableIcon}
                                alt="Breathable"
                                className="mx-auto h-14 w-14 object-contain"
                            />

                            <p className="mt-6 text-sm font-bold  tracking-[2px] text-white">
                               High breathability
                            </p>
                        </div>
                       
                        <div className="w-[220px] rounded-[10px] border border-[#D7E700] p-8 text-center">
                            <img
                                src={thermoIcon}
                                alt="Thermo"
                                className="mx-auto h-14 w-14 object-contain"
                            />

                            <p className="mt-6 text-sm font-bold tracking-[2px] text-white">
                                Thermoregulation
                            </p>
                        </div>
                  

                       
                        <div className="w-[220px] rounded-[10px] border border-[#D7E700] p-8 text-center">
                            <img
                                src={waterproofIcon}
                                alt="Waterproof"
                                className="mx-auto h-14 w-14 object-contain"
                            />

                            <p className="mt-6 text-sm font-bold  tracking-[2px] text-white">
                               Excellent fit
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
                   3-layer fabrics with performances guaranteed by a proven, totally PFAS-free windproof treatment enclosed between 
                   two fabrics to create reliable, high-performance garments in a wide range of weights.
                  
                </motion.p>



            </div>

            <section className="bg-[#232323]   py-20">
                <div className="mx-auto pl-40  max-w-[1300px] px-8 flex items-center gap-20">

                  
                    <div className="w-1/2  rounded-[10px] overflow-hidden">
                        <img
                            src={vaporabreathable}
                          
                            
                            
                            className="w-full h-full object-cover"
                        />
                    </div>


              
                    <div className="w-1/2 pl-20 ">
                        <p className="text-[20px] leading-none text-[yellow]">
                            GRAMS
                        </p>

                        <p className=" mt-5 text-[40px] font-bold  leading-none text-[yellow]">
                            75 a 80
                        </p>

                        <p className="mt-5 text-[20px] tracking-[6px]  text-[yellow]">
                            gr/m2
                        </p>

                    </div>

                </div>
            </section>
           
            
            <section className="bg-[#232323] py-32">
                <section className="relative bg-[#232323] ">

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

             onClick={() => navigate("/fit")}
    
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
        src={fitsvg}
        alt="bravee"
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
            top-56
            text-white/60
            uppercase
            tracking-[8px]
            text-sm
            font-bold
        ">
            Discover
        </p>


      
        <img
            src={fitLogo}
            alt="Power technology"
            className="
            w-[220px]
            brightness-0
            invert
           mt-[130px]
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

           </section>

        </>
    );
}

export default Vapora;