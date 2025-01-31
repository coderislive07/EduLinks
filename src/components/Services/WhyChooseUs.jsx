import React from "react";

const ServiceCard = ({ title, description }) => {
    return (
        <div className="bg-[#37D7D933] p-6 rounded-lg text-center w-[357px] h-[227px] text-[20px] mx-auto">
            <h3 className="font-medium  mb-3 w-64 mx-auto">{title}</h3>
            <p className="font-roboto1  leading-relaxed w-64 mx-auto">{description}</p>
        </div>
    );
};

const PostLandingServices = ({VisaJourney}) => {
    const services = [
        {
            title: "Tailored Settlement Plans",
            description: "Personalized strategies to help you settle quickly and comfortably.",
        },
        {
            title: "Essential Service Setup",
            description: "Guidance on setting up banking, healthcare, and utilities.",
        },
        {
            title: "Housing Assistance",
            description: "Support in finding both temporary and permanent accommodation.",
        },
        {
            title: "Local Orientation",
            description: "Familiarization with local transportation, culture, and community resources.",
        },
        {
            title: "Employment Support",
            description: "Assistance with job search strategies and networking opportunities.",
        },
        {
            title: "Ongoing Settlement Help",
            description: "Continuous support for any challenges during your transition.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-[48px] font-medium text-center mb-4 pb-10">
                {/* Why Choose Us for Your Post Landing Services? */}
                {VisaJourney.title}
            </h1>
            <p className="text-center mb-12 max-w-6xl mx-auto text-[24px] font-roboto1">
                {/* Students should choose Edulinks for their loan guidance needs because we offer unparalleled expertise and
                personalized support throughout the entire loan process. Our key strengths include: */}
                {VisaJourney.introduction}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {VisaJourney.features.map((feature, index) => (
                    <ServiceCard key={index} title={feature.title} description={feature.description} />
                ))}
            </div>
        </section>
    );
};

export default PostLandingServices;

