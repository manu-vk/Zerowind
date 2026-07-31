import heroVideo from "../../assets/videos/hero.mp4";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import PageTransition from "../PageTransition";


const Hero = () => {
 
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  
  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  
  const inverseX = useTransform(x, (value) => -value);
  const inverseY = useTransform(y, (value) => -value);

 
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const moveX =
      (e.clientX - rect.left - rect.width / 2) / 20;

    const moveY =
      (e.clientY - rect.top - rect.height / 2) / 20;

    mouseX.set(moveX);
    mouseY.set(moveY);
  };


  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
        <PageTransition />
    <section className="mt-[-30px] bg-[#242424] px-8 py-8">
      <div
        className="relative h-[500px] overflow-hidden rounded-[28px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
     
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-500px w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        
        <div className="absolute inset-0 bg-black/25" />

       
        <div className="absolute inset-0 z-10">

       
          <motion.h1
            style={{
              x,
              y,
              WebkitTextStroke: "1px #ecf576",
              color: "transparent",
            }}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute left-20 top-20 text-9xl font-black uppercase leading-none pointer-events-none"
          >
            BETTER
          </motion.h1>

         
          <motion.h1
            style={{
              x: inverseX,
              y: inverseY,
              WebkitTextStroke: "1px #ecf576",
              color: "transparent",
            }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute bottom-20 right-20 text-9xl font-black uppercase leading-none text-right pointer-events-none"
          >
            IN
            <br />
            MOTION
          </motion.h1>

        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;