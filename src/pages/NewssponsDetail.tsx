import { Link, useParams } from "react-router-dom";



import { sponsorNews } from "../Data/NewssponsData";
import PageTransition from "../components/PageTransition";




function NewssponsDetail() {
    const { id } = useParams();

    const article = sponsorNews.find(
        (item) => item.id === Number(id)
    );

    if (!article) {
        return <h1>Article not found</h1>;
    }

    return (
        <>
        <PageTransition />
            <section className="bg-[#232323] mt-[-25px] min-h-screen py-20">
                <div className="max-w-[700px] pt-20 mx-auto px-6">

                    <Link
                        to="/news/sponsor"
                        className="text-white hover:text-[#D7E700]"
                    >
                        ← Back
                    </Link>
                    <div className="group relative mt-10 overflow-hidden rounded-[20px]">

                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full object-cover"
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

                    <p className="text-white/50 mt-6">
                        {article.date}
                    </p>

                    <h1 className="text-white text-5xl font-bold mt-4">
                        {article.title}
                    </h1>
                    <p className="mt-10 mb-10 text-white">Today we had the pleasure of hosting @ale_magagnotti, a promising young member of the @autozaicontri team, fresh from his 
                        extraordinary experience at the Junior Track Cycling World Championships in the Netherlands.</p>
                    <img
                        src={article.detailImage}
                        alt={article.title}
                        className="w-full rounded-[20px]"
                    />


                </div>
            </section>
        </>
    );
}

export default NewssponsDetail;
