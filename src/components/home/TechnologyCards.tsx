import { motion, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";

import fitImg from "../../assets/images/fitt.webp";
import motionImg from "../../assets/images/motionn.webp";
import powerImg from "../../assets/images/powerr.webp";
import braveImg from "../../assets/images/bravee.webp";
import vaporaImg from "../../assets/images/vaporaa.webp";

import fitLogo from "../../assets/svg/fit.svg";
import motionLogo from "../../assets/svg/Motion.svg";
import powerLogo from "../../assets/svg/power.svg";
import braveLogo from "../../assets/svg/brave.svg";
import vaporaLogo from "../../assets/svg/vapora.svg";

import waterproofIcon from "../../assets/svg/waterproof.svg";
import windIcon from "../../assets/svg/wind.svg";
import breathableIcon from "../../assets/svg/breathable.svg";
import thermoIcon from "../../assets/svg/thermo.svg";


const TechnologyCard = () => {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);
    const rotate = useMotionValue(0);
     const navigate = useNavigate();

    const springX = useSpring(mouseX, {
        stiffness: 350,
        damping: 28,
    });

    const springY = useSpring(mouseY, {
        stiffness: 350,
        damping: 28,
    });

    const springRotate = useSpring(rotate, {
        stiffness: 250,
        damping: 20,
    });
    const handleMouseMove = (
        e: React.MouseEvent<HTMLElement>
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        
        mouseX.set(x + 20);
        mouseY.set(y + 20);

      
        rotate.set((x / rect.width - 0.5) * 40);
    };

    const handleMouseLeave = () => {
        mouseX.set(-100);
        mouseY.set(-100);
        rotate.set(0);
    };
    
    return (
        <section
            className="relative bg-[#242424] px-8 py-8 space-y-8"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.button
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    x: springX,
                    y: springY,
                    rotate: springRotate,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
                className="pointer-events-none absolute z-[100] flex h-14 w-14 items-center justify-center rounded-xl bg-[#D7E700] text-3xl font-bold text-black shadow-2xl"
            >
                +
            </motion.button>



            {/* ================= ROW 1 ================= */}
            <div className="flex gap-8">


               
                <div onClick={() => navigate("/fit")} className="group relative w-1/2 overflow-hidden rounded-[22px] cursor-pointer">

                    
                    <img
                        src={fitImg}
                        alt="Fit" 
                        className="h-[550px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    
                    <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/60"></div>

                    
                    <img
                        src={fitLogo}
                        alt="Fit"
                        className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:top-[30%]"
                    />

                    
                    <div
                        className="
      absolute
      inset-0
      flex
      flex-col
      justify-end
      items-center
      pb-10
      px-10
      opacity-0
      translate-y-10
      transition-all
      duration-500
      group-hover:opacity-100
      group-hover:translate-y-0
    "
                    >

                        <p className="max-w-md text-center text-lg leading-8 text-white">
                            Motion is ZeroWind's line of 3-layer softshell fabrics,
                            perfect for making outdoor sportswear for cold weather
                            and in-between seasons.
                        </p>

                        <div className="mt-10 grid w-full grid-cols-4 gap-6">

                            <div className="flex flex-col items-center">
                                <img src={waterproofIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Waterproofness
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={windIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Wind Protection
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={breathableIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Breathability
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={thermoIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Thermoregulation
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

               
                <div onClick={() => navigate("/motion")} className="group relative w-1/2 overflow-hidden rounded-[22px] cursor-pointer">

                    
                    <img
                        src={motionImg}
                        alt="Motion"
                        
                        className="h-[550px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                   
                    <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/60"></div>

                    
                    <img
                        src={motionLogo}
                        alt="Motion"
                        className="
      absolute
      left-1/2
      top-1/2
      w-44
      -translate-x-1/2
      -translate-y-1/2
      transition-all
      duration-500
      group-hover:top-[30%]
    "
                    />

                    
                    <div
                        className="
      absolute
      inset-0
      flex
      flex-col
      justify-end
      items-center
      pb-10
      px-10
      opacity-0
      translate-y-10
      transition-all
      duration-500
      group-hover:opacity-100
      group-hover:translate-y-0
    "
                    >

                        <p className="max-w-md text-center text-lg leading-8 text-white">
                            Motion is ZeroWind's line of 3-layer softshell fabrics,
                            perfect for making outdoor sportswear for cold weather
                            and in-between seasons.
                        </p>

                        <div className="mt-10 grid w-full grid-cols-4 gap-6">

                            <div className="flex flex-col items-center">
                                <img src={waterproofIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Waterproofness
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={windIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Wind Protection
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={breathableIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Breathability
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={thermoIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Thermoregulation
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            
            <div className="flex gap-8">

                
                <div onClick={() => navigate("/power")} className="group relative w-1/2 overflow-hidden rounded-[22px] cursor-pointer">

                   
                    <img
                        src={powerImg}
                        alt="Power"
                        
                        className="h-[550px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    
                    <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/60"></div>

                   
                    <img
                        src={powerLogo}
                        alt="Power"
                        className="
      absolute
      left-1/2
      top-1/2
      w-44
      -translate-x-1/2
      -translate-y-1/2
      transition-all
      duration-500
      group-hover:top-[30%]
    "
                    />

                   
                    <div
                        className="
      absolute
      inset-0
      flex
      flex-col
      justify-end
      items-center
      pb-10
      px-10
      opacity-0
      translate-y-10
      transition-all
      duration-500
      group-hover:opacity-100
      group-hover:translate-y-0
    "
                    >

                        <p className="max-w-md text-center text-lg leading-8 text-white">
                            Motion is ZeroWind's line of 3-layer softshell fabrics,
                            perfect for making outdoor sportswear for cold weather
                            and in-between seasons.
                        </p>

                        <div className="mt-10 grid w-full grid-cols-4 gap-6">

                            <div className="flex flex-col items-center">
                                <img src={waterproofIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Waterproofness
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={windIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Wind Protection
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={breathableIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Breathability
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={thermoIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Thermoregulation
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                
                <div  onClick={() => navigate("/brave")} className="group relative w-1/2 overflow-hidden rounded-[22px] cursor-pointer">

                    
                    <img
                        src={braveImg}
                        alt="Brave"
                       
                        className="h-[550px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    
                    <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/60"></div>

                  
                    <img
                        src={braveLogo}
                        alt="Brave"
                        className="
      absolute
      left-1/2
      top-1/2
      w-44
      -translate-x-1/2
      -translate-y-1/2
      transition-all
      duration-500
      group-hover:top-[30%]
    "
                    />

                    
                    <div
                        className="
      absolute
      inset-0
      flex
      flex-col
      justify-end
      items-center
      pb-10
      px-10
      opacity-0
      translate-y-10
      transition-all
      duration-500
      group-hover:opacity-100
      group-hover:translate-y-0
    "
                    >

                        <p className="max-w-md text-center text-lg leading-8 text-white">
                            Motion is ZeroWind's line of 3-layer softshell fabrics,
                            perfect for making outdoor sportswear for cold weather
                            and in-between seasons.
                        </p>

                        <div className="mt-10 grid w-full grid-cols-4 gap-6">

                            <div className="flex flex-col items-center">
                                <img src={waterproofIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Waterproofness
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={windIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Wind Protection
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={breathableIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Breathability
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img src={thermoIcon} className="h-12" />
                                <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                    Thermoregulation
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

           
            <div  onClick={() => navigate("/vapora")} className="group relative w-full overflow-hidden rounded-[22px] cursor-pointer">

               
                <img
                    src={vaporaImg}
                    alt="Vapora"
                   
                    className="h-[500px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                
                <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/60"></div>

              
                <img
                    src={vaporaLogo}
                    alt="Vapora"
                    className="
      absolute
      left-1/2
      top-1/2
      w-44
      -translate-x-1/2
      -translate-y-1/2
      transition-all
      duration-500
      group-hover:top-[30%]
    "
                />

               
                <div
                    className="
      absolute
      inset-0
      flex
      flex-col
      justify-end
      items-center
      pb-10
      px-10
      opacity-0
      translate-y-10
      transition-all
      duration-500
      group-hover:opacity-100
      group-hover:translate-y-0
    "
                >

                    <p className="max-w-md text-center text-lg leading-8 text-white">
                        Motion is ZeroWind's line of 3-layer softshell fabrics,
                        perfect for making outdoor sportswear for cold weather
                        and in-between seasons.
                    </p>

                    <div className="mt-10 grid w-full grid-cols-4 gap-6">

                        <div className="flex flex-col items-center">
                            <img src={waterproofIcon} className="h-12" />
                            <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                Waterproofness
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={windIcon} className="h-12" />
                            <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                Wind Protection
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={breathableIcon} className="h-12" />
                            <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                Breathability
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={thermoIcon} className="h-12" />
                            <p className="mt-2 text-[11px] font-semibold uppercase text-white text-center">
                                Thermoregulation
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default TechnologyCard;