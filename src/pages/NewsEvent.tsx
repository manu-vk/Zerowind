import newsImg from "../assets/images/elepnt.png";
import { motion } from "framer-motion";
import newsletterVideo from "../assets/videos/newsletter.mp4";
import { Link } from "react-router-dom";






import sponsor7 from "../assets/images/events2.png";
import sponsor8 from "../assets/images/events3.png";
import sponsor4 from "../assets/images/crowdevent.png";
import PageTransition from "../components/PageTransition";

function NewsEvent() {
      

    const news = [
  
  {
    image: sponsor4,
    category: "Events",
    date: "17.12.25",
    title: "ZeroWind Gold Sponsor di Verona Christmas Run 2025",
  },
 
  {
    image: sponsor7,
    category: "Event",
    date: "15.09.25",
    title: "ZeroWind at Performance Days Ottobre 2025",
  },
  {
    image: sponsor8,
    category: "Sponsorships",
    date: "14.06.25",
    title: "ZeroWind @ Mura Urban Trail 2025",
  },
  
];

  
  return (
    <>
    <PageTransition />
    <section className="bg-[#232323] mt-[-25px] py-20">
      <div className="mx-auto max-w-[1350px] px-6">
      <h2 className="text-white pt-20 font-semibold">
  Categories:

  <Link to="/news" className="ml-2  hover:text-[#D7E700]">
    All
  </Link>

  <span className="mx-2">/</span>

  <Link  to="">
  Products
</Link>

  <span className="mx-2">/</span>

  <Link to="/news/events" className="hover:text-[#D7E700]">
    Events
  </Link>

  <span className="mx-2">/</span>

  <Link to="/news/sponsor" className="hover:text-[#D7E700]">
    Sponsorships
  </Link>
</h2>
        <motion.div
          whileHover="hover"
          initial="rest"
          className="grid grid-cols-2 gap-12 items-center"
        >
           

          
          <div className="group relative overflow-hidden rounded-[20px]">

  <img
    src={newsImg}
    alt="News"
    className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-none"
  />


  <div
    className="
      absolute
      inset-0
      bg-[#D7E700]
      mix-blend-multiply
      opacity-100
      transition-opacity
      duration-500
      group-hover:opacity-0
      pointer-events-none
    "
  />

</div>

        
          <div>

            <p className="text-white/40 text-sm pt-20 mb-8">
              11.05.26
            </p>

            <h2 className="text-white text-[50px] font-black leading-none max-w-[600px]">
              Pidigi Spa acquisisce Sympatex Technologies GmbH
            </h2>

            <p className="mt-10 text-white/55 text-[24px] leading-10 max-w-[650px]">
              We are proud to announce the acquisition of Sympatex
              Technologies, a strategic milestone that strengthens our
              international position in the world of high-performance
              and sustainable technical fabrics.
            </p>

            <button
              className="
                relative
                overflow-hidden
                mt-16
                px-6
                py-4
                rounded-full
                border
                border-[#D7E700]
                text-[#D7E700]
                group
              "
            >
              <span className="relative z-10 group-hover:text-black transition-colors">
                read news
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

        </motion.div>

      </div>

      <section className="bg-[#232323] py-24">
  <div className="mx-auto max-w-[1400px] px-6">

    <div className="grid grid-cols-3 gap-10">

      {news.map((item, index) => (
        <motion.div
          key={index}
          whileHover="hover"
          initial="rest"
          className="group cursor-pointer"
        >
       
          <div className="relative overflow-hidden rounded-[18px]">

            <motion.img
              src={item.image}
              alt={item.title}
              className="h-[320px] w-full object-cover"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.06 },
              }}
              transition={{ duration: 0.6 }}
            />

          
            <div
              className="
                absolute
                inset-0
                bg-[#D7E700]
                mix-blend-multiply
                transition-opacity
                duration-500
                group-hover:opacity-0
              "
            />

            
            <div className="absolute left-5 top-5 rounded-full border border-white px-4 py-2">
              <p className="text-xs font-bold uppercase tracking-[2px] text-white">
                {item.category}
              </p>
            </div>

          </div>

        
          <p className="mt-5 text-sm text-white/50">
            {item.date}
          </p>

          <h3 className="mt-2 text-[22px] font-semibold leading-[1.25] text-white transition-colors duration-300 group-hover:text-[#D7E700]">
            {item.title}
          </h3>

        </motion.div>
      ))}

    </div>

  </div>
</section>
 <div className="relative overflow-hidden rounded-t-[20px] rounded-b-[20px] ml-10 mr-10  min-h-[600px]">

               
                <video
                    src={newsletterVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute    w-full h-full object-cover"
                />

               
                <div className="absolute inset-0 bg-black/45" />

              
                <div className="relative z-10 flex pt-15 items-center h-full">

                    <div className="ml-20 max-w-[720px]">

                        <p className="text-white/80 text-2xl mb-8">
                            Subscribe to Newsletter
                        </p>

                        <h2 className="text-white font-black leading-[1.05] text-[40px]">
                            Don't miss our events
                            <br />
                            and the latest news
                            <br />
                            about our products and
                            <br />
                            successes.
                        </h2>

                     
                        <div className="mt-16 flex w-[720px]">

                            <input
                                type="email"
                                placeholder="Email *"
                                className="
                                    flex-1
                                    h-22
                                    px-8
                                    bg-transparent
                                    border
                                    border-[#D7E700]
                                    text-white
                                    placeholder:text-white/50
                                    outline-none
                                    rounded-l-2xl
                                "
                            />

                            <button
                                className="
                                    px-12
                                    bg-[#D7E700]
                                    text-black
                                    font-medium
                                    rounded-r-2xl
                                    hover:bg-yellow-300
                                    transition
                                "
                            >
                                Subscribe me
                            </button>

                        </div>

                      

                        <label className="flex items-center gap-4 mt-8 cursor-pointer">

                            <input
                                type="checkbox"
                                className="
                                    w-5
                                    h-5
                                    accent-[#D7E700]
                                "
                            />

                            <span className="text-white/55 text-lg">
                                I declare that I have read and accept the
                                processing of personal data.
                            </span>

                        </label>

                    </div>

                </div>

            </div>
    </section>
    </>
  );
}

export default NewsEvent;