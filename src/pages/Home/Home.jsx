import React from "react"
import rarrow from "../../assets/rarrow.png"
import bighook from "../../assets/bighook.png"
import roundhook from "../../assets/roundhook.svg"
import tick from "../../assets/tick.png"
import universitybg from "../../assets/universitybackground.png"
import robot from "../../assets/robot.png"
import blur from "../../assets/blur.png"
import nzs from '../../assets/nzs.png'
import { useNavigate } from "react-router-dom"
export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="overflow-x-hidden">
      <div className="relative">
        <section
          style={{
            backgroundImage: `url(${universitybg})`,
          }}
          className="relative min-h-screen pt-20 pb-32 bg-center bg-cover
                     lg:min-h-[800px] xl:min-h-[70vh]"
        >
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="lg:flex items-center justify-between">
              <div className="text-white space-y-6 lg:w-1/2 xl:w-[55%]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[58px] font-light font-adramalech leading-tight mb-8">
                  Discover Your Dream Career Using Edulinks AI Assistance
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] font-roboto font-bold leading-relaxed max-w-2xl">
                  Our platform helps Launch Your Career aspirations with Tailored Programs, Perfect University Matches,
                  and Expert Visa Support.
                </p>
                <button
                  onClick={() => navigate("/edulinks-ai-assistant")}
                  className="bg-white text-black font-roboto font-medium text-lg sm:text-xl md:text-2xl px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Try Now
                </button>
              </div>
              <div className="lg:w-1/2 xl:w-[45%] mt-8 lg:mt-0">
                <img
                  className="w-full max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] mx-auto"
                  src={robot || "/placeholder.svg"}
                  alt="AI Assistant Robot"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="relative">
          <img
            src={blur || "/placeholder.svg"}
            alt="Blur Effect"
            className="w-full h-auto absolute bottom-0 left-0 transform translate-y-1/2 z-10"
          />
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <h2 className="text-center mb-12">
            <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-adramalech font-medium text-gray-800">
              Our Core{" "}
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-adramalech font-medium text-[#37d7d9]">
              Strengths
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { number: "800+", text: "Global University Tie-Ups" },
              { number: "10K+", text: "Dreams Fulfilled" },
              { number: "20+", text: "Years Of Industry Presence" },
            ].map((stat, index) => (
              <div key={index} className="bg-[#E6FBFC] border border-[#37d7d9] rounded-lg p-6 text-center">
                <div className="text-4xl sm:text-5xl lg:text-[48px] font-roboto font-bold text-[#37d7d9] mb-2">
                  {stat.number}
                </div>
                <div className="text-black font-medium font-roboto text-xl sm:text-2xl lg:text-[24px]">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <h2 className="text-center mb-12 text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-bold">
            <span className="text-[#37d7d9] font-adramalech font-normal">Edulinks Services</span>{" "}
            <span className="text-black font-adramalech font-normal">For Universities</span>
          </h2>
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boygirl-VQ8Ok9yTg8ofh3vqzoWcsDngYdZHfm.png"
                alt="Students"
                className="w-full max-w-[500px] mx-auto"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-adramalech font-normal">
                How Edulinks can help Universities
              </h3>
              <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl xl:text-[26px] font-roboto1">
                Maximize your reach across geographies and exceed your student recruitment goals without compromising on
                quality.
              </p>
              <p className="font-adramalech text-xl sm:text-2xl lg:text-[24px]">Offerings</p>
              <div className="space-y-4">
                {[
                  "Recruit Students From Diverse Nationalities",
                  "Edulinks Extensive Recruitment Network",
                  "Enhance Brand Visibility",
                ].map((offering, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img src={roundhook || "/placeholder.svg"} className="w-6 h-6" alt="" />
                    <span className="font-roboto1 text-lg sm:text-xl lg:text-2xl">{offering}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-[#37d7d970]">
        <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[500vw] mx-auto px-4 sm:px-6 md:px-8 lg:px-[10vw]">
          {/* Container switches between flex-col and grid based on breakpoint */}
          <div className="flex flex-col md:flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Text content - centers on medium, aligns left on large */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl w-[78vw] sm:w-[80vw]  md:text-center lg:text-left lg:text-4xl xl:text-[44px] md:w-full lg:w-auto xl:w-[89vw] font-bold">
                <span className="text-black font-adramalech font-[400] block">Edulinks Multi Country Advantage</span>
                <span className="text-black font-adramalech leading-relaxed font-[400] block">For Students</span>
              </h1>
              <p className="text-black font-adramalech text-xl sm:text-2xl md:text-center lg:text-left xl:w-[70vw] md:text-3xl lg:text-[23.5px]">
                Study anywhere throughout the Globe with Edulinks!
              </p>
              <div className="h-auto sm:h-[80px] md:h-[100px] lg:h-[111px] w-full lg:w-[553px]">
                <p className="text-black font-roboto1 text-base sm:text-lg md:text-xl md:text-center lg:text-left lg:text-[22px] xl:text-[23.5px]">
                  Aspire for more. Choose what suits you the best from 800+ Global Universities in 33 Countries. The
                  choices and opportunities our Universities offer are endless!
                </p>
              </div>
              <div className="flex gap-x-2 items-center md:justify-center lg:justify-start">
                <button className="text-black font-roboto text-base sm:text-lg md:text-xl lg:text-2xl hover:underline">
                  Explore More{" "}
                </button>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            {/* Image - centered on medium, moves to right on large */}
            <div className="relative mt-8 md:mt-4 lg:mt-0 md:w-full lg:w-auto lg:ml-[9vw] xl:ml-[8vw]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abroads-2YKO4gzVKtXMPgbuqYaB8ClE0gOGv2.png"
                alt="Study Destinations"
                className="w-full max-w-[500px] mx-auto md:max-w-[600px] lg:max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Technology Platform Section */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20  bg-white">
        <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[93%] lg:max-w-full  xl:mx-[3vw] ">
          <div className="flex flex-col xl:flex-row items-center mb-8 sm:mb-10  md:mb-12 ">
            <img
              className="h-[80px] hidden xl:block w-[180px] sm:h-[100px] sm:w-[220px] md:h-[116px] md:w-[253px] mb-4 xl:mb-0"
              src={bighook || "/placeholder.svg"}
              alt="Big Hook"
            />
            <h2 className="text-center pl-[6  vw] xl:text-left xl:pl-[16vw] leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] text-black font-adramalech font-[400] block mb-2 sm:mb-3 md:mb-4">
                Edulinks technology based platform
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] xl:ml-[-5vw] text-[#37d7d9] font-[400] font-adramalech pr-0 sm:pr-2 md:pr-3 lg:pr-4 xl:pr-[4vw]">
                makes it easier for you to study abroad
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10  md:gap-12 lg:gap-14 xl:pl-14  items-center">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personstudy-YOtdi9pho7WWkDhNb10ZROpTRAqpiq.png"
                alt="Technology Platform"
                className="w-full max-w-[400px] sm:max-w-[550px]  md:mx-10  md:max-w-[1200px] lg:max-w-[370px] xl:max-w-[558px]  h-auto mx-5"
              />
            </div>
            <div className="space-y-4 text-gray-600 mx-5 md:mx-12 lg:mx-0 xl:pr-24">
              {[
                "Search Near Perfect, 'eligible' courses",
                "'One' application, 'multiple' courses & universities",
                "Project commissions and process applications",
                "Submit & manage unlimited applications",
                "Enhance revenues through ancillary services",
              ].map((text, index) => (
                <div key={index} className="flex  xl:justify-end gap-3 items-center">
                  <p className="font-roboto1 text-black text-sm sm:text-lg md:text-xl  xl:text-[24px]">{text}</p>
                  <img className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" src={tick || "/placeholder.svg"} alt="Tick" />
                </div>
              ))}
              <div>
                <button className="text-[#37d7d9] flex  text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[22px] font-[400] font-roboto hover:underline xl:pl-[20vw]">
                  EduLinks AI Assistant
                  <img className="mt-2 ml-3 h-[12px] w-[12px]" src={rarrow || "/placeholder.svg"} alt="Right Arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-[#37d7d970]">
        <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1400px] mx-auto px-4">
          <h2 className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold text-black  font-adramalech">
              Edulinks
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-[400] text-[#37d7d9]  font-adramalech">
              {" "}
              Study Partners
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 xl:px-[3vw]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/autt-0OTbVPfIagfULmguQRAl7OVXASmrfm.png"
              alt="AUT"
              className="h-auto w-full max-w-[150px] sm:max-w-[170px] md:max-w-[191px] mx-auto"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/witt-vgUfmXjkIp5F8DYERZx0fTH1RfwQjX.png"
              alt="WITT"
              className="h-auto w-full max-w-[150px] sm:max-w-[170px] md:max-w-[191px] mx-auto"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otago-AAEq24Zo9OH2GFQX9ZgA08NXT4v93H.png"
              alt="OTAGO"
              className="h-auto w-full max-w-[150px] sm:max-w-[170px] md:max-w-[191px] mx-auto"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wintec-lfszNfWflG3BxpZhLd7lswKykIJ1N2.png"
              alt="Wintec"
              className="h-auto w-full max-w-[150px] sm:max-w-[170px] md:max-w-[191px] mx-auto"
            />
            <img
              src={nzs}
              alt="Wintec"
              className="h-auto w-full max-w-[150px] sm:max-w-[170px] md:max-w-[191px] mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}

      {/* Background Decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] sm:h-[300px] md:h-[400px] bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/universitybackground-4RKQli29m4566lXOxt6ZGKMEsgFaXr.png')`,
        }}
      ></div>
    </main>
  )
}

