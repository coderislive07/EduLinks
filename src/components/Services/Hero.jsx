import React from "react"

export default function HeroSection({ Image , Text1 , Text2 , Text3 , variable, Text4 }) {
  const stats = [
    {
      number: "800+",
      text: "Global University",
      subtext: "Tie-Ups",
    },
    {
      number: "10K+",
      text: "Dream",
      subtext: "Fulfilled",
    },
    {
      number: "20+",
      text: "Years of Industry",
      subtext: "Presence",
    },
  ]

  return (
    <div className="container mx-auto max-w-7xl px-4   flex items-center justify-center ">
      <div className="flex flex-col-reverse lg:flex-row  items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  leading-tight ">
            <span className="block">{Text1}</span>
            <p className={`  ${variable ? 'flex w-96 justify-center ' : 'inline-block'}`} >{Text2} </p><span className="border-none">{Text4}</span>
            <span className="block">{Text3}</span>
          </h1>

          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#E9FFFF] border border-[#37D7D9] p-4 rounded-lg text-center hover:shadow-lg transition-shadow font-roboto">
                <div className="text-[32px] md:text-3xl font-bold text-[#00E5FF] ">{stat.number}</div>
                <div className="text-[20px] md:text-base">
                  {stat.text}
                  <br />
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <img
            src= {Image}
            alt="Graduate Student"
            // width={600}
            // height={600}
            className="w-full h-auto bg-white"
            // priority
          />

          {/* Floating Icons */}
       
        </div>
      </div>
    </div>
  )
}

