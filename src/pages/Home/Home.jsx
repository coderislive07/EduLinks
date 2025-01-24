import React from "react"
import hooks from "../../assets/hook.png"
import roundhook from '../../assets/roundhook.svg'
import tick from "../../assets/tick.png"
import homebg from "../../assets/homebg.jpg"
export default function Home() {
  return (
    <main>
<section
  style={{
    backgroundImage: `url(${homebg})`,
  }}
  className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] pt-20 pb-32 bg-center h-max bg-cover"
>
  <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1400px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 items-center">
      <div className="text-white space-y-6 px-4 sm:px-6 md:px-8 lg:px-32 w-full lg:w-[72vw] xl:px-36 xl:w-[62vw]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-light lg:mt-[7vh] xl:mt-[16vh] font-adramalech lg:leading-[1.1] mb-8">
          Discover Your Dream Career Using Edulinks AI Assistance
        </h1>
        <p className="text-base sm:text-lg md:text-[22px] lg:text-[26px] font-roboto font-[700] leading-8 sm:leading-9 md:leading-10 max-w-xl xl:pb-[2vh]">
          Our platform helps Launch Your Career aspirations with Tailored Programs, Perfect University Matches, and Expert Visa Support.
        </p>
        <button className="bg-white text-black font-roboto font-medium text-base sm:text-lg md:text-[20px] lg:text-[24px] px-4 sm:px-[15px] md:px-[17px] py-2 sm:py-[10px] md:py-[11px] rounded-[8px] cursor-pointer hover:bg-opacity-90 transition-all">
          Try Now
        </button>
      </div>
      <div></div>
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[10vw]">
          <h2 className="text-center mb-12">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-adramalech font-medium text-gray-800">
              Our Core{" "}
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-adramalech font-medium text-[#26B9C1]">
              Strengths
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
            <div className="bg-[#E6FBFC] border border-[#37d7d9] rounded-lg p-6 text-center">
              <div className="text-[48px]  font-roboto font-bold text-[#26B9C1] mb-[5px]">800+</div>
              <div className="text-black font-medium font-roboto text-[24px]">Global University Tie-Ups</div>
            </div>
            <div className="bg-[#E6FBFC] border border-[#37d7d9] rounded-lg p-6 text-center">
              <div className="text-[48px]  font-roboto font-bold text-[#26B9C1] mb-[5px]">10K+</div>
              <div className="text-black font-medium font-roboto text-[24px]">Dream Fulfilled</div>
            </div>
            <div className="bg-[#E6FBFC] border border-[#37d7d9] rounded-lg p-6 text-center">
              <div className="text-[48px]  font-roboto font-bold text-[#26B9C1] mb-[5px]">20+</div>
              <div className="text-black font-medium font-roboto text-[24px]">Years Of Industry Presence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="text-center">
          <h2 className="text-3xl  font-bold">
            <p className="text-[#26B9C1] text-[48px] font-adramalech font-normal">
              Edulinks Services <span className="text-black">For Universities </span>{" "}
            </p>
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:-space-x-14 items-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boygirl-VQ8Ok9yTg8ofh3vqzoWcsDngYdZHfm.png"
                alt="Students"
                className="w-full max-w-[500px] mx-auto"
              />
            </div>
            <div className="space-y-6 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:-pt-[20vh]">
              <h3 className="text-3xl font-adramalech font-semibold">How Edulinks can help Universities</h3>
              <p className="text-gray-600 text-xl font-roboto1">
                Maximize your reach across geographies and exceed your student recruitment goals without compromising on
                quality.
              </p>
              <p className="font-adramalech text-xl">Offerings</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src={roundhook || "/placeholder.svg"}></img>
                  <span className="font-roboto1 text-lg">Recruit Students From Diverse Nationalities</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={roundhook || "/placeholder.svg"}></img>
                  <span className="font-roboto1 text-lg">Edulinks Extensive Recruitment Network</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={roundhook || "/placeholder.svg"}></img>
                  <span className="font-roboto1 text-lg">Enhance Brand Visibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#37d7d970]">
        <div className="max-w-[1400px] mx-auto px-[9vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 w-full sm:w-[80vw] md:w-[70vw] lg:w-[65vw] xl:w-[60vw]">
              <h1 className="text-3xl font-bold">
                <span className="text-black text-4xl xl:text-[48px] font-adramalech  font-[400]">
                  Edulinks Multi Country Advantage
                </span>
                <br />
                <h1 className="text-black text-4xl font-adramalech xl:text-[48px] leading-relaxed font-[400]">
                  For Students
                </h1>
              </h1>
              <p className="text-black font-adramalech text- xl:text-[26px] ">
                Study anywhere throughout the Globe with Edulinks!
              </p>
              <div className="h-auto sm:h-[80px] md:h-[100px] lg:h-[111px] w-full sm:w-[80%] md:w-[70%] lg:w-[553px]">
                <p className="text-black  font-roboto1  text-xl xl:text-[24px]">
                  Aspire for more. Choose what suits you the best from 800+ Global Universities in 33 Countries. The
                  choices and opportunities our Universities offer are endless!
                </p>
              </div>

              <div className="flex gap-x-2">
                <button className="text-black font-roboto text-lg hover:underline">Explore More </button>
                <svg
                  className="w-5 h-5 mt-[0.6vh] text-gray-800 dark:text-white"
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
            <div className="relative pl-0 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-[7vw]">
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
      <section className="py-16 bg-white">
        <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1295px]  mx-auto px-4">
          <h2 className="text-center mb-12 xl:ml-52 leading-loose">
            <span className="text-3xl sm:text-4xl md:text-5xl xl:text-[48px] text-black font-adramalech  font-[400]">
              Edulinks technology based platform
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl xl:text-[48px] text-[#26B9C1] font-[400] font-adramalech pr-0 sm:pr-2 md:pr-3 lg:pr-4 xl:pr-[4vw] ">
              makes it easier for you to study abroad
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personstudy-YOtdi9pho7WWkDhNb10ZROpTRAqpiq.png"
                alt="Technology Platform"
                className="w-[558px] h-[427px] mx-auto"
              />
            </div>
            <div className="space-y-4 text-gray-600 ">
  {[
    "Search Near Perfect, ‘eligible’ courses",
    "‘One’ application, ‘multiple’ courses & universities",
    "Project commissions and process applications",
    "Submit & manage unlimited applications",
    "Enhance revenues through ancillary services",
  ].map((text, index) => (
    <div key={index} className="flex justify-between items-center">
      <p className="font-roboto1 text-black text-[24px]">{text}</p>
      <img className="w-5 h-5 flex-shrink-0" src={tick || "/placeholder.svg"} alt="Tick" />
    </div>
  ))}
  <button className="text-[#26B9C1] text-lg sm:text-xl md:text-2xl xl:text-[22px] font-[400] font-roboto hover:underline">
    EduLink AI Assistant »
  </button>
</div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-[#37d7d970]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-3xl xl:text-[48px] font-bold text-black  font-adramalech">Edulinks</span>
            <span className="text-3xl xl:text-[48px] font-bold text-[#37d7d9]  font-adramalech"> Study Partners</span>
          </h2>
          <div className="grid grid-cols-2 xl:px-[6vw] sm:grid-cols-3 md:grid-cols-4 gap-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/autt-0OTbVPfIagfULmguQRAl7OVXASmrfm.png"
              alt="AUT"
              className="h-auto w-full max-w-[191px] mx-auto"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/witt-vgUfmXjkIp5F8DYERZx0fTH1RfwQjX.png"
              alt="WITT"
              className="h-auto w-full max-w-[191px] mx-auto"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otago-AAEq24Zo9OH2GFQX9ZgA08NXT4v93H.png"
              alt="OTAGO"
              className="h-auto w-full max-w-[191px] mx-auto"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wintec-lfszNfWflG3BxpZhLd7lswKykIJ1N2.png"
              alt="Wintec"
              className="h-auto w-full max-w-[191px] mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}

      {/* Background Decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[400px] bg-cover bg- opacity-10"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/universitybackground-4RKQli29m4566lXOxt6ZGKMEsgFaXr.png')`,
        }}
      ></div>
    </main>
  )
}

