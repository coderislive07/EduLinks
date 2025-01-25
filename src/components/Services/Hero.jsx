import React from "react"

export default function HeroSection({ Image }) {
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
    <div className="container mx-auto max-w-7xl px-4 py-12 min-h-screen flex items-center justify-center">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  leading-tight">
            <span className="block">Study</span>
            <span className="inline-block border-2 border-[#00E5FF] px-2">Abroad</span>
            <span className="block">Is Easy With Us</span>
          </h1>

          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#E5FFFF] p-4 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-[#00E5FF]">{stat.number}</div>
                <div className="text-sm md:text-base">
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
            className="w-full h-auto"
            // priority
          />

          {/* Floating Icons */}
       
        </div>
      </div>
    </div>
  )
}

