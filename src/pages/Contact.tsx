import instagram from "../assets/svg/instagram.svg";
import facebook from "../assets/svg/facebook.svg";
import youtube from "../assets/svg/youtube.svg";
import PageTransition from "../components/PageTransition";


function Contact() {
    return (
        <>
           <PageTransition />
        <section className="bg-[#232323] min-h-screen px-20 mt-[-30px] ">

            <h2 className=" text-[#D7E700] text-4xl p-40 font-bold ">
                Have a Question? <br />
                Do you want to talk to us?
            </h2>

            <form className="space-y-10 pr-40 pl-40">

                
                <div className="grid grid-cols-2 gap-16">

                    <input
                        type="text"
                        placeholder="Full name *"
                        className="bg-transparent border-b border-gray-500 pb-3 text-white outline-none placeholder:text-gray-400"
                    />

                    <input
                        type="email"
                        placeholder="Email *"
                        className="bg-transparent border-b border-gray-500 pb-3 text-white outline-none placeholder:text-gray-400"
                    />

                </div>

               
                <div className="grid grid-cols-2 gap-16">

                    <input
                        type="text"
                        placeholder="Phone"
                        className="bg-transparent border-b border-gray-500 pb-3 text-white outline-none placeholder:text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Company"
                        className="bg-transparent border-b border-gray-500 pb-3 text-white outline-none placeholder:text-gray-400"
                    />

                </div>

              
                <textarea
                    rows={5}
                    placeholder="Message *"
                    className="w-full bg-transparent border-b border-gray-500 text-white outline-none resize-none placeholder:text-gray-400"
                />

               
                <label className="flex items-center gap-3 text-gray-400">

                    <input
                        type="checkbox"
                        className="accent-[#D7E700] w-5 h-5"
                    />

                    I declare that I have read and accepted the processing of my personal data.

                </label>

              
                <button
                    className="
            px-10
            py-4
            rounded-full
            border
            border-[#D7E700]
            text-[#D7E700]
            hover:bg-[#D7E700]
            hover:text-black
            transition-all
          "
                >
                    Send
                </button>

            </form>
            <section className="bg-[#232323] px-20 py-24">
                <div className="grid grid-cols-3 gap-32">

                  
                    <div>
                        <h3 className="text-[#D7E700] font-bold mb-10">
                            Where we are
                        </h3>

                        <p className="text-white/55 text-1xl leading-10">
                            Pidigi S.p.a.
                            <br />
                            Via della Meccanica, 29
                            <br />
                            37139 Verona (Italy).
                        </p>
                    </div>

                 
                    <div>
                        <h4 className="text-[#D7E700] font-bold mb-10">
                            Contacts
                        </h4>

                        <p className="text-white/55 text-1xl">
                            info@zerowind.it
                        </p>

                        <p className="text-white/55 text-2xl mt-5">
                            +39 045 92 16 888
                        </p>
                    </div>


                    
                    <div className="flex items-start gap-10">

                        <a href="#" className="group">
                            <img
                                src={instagram}
                                alt="Instagram"
                                className="w-5  transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    filter:
                                        "brightness(0) saturate(100%) invert(78%) sepia(96%) saturate(1000%) hue-rotate(10deg)",
                                }}
                            />
                        </a>

                        <a href="#" className="group">
                            <img
                                src={facebook}
                                alt="Facebook"
                                className="w-5 transition-transform duration-300 group-hover:scale-110"
                                 style={{
                                    filter:
                                        "brightness(0) saturate(100%) invert(78%) sepia(96%) saturate(1000%) hue-rotate(10deg)",
                                }}
                            />
                        </a>

                        <a href="#" className="group">
                            <img
                                src={youtube}
                                alt="YouTube"
                                className="w-10 transition-transform duration-300 group-hover:scale-110"
                                
                            />
                        </a>

                    </div>

                </div>
            </section>

        </section>
        </>
    );
}

export default Contact;