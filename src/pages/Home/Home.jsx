import React from "react"
import rarrow from "../../assets/rarrow.png"
import bighook from "../../assets/bighook.png"
import roundhook from "../../assets/roundhook.svg"
import tick from "../../assets/tick.png"
import universitybg from "../../assets/universitybackground.png"
import robot from "../../assets/robot.png"
import blur from "../../assets/blur.png"

export default function Home() {
  return (
    <main>
      <div className="relative">
        <section
          style={{
            backgroundImage: `url(${universitybg})`,
          }}
          className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-screen xl:h-[70vh]  pt-20 pb-32 bg-center bg-cover"
        >
          <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[100%] mx-auto">
            <div className="lg:flex items-center">
              <div className="text-white space-y-6 px-4 pt-14 sm:px-6 md:px-8 lg:px-12 xl:px-36 w-full lg:w-[60%] xl:w-[70%]">
                <h1 className="text-3xl xl:w-[41vw] sm:text-4xl md:text-5xl lg:text-[58px] font-light lg:mt-[7vh] xl:mt-[-14vh] font-adramalech lg:leading-[1.1] mb-8">
                  Discover Your Dream Career Using Edulinks AI Assistance
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] font-roboto font-[700] leading-7 sm:leading-8 md:leading-9 lg:leading-10 max-w-xl xl:pb-[2vh]">
                  Our platform helps Launch Your Career aspirations with Tailored Programs, Perfect University Matches,
                  and Expert Visa Support.
                </p>
                <button className="bg-white text-black font-roboto font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] px-4 sm:px-5 md:px-2 lg:px-6 py-2 sm:py-3 md:py-3.5 lg:py-2 rounded-[8px] cursor-pointer hover:bg-opacity-90 transition-all">
                  Try Now
                </button>
              </div>
              <div className="lg:w-[40%]  xl:w-[40%] mt-8 lg:mt-[10vh] xl:mr-[45vw]">
                <img
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[1073px] xl:w-[451px] "
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
      <section className="py-12 sm:py-14  md:py-16 lg:py-20 bg-white relative z-20">
        <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[1400px] mx-auto px-4 sm:px-6 md:px-2 lg:px-10 xl:px-[10vw]">
          <h2 className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-adramalech font-medium text-gray-800">
              Our Core{" "}
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-adramalech font-medium text-[#37d7d9]">
              Strengths
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3   gap-6">
            <div className="bg-[#E6FBFC] border border-[#37d7d9]  rounded-lg p-4 sm:p-5 md:px-6  text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-roboto font-bold text-[#37d7d9] mb-2 sm:mb-3 md:mb-[5px]">
                800+
              </div>
              <div className="text-black font-medium font-roboto text-lg sm:text-xl md:text-2xl lg:text-[24px]">
                Global University Tie-Ups
              </div>
            </div>
            <div className="bg-[#E6FBFC] border border-[#37d7d9] rounded-lg p-4 sm:p-5 md:p-6 text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-roboto font-bold text-[#37d7d9] mb-2 sm:mb-3 md:mb-[5px]">
                10K+
              </div>
              <div className="text-black font-medium font-roboto text-lg sm:text-xl md:text-2xl lg:text-[24px]">
                Dream Fulfilled
              </div>
            </div>
            <div className="bg-[#E6FBFC] border border-[#37d7d9] rounded-lg p-4 sm:p-5 md:p-6 text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-roboto font-bold text-[#37d7d9] mb-2 sm:mb-3 md:mb-[5px]">
                20+
              </div>
              <div className="text-black font-medium font-roboto text-lg sm:text-xl md:text-2xl lg:text-[24px]">
                Years Of Industry Presence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-white">
  <div className="text-center mb-8 sm:mb-10 md:mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold">
      <p className="text-[#37d7d9] font-adramalech font-normal">
        Edulinks Services <span className="text-black">For Universities </span>{" "}
      </p>
    </h2>
  </div>
  <div className="max-w-[90%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[1200px] xl:max-w-[1400px]  mx-20vw">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pr-0 sm:pr-0 md:pr-40 lg:pr-72 xl:pr-0 items-center">
      <div className="relative mb-8 lg:mb-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boygirl-VQ8Ok9yTg8ofh3vqzoWcsDngYdZHfm.png"
          alt="Students"
          className="w-full max-w-[500px] sm:mx-[15vw] md:mx-[5vw] lg:mx-[10vw]"
        />
      </div>
      <div className="relative space-y-4 sm:space-y-5 pl-10 sm:pl-20 md:space-y-6 pt-4 sm:pt-6 md:pt-8 md:w-[50vw] lg:pt-[10vh]">
        <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-[36px] font-adramalech font-normal">
          How Edulinks can help Universities
        </h3>
        <p className="text-gray-600 text-base sm:text-base md:text-lg lg:text-2xl xl:text-[26px] font-roboto1">
          Maximize your reach across geographies and exceed your student recruitment goals without compromising on
          quality.
        </p>
        <p className="font-adramalech text-lg sm:text-xl md:text-2xl lg:text-[24px]">Offerings</p>
        <div className="flex relative">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <img src={roundhook || "/placeholder.svg"} className="w-5 h-5 sm:w-6 sm:h-6"></img>
              <span className="font-roboto1 text-base sm:text-lg md:text-xl lg:text-2xl">
                Recruit Students From Diverse Nationalities
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img src={roundhook || "/placeholder.svg"} className="w-5 h-5 sm:w-6 sm:h-6"></img>
              <span className="font-roboto1 text-base sm:text-lg md:text-xl lg:text-2xl">
                Edulinks Extensive Recruitment Network
              </span>
            </div>
            <div className="flex items-center gap-3 relative">
              <img src={roundhook || "/placeholder.svg"} className="w-5 h-5 sm:w-6 sm:h-6"></img>
              <span className="font-roboto1 text-base sm:text-lg md:text-xl lg:text-2xl">
                Enhance Brand Visibility
              </span>
              <img
                className="absolute hidden xl:block sm:top-[-50px] sm:right-[-60px] lg:top-[-10px] lg:left-[18vw]  z-50"
                src={bighook}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-[#37d7d970]">
        <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[500vw] mx-auto px-4 sm:px-6 md:px-8 lg:px-[9vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="space-y-4  sm:space-y-5 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl  w-[78vw] sm:w-[80vw] lg:text-4xl xl:text-[48px]  xl:w-[90vw] font-bold">
                <span className="text-black font-adramalech font-[400]">Edulinks Multi Country Advantage</span>
                <br />
                <span className="text-black font-adramalech leading-relaxed  font-[400]">For Students</span>
              </h1>
              <p className="text-black font-adramalech text-xl sm:text-2xl xl:w-[70vw] md:text-3xl lg:text-[26px]">
                Study anywhere throughout the Globe with Edulinks!
              </p>
              <div className="h-auto sm:h-[80px] md:h-[100px] lg:h-[111px] w-full lg:w-[553px]">
                <p className="text-black font-roboto1 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px]">
                  Aspire for more. Choose what suits you the best from 800+ Global Universities in 33 Countries. The
                  choices and opportunities our Universities offer are endless!
                </p>
              </div>
              <div className="flex gap-x-2 items-center">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0 lg:ml-[9vw] xl:ml-[8vw]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abroads-2YKO4gzVKtXMPgbuqYaB8ClE0gOGv2.png"
                alt="Study Destinations"
                className="w-full max-w-[500px] mx-auto"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10  md:gap-12 lg:gap-14 xl:pl-36  items-center">
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
                  EduLink AI Assistant
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
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold text-[#37d7d9]  font-adramalech">
              {" "}
              Study Partners
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 xl:px-[6vw]">
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

