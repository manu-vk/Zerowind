import rainVideo from "../assets/videos/drops.mp4";
import girl from "../assets/videos/girl.mp4";
import zwrLogo from "../assets/svg/zwr.svg";
import zwrIcon from "../assets/svg/rainDrop.svg";
import rotateArrowIcon from "../assets/svg/Roundarrow.svg";

import reliefSvg from "../assets/svg/relief.svg";

import { motion} from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition";



function Zwr() {
     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const location = useLocation();

useEffect(() => {
  if (location.hash === "#relife") {
    const section = document.getElementById("relife");

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}, [location]);
    
    return (
        <>
          <PageTransition />
            <section className="bg-[#232323] min-h-screen mt-[-25px] ">
               
            <div className="relative h-[calc(100vh-20px)] mx-10  rounded-[30px] overflow-hidden">

              
                    <video
                        src={rainVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className=" mt-25  absolute inset-0 h-full w-full object-cover"
                    />

                 


                    <div className="relative z-10 flex h-full flex-col items-center justify-center">

                        <div className="mb-10  w-[220px] overflow-hidden">
                            <motion.div
                                className="flex whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <span className="mr-8 pt-20 shrink-0 text-sm font-bold uppercase tracking-[8px] text-white">
                                    FEATURE •
                                </span>

                                <span className="mr-8 pt-20 shrink-0 text-sm font-bold uppercase tracking-[8px] text-white">
                                    FEATURE •
                                </span>
                            </motion.div>
                        </div>

                        <img
                            src={zwrLogo}
                            alt="ZWR"
                            className="w-[320px] mt-10  brightness-0 invert"
                        />

                
                        <img
                            src={zwrIcon}
                            alt="ZWR Icon"
                            className="mt-10 w-16 brightness-0 invert"
                        />

                    </div>

                </div>
                  <section className=" py-24">
            <h4 className="text-white opacity-50 uppercase  pl-25 pb-10">Water Repellent treatment</h4>
  <div className="relative max-w-[900px] px-10">

    <motion.p
      initial={{ opacity: 0.7, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="
       pl-15
        text-[42px]
        leading-[1.3]
        font-bold
        text-white
      "
    >
      Our way of proposing Water Repellent treatment, in full compliance
      with the environment and international regulations. The water
      repellent component applied to the fabric is totally PFAS-free and
      ensures the garment's breathability and quick drying.
    </motion.p>

    

  </div>
  
</section>


   <button
        className="
            relative
            overflow-hidden
            px-12
            py-5
            rounded-full
            border
            border-[#D7E700]
            text-[#D7E700]
            group
            ml-25
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

  
   
  <section  className="bg-[#232323] p-20">
     <div id="relife">
  <div  className="relative h-[500px] rounded-[30px] overflow-hidden">
        <video
            src={girl}
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
    </section>
   

               <section className=" py-4">
            <h4 className="text-white opacity-50 uppercase  pl-25 pb-10">eco-friendly solutions</h4>
  <div className="relative max-w-[900px] px-10">

    <motion.p
      initial={{ opacity: 0.7, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="
       pl-15
        text-[42px]
        leading-[1.3]
        font-bold
        text-white
      "
    >
      We care about performance but also about the well-being of the environment and people, 
      which is why we study increasingly eco-friendly and planet-friendly solutions.ZeroWind fabric lines can be produced with polyester yarns derived from recycled
       post-consumer materials, and are themselves recyclable at the end of their lives.
    </motion.p>

    

  </div>
  
</section>


   <button
        className="
            relative
            overflow-hidden
            px-12
            py-5
            rounded-full
            border
            border-[#D7E700]
            text-[#D7E700]
            group
            ml-25
            mt-15
            mb-10
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
            </section>
            
         
        </>
    );
}

export default Zwr;