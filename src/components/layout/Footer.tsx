import { motion } from "framer-motion";
import newsletterVideo from "../../assets/videos/newsletter.mp4";

import instagram from "../../assets/svg/instagram.svg";
import facebook from "../../assets/svg/facebook.svg";
import youtube from "../../assets/svg/youtube.svg";

function Footer() {
    return (
<footer className="relative z-10 bg-[#D7E700] overflow-hidden py-10 ">

          
            <div className="overflow-hidden ">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 18,
                            ease: "linear",
                        },
                    }}
                >
                    <h1
                        className="
                            shrink-0
                            mr-16
                            text-[220px]
                            font-black
                            uppercase
                            leading-none
                            text-transparent
                            [-webkit-text-stroke:2px_rgba(0,0,0,0.35)]
                        "
                    >
                        BETTER IN MOTION •
                    </h1>

                    <h1
                        className="
                            shrink-0
                            mr-16
                            text-[220px]
                            font-black
                            uppercase
                            leading-none
                            text-transparent
                            [-webkit-text-stroke:2px_rgba(0,0,0,0.35)]
                        "
                    >
                        BETTER IN MOTION •
                    </h1>

                    <h1
                        className="
                            shrink-0
                            mr-16
                            text-[220px]
                            font-black
                            uppercase
                            leading-none
                            text-transparent
                            [-webkit-text-stroke:2px_rgba(0,0,0,0.35)]
                        "
                    >
                        BETTER IN MOTION •
                    </h1>
                </motion.div>
            </div>
           
<div className="max-w-6xl mx-auto mt-24 grid grid-cols-4 gap-20 text-black">

   
    <div>
        <h3 className="text-2xl font-small mb-8">
            Technologies
        </h3>

        <ul className="space-y-3 text-lg">
            <li className="cursor-pointer hover:translate-x-2 transition-all duration-300">FIT</li>
            <li className="cursor-pointer hover:translate-x-2 transition-all duration-300">Motion</li>
            <li className="cursor-pointer hover:translate-x-2 transition-all duration-300">Power</li>
            <li className="cursor-pointer hover:translate-x-2 transition-all duration-300">Brave</li>
            <li className="cursor-pointer hover:translate-x-2 transition-all duration-300">Vapora</li>
        </ul>
    </div>

    
    <div>
        <h3 className="text-2xl font-small mb-8">
            Features
        </h3>

        <ul className="space-y-3 text-lg">
            <li className="cursor-pointer hover:translate-x-2 transition-all duration-300">ZWR</li>
            <li className="cursor-pointer hover:translate-x-2 transition-all duration-300">Relife</li>
        </ul>
    </div>

   
    <div>
        <h3 className="text-2xl font-small mb-8">
            Zerowind
        </h3>

        <ul className="space-y-3 text-lg">
            <li className="cursor-pointer hover:translate-x-2 transition-all duration-300">Contact</li>
            <li className="cursor-pointer hover:translate-x-2 transition-all duration-300">News</li>
        </ul>
    </div>

    
    <div>
        <h3 className="text-2xl font-small mb-8">
            Contacts
        </h3>

        <div className="space-y-3 text-lg">
            <p>info@zerowind.it</p>
            <p>+39 045 92 16 888</p>
        </div>
    </div>

</div>
            <div className="mt-24 flex justify-between items-end">
                

   
    <div className="mt-14  ml-20 flex items-center gap-6">

    
    <div className="relative w-[480px] h-[260px] rounded-[20px] overflow-hidden">

        <video
            src={newsletterVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 h-full flex flex-col justify-between p-6">

            <div>
                <h3 className="text-white text-3xl font-semibold mb-6">
                    Newsletter
                </h3>

                <div className="flex">
                    <input
                        type="email"
                        placeholder="Email *"
                        className="flex-1 h-14 border border-white bg-transparent px-5 text-white placeholder:text-white/60 rounded-l-xl outline-none"
                    />

                    <button className="w-40 bg-[#D7E700] text-black rounded-r-xl font-medium hover:bg-yellow-300 transition">
                        Subscribe me
                    </button>
                </div>
            </div>

            <label className="flex items-center gap-3 text-white/80 text-sm">
                <input type="checkbox" className="accent-[#D7E700]" />
                I declare that I have read and accept the processing of personal data.
            </label>

        </div>
    </div>

    <div className="flex flex-col gap-8">

        <img
            src={instagram}
            alt="Instagram"
            className="w-8 cursor-pointer hover:scale-110 transition"
        />

        <img
            src={facebook}
            alt="Facebook"
            className="w-8 cursor-pointer hover:scale-110 transition"
        />

        <img
            src={youtube}
            alt="YouTube"
            className="w-8 cursor-pointer hover:scale-110 transition"
        />

    </div>

</div>
</div>



<div className="mt-24  pt-8">
    <div className="max-w-7xl mx-auto px-12 flex justify-between items-center flex-wrap gap-6">

        
        <div className="flex flex-wrap gap-10 text-sm uppercase tracking-wide">

            <a
                href="#"
                className="hover:underline"
            >
                Privacy Policy
            </a>

            <a
                href="#"
                className="hover:underline"
            >
                Cookie Policy
            </a>

            <a
                href="#"
                className="underline underline-offset-4"
            >
                Manage Cookies
            </a>

            <a
                href="#"
                className="hover:underline"
            >
                Credits
            </a>

        </div>

       
        <p className="text-sm uppercase tracking-wide text-right">
            ZEROWIND® REA VR69979 - P.IVA 00215260233 |
            VIA DELLA MECCANICA 29,
            37139 VERONA
        </p>

    </div>
</div>

        </footer>
    );
}

export default Footer;