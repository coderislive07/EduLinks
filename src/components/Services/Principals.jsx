import React from "react"

import { GraduationCap, Coins, PiggyBank, Home } from "lucide-react"

const PrincipalItem = ({ icon, title, description }) => {
    return (
        <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-[#21F0F0] rounded-full flex items-center justify-center">
                {React.cloneElement(icon, { size: 24, className: "text-white" })}
            </div>
            <div>
                <h3 className="font-medium mb-1 font-roboto lg:text-[24px]">{title}</h3>
                <p className="text-gray-600 text-sm leading-snug font-roboto1 lg:text-[24px]">{description}</p>
            </div>
        </div>
    )
}

const StudentCentricPrincipals = () => {
    const principals = [
        {
            icon: <GraduationCap />,
            title: "Tailored Career Counseling:",
            description: "Customized advice to help students choose the best academic programs and institutions.",
        },
        {
            icon: <Coins />,
            title: "Scholarship Opportunities:",
            description: "Expert matching with scholarships to increase chances of receiving financial aid.",
        },
        {
            icon: <PiggyBank />,
            title: "Financial Aid Solutions:",
            description: "Guidance on education loans and assistance with the application process.",
        },
        {
            icon: <Home />,
            title: "Comprehensive Arrival Support:",
            description: "Post-arrival services including orientation and housing assistance.",
        },
    ]

    return (
        <section className=" mx-auto  py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-2 gap-4 bg-[#E3F9F9] p-8 rounded-[48px]">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="relative aspect-square">
                            <img src="/placeholder.svg" alt={`Student ${i + 1}`} fill className="object-cover rounded-3xl" />
                        </div>
                    ))}
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-[48px] leading-loose font-medium mb-8">4 Edulinks Principals For Student Centric Approach</h2>
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
