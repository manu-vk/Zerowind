// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion,useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";


import elephant from "../assets/images/elepnt.png";
import { ArrowLeft } from "lucide-react";
import PageTransition from "../components/PageTransition";
function Newsele() {
    const [showCursor, setShowCursor] = useState(false);

const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const springX = useSpring(mouseX, {
  stiffness: 300,
  damping: 20,
});

const springY = useSpring(mouseY, {
  stiffness: 300,
  damping: 20,
});



  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();

  mouseX.set(e.clientX - rect.left - 28);
  mouseY.set(e.clientY - rect.top - 28);
};
    
    return (
        <>
        <PageTransition />
        <section className="bg-[#232323] min-h-screen mt-[-30px] flex justify-center p-20">
            <Link
                to="/news"
                className=" inline-flex text-white hover:text-[#D7E700] transition-colors duration-300"
            >
                <ArrowLeft className="w-5  h-5" />
                <span>All News</span>
            </Link>
            <div className="max-w-[700px] pt-20 ">




                <img src={elephant}
                   
                    className=" w-full max-h-[500px] object-cover rounded-[25px]"
                />

                <h1 className="mt-10 text-5xl font-bold text-white">
                    
                </h1>

                <p className="mt-6 text-white/70 text-xl leading-9">
                    ZeroWind and Gobik together for We Ride Flanders 2026.
                </p><br></br>
                <div className="text-white/70 "><p>ZeroWind and Gobik together for We Ride Flanders 2026.

                    For We Ride Flanders 2026, ZeroWind and Gobik are collaborating to offer participants a
                    technical garment designed to tackle the iconic roads of
                    Flanders—with their cobblestones, wind, and variable conditions—in the best possible way.</p></div>
                <div className="pt-10 text-white/70 " ><p>ZeroWind and Gobik together for We Ride Flanders 2026.</p><br />
                    <p>For We Ride Flanders 2026, ZeroWind and Gobik are collaborating to offer participants a technical garment designed to tackle the iconic roads of Flanders—with their cobblestones, wind, and variable conditions—in the best possible way. <br /><br />

                        ZeroWind is the supplier of the technical fabric used by Gobik to create the event’s official vest, which will be included in the race pack for all registered cyclists. The garment is designed
                        to provide wind protection, breathability, and lightness—essential features for such a demanding course. <br /><br />

                        A collaboration that combines performance and innovation, supporting an event that
                        attracts thousands of enthusiasts from around the world every year. <br />

                        Translated with DeepL.com (free version)</p>
                </div>

                <div
  className="relative w-full mt-10"
  onMouseMove={handleMouseMove}
  onMouseEnter={() => setShowCursor(true)}
  onMouseLeave={() => setShowCursor(false)}
>
  {showCursor && (
    <motion.button
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        x: springX,
        y: springY,
    
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="pointer-events-none z-20 flex h-14 w-14 items-center justify-center rounded-xl bg-[#D7E700] text-3xl font-bold text-black shadow-2xl"
    >
      +
    </motion.button>
  )}

  <img
    src={elephant}
    className="w-full max-h-[500px] object-cover rounded-[25px]"
    alt="Elephant"
  />
</div>
            </div>
            

        </section>
        
        </>
    );
}

export default Newsele;