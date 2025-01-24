import { Aeroplane_Logo, EduMoney_Logo, Education_Logo, Person_Logo, Link_Logo, Money_Logo } from "@/assets";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
// import { GraduationCap, Compass, Link2, Award, Landmark, Plane } from "npm";
import { Link } from "react-router-dom";
// import Aeroplane_Logo from "./Aeroplane_Logo.png";
import StudyDestinations from "../../components/StudyDestination";
import ContactForm from "../../components/ContactForm";

const services = [
    {
        icon: Education_Logo,
        title: ["Study" , " Visa"],
        description: "Edulinks offers comprehensive Study Visa services designed t...",
    },
    {
        icon: Person_Logo,
        title: ["Personalised","Career Guidance"],
        description: "Personalized Career Guidanc...",
    },
    {
        icon: Link_Logo,
        title: ["Edulinks"," AI Jackpot"],
        description: "Edulinks AI Assistant offers personalized support for stud...",
    },
    {
        icon: EduMoney_Logo,
        title: ["Scholarship"," Assessment"],
        description: "Edulinks offers comprehensive Scholarship Assessment servi...",
    },
    {
        icon: Money_Logo,
        title: ["Loan"," Guidance"],
        description: "Edulinks offers comprehensive Loan Guidance services desi...",
    },
    {
        icon: Aeroplane_Logo,
        title: ["Post Landing"," Services"],
        description: "Edulinks offers comprehensive Post-Landin...",
    },
];

export default function ServiceGrid() {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <Card key={index} className="border-[2px] rounded-none flex justify-center items-center  border-b-[20px] border-[#37D7D9] h-[426px] w-[382px] hover:shadow-md transition-shadow">
                        <CardContent className="p-6 flex flex-col items-left ">
                            {/* <div className="mb-4">{service.icon}</div> */}
                            <img src={service.icon} alt="" className="w-[106px] h-[106px]" />
                            <h3 className="text-[24px] font-serif font-semibold  ">{service.title[0]}</h3>
                            <h3 className="text-[24px] font-serif font-semibold mb-2 ">{service.title[1]}</h3>
                            <p className="text-gray-600 mb-4 text-xl">{service.description}</p>
                            <Link to="#" className="text-cyan-400 hover:text-cyan-500 text-sm font-medium inline-flex items-center">
                                Read More
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <StudyDestinations />
            <ContactForm />
        </div>
    );
}