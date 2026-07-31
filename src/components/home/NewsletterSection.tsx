import newsletterVideo from "../../assets/videos/newsletter.mp4";

function NewsletterSection() {
    return (
      <section
    className="
        relative
        z-20
        bg-[#232323]
        px-7
        pb-8
        pt-20
    "
>

           
            <div className="relative overflow-hidden rounded-t-[20px] rounded-b-[20px]  min-h-[600px]">

                
                <video
                    src={newsletterVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
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
            <div className="bg-[#232323] py-32 flex flex-col items-center">

    <h2 className="text-white text-[40px] leading-tight text-center font-medium">
        Request expert advice on our products
        <br />
        and technologies.
    </h2>

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

        </section>
    );
}

export default NewsletterSection;