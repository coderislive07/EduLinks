import React from "react"
import Pricipals from "../../assets/services/pricipals.svg"
import el1 from "../../assets/services/el1.svg"
import el2 from "../../assets/services/el2.svg"
import el3 from "../../assets/services/el3.svg"
import el4 from "../../assets/services/el4.svg"
import Edulink2 from "../../assets/services/edulink2.svg"

const PrincipalItem = ({ icon, title, description }) => {
    return (
        <div className="flex items-center gap-4 mb-8 relative ">
            <div className="flex-shrink-0 w-12 h-12 bg-[#21F0F0] rounded-full flex items-center justify-center">
                <img src={icon} alt="" />
            </div>
            <div>
                <h3 className="font-medium mb-1 font-roboto lg:text-[24px]">{title}</h3>
                <p className="text-gray-600 text-sm leading-snug font-roboto1 lg:text-[24px] max-w-[27rem]">{description}</p>
            </div>
        </div>
    )
}

const StudentCentricPrincipals = () => {
    const principals = [
        {
            icon: el1,
            title: "Tailored Career Counseling:",
            description: "Customized advice to help students choose the best academic programs and institutions.",
        },
        {
            icon: el2,
            title: "Scholarship Opportunities:",
            description: "Expert matching with scholarships to increase chances of receiving financial aid.",
        },
        {
            icon: el3,
            title: "Financial Aid Solutions:",
            description: "Guidance on education loans and assistance with the application process.",
        },
        {
            icon: el4,
            title: "Comprehensive Arrival Support:",
            description: "Post-arrival services including orientation and housing assistance.",
        },
    ]

    return (
        <section className="mx-auto py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <img src={Pricipals} alt="" />
                <img src={Edulink2} alt="" className="absolute right-0" />
                <div>
                    <h2 className="text-3xl md:text-[2.25rem]  lg:text-[48px] leading-snug font-medium mb-8">
                        4 Edulinks Principals For Student Centric Approach
                    </h2>
                    {principals.map((principal, index) => (
                        <PrincipalItem
                            key={index}
                            icon={principal.icon}
                            title={principal.title}
                            description={principal.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StudentCentricPrincipals
