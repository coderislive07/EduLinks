import { Aeroplane_Logo, EduMoney_Logo, Education_Logo, Person_Logo, Link_Logo, Money_Logo, Edu_Link } from "../../assets"
import React from "react"
import { Card, CardContent } from "../../components/ui/card"
import { Link } from "react-router-dom"
import StudyDestinations from "../../components/StudyDestination"

const services = [
  {
    icon: Education_Logo,
    title: ["Study", " Visa"],
    description: "Edulinks offers comprehensive Study Visa services designed t...",
  },
  {
    icon: Person_Logo,
    title: ["Personalised", "Career Guidance"],
    description: "Edulinks offers comprehensive Personalized Career Guidanc...",
  },
  {
    icon: Link_Logo,
    title: ["Edulinks", " AI Jackpot"],
    description: "Edulinks AI Assistant offers personalized support for stud...",
  },
  {
    icon: EduMoney_Logo,
    title: ["Scholarship", " Assessment"],
    description: "Edulinks offers comprehensive Scholarship Assessment servi...",
  },
  {
    icon: Money_Logo,
    title: ["Loan", " Guidance"],
    description: "Edulinks offers comprehensive Loan Guidance services desi...",
  },
  {
    icon: Aeroplane_Logo,
    title: ["Post Landing", " Services"],
    description: "Edulinks offers comprehensive Post-Landin...",
  },
]

export default function ServiceGrid() {
  return (
    <>
      <section className="relative w-full pt-32 md:top-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 h-[400px] md:h-[550px] "
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-people-working-office%202-FDj9qcHnx6R587z8rv6k85UDrDVt1j.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 " />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          {/* Heading Section */}
          <div className="container mx-auto px-4 md:py-16 lg:py-[11rem]">
            <div className="flex justify-center mb-16">
              <h2 className="text-4xl md:text-6xl text-black font-extrabold font-roboto border-4  border-[#37D7D9] flex justify-center items-center gap-4  ">
                <span className="text-black pl-2">OUR </span>
                <span className="bg-[#37D7D9] text-white px-4 h-full flex justify-center items-center">SERVICES</span>
              </h2>
            </div>
          </div>

          {/* Cards Grid Section */}
          <div className="container mx-auto px-4 min-h-screen relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center relative">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-[2px] rounded-none flex justify-center items-center border-b-[20px] border-[#37D7D9] 
                                             h-auto min-h-[426px] w-full max-w-[382px] hover:shadow-md transition-shadow bg-white relative"
                >
                  <CardContent className="p-6 flex flex-col items-left w-full">
                    <img src={service.icon || "/placeholder.svg"} alt="" className="w-[106px] h-[106px] mb-4" />
                    <h3 className="text-[24px] font-serif font-semibold">{service.title[0]}</h3>
                    <h3 className="text-[24px] font-serif font-semibold mb-2">{service.title[1]}</h3>
                    <p className="text-gray-600 mb-4 text-base md:text-xl">{service.description}</p>
                    <Link
                      to="#"
                      className="text-cyan-400 hover:text-cyan-500  text-sm font-medium inline-flex items-center justify-center mt-auto  w-[119px] h-[35px] shadow-inner"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    
                  </CardContent>
                  <img src={Edu_Link} alt="" className="absolute right-0 bottom-0" />
                </Card>
              ))}
            </div>
          </div>

       
        </div>
      </section>
      <div className="bg-[#37D7D9] mt-44">
      <StudyDestinations />
      </div>
    </>
  )
}

