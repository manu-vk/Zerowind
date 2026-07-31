
import newsletterVideo from "../assets/videos/newsletter.mp4";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";



function NewsProducts() {
  return (
    <>
     
    <PageTransition />
      <section className="bg-[#232323] mt-[-25px] py-20" >
        <h2 className="text-white  pl-10 pt-20 font-semibold">
  Categories:

  <Link to="/news" className="ml-2  hover:text-[#D7E700]">
    All
  </Link>

  <span className="mx-2">/</span>

  <Link  to="/News/Products">
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
        <div className="relative overflow-hidden rounded-t-[20px] mt-20 rounded-b-[20px] ml-10 mr-10  min-h-[600px]">

              
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
export default NewsProducts;