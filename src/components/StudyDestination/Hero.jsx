import HeroImg from "../../assets/Hero_Ellips.svg"
export default function StudyHeader({ destination }) {
    return (
        <div className="w-full">
            {/* Header with wave */}
            <div className="relative pb-30 ">
                <img src={HeroImg} alt="" className="absolute xl:h-96 w-full -z-20" />
                <div className="max-w-7xl mx-auto px-6 pt-8 pb-24 ">
                    <div className="text-center text-white  text-[20px]">
                        <p className=" text-[#95FEFF] font-roboto first-line pt-8">Study Destinations - <span className="text-white">{destination.country}</span></p>
                        <h1 className="text-4xl md:text-5xl mt-8 lg:text-[60px] ">Study In {destination.country}</h1>
                    </div>
                </div>
                {/* Wave shape */}
                <div className="absolute -bottom-1 left-0 right-0">
                    {/* <svg
                        viewBox="0 0 1400 120"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className="w-full h-[60px]"
                    >
                        <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="white" />
                    </svg> */}
                </div>
            </div>

            {/* Content section */}
            <div className="max-w-7xl mx-auto px-6  pb-16">
                {/* Images grid */}
                <div className="grid grid-cols-1 max-w-5xl mx-auto  lg:grid-cols-2   relative -top-12">
                    {destination.images.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-lg mx-auto  md:w-[457px] md:h-[270px] mb-4">
                            <img src={image.url || "/placeholder.svg"} alt={image.alt} className=" object-cover" />
                        </div>
                    ))}
                </div>

                {/* Description */}
                <div className="max-w-8xl mx-auto text-center mb-8 ">
                    <p className="text-gray-700 leading-relaxed font-roboto1 lg:text-[24px]">{destination.description}</p>
                </div>

                {/* Enquire button */}
                <div className="text-center">
                    <button className="bg-[#B2C0C2] font-roboto hover:bg-gray-400 text-gray-800 px-2 py-1 rounded lg:text-[24px] transition-colors">
                        Enquire Now
                    </button>
                </div>
            </div>
        </div>
    )
}
