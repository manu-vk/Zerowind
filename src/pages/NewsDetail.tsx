import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import newsImg from "../assets/images/newsjacket.png";
import { ArrowLeft } from "lucide-react";
import PageTransition from "../components/PageTransition";
function NewsDetail() {
    const news = [
        {
            id: 1,
            image: newsImg,
            title: "ZeroWind x Gobik - We Ride Flanders 2026",
            category: "Sponsorships",
        },
       
    ];
    const { id } = useParams();

    const item = news.find((n) => n.id === Number(id));

    if (!item) return <h1>Not Found</h1>;

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




                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-h-[500px] object-cover rounded-[25px]"
                />

                <h1 className="mt-10 text-5xl font-bold text-white">
                    {item.title}
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
            </div>

        </section>
        </>
    );
}

export default NewsDetail;