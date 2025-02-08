import React from "react";
import Edulink1 from "../../assets/services/edulink1.svg"

const AdvantagesSection = ({ heading, Image, advantages }) => {
    return (
        <section className="mx-auto py-8 sm:py-12 md:py-16 relative">
            <h1 className="text-2xl sm:text-3xl md:text-[48px] font-medium text-center mb-8 sm:mb-12">
                {heading}
            </h1>
            <img src={Edulink1} alt="" className="absolute right-0 bottom-24" />
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-full max-w-[590px] mx-auto md:mx-0">
                    <div className="aspect-[590/665] relative w-full">
                        <img src={Image || "/placeholder.svg"} alt="Student advantages" className="object-cover w-full h-full" />
                    </div>
                </div>
                <div className="space-y-6 md:space-y-10 sm:space-y-8 font-roboto lg:text-[24px] sm:text-lg md:text-[24px] lg:pr-44">
                    {advantages.map((advantage, index) => (
                        <AdvantageItem
                            key={index}
                            title={advantage.title}
                            description={advantage.description}
                        />
                    ))}
                </div>
            </div>
            
        </section>
    );
};

const AdvantageItem = ({ title, description }) => {
    return (
        <div className="flex gap-3 sm:gap-4 relative">
            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className="relative">
                <h3 className="font-semibold text-base sm:text-lg md:text-[24px] mb-1 sm:mb-2 leading-relaxed">{title}</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-[24px] leading-relaxed">{description}</p>
            </div>
        </div>
        
               
    );
};

export default AdvantagesSection;
