import React from "react"
import hooks from "../../assets/hook.png"
import tick from "../../assets/tick.png"
import students from "../../assets/studentship.png"
import dailyhunt from "../../assets/dailyhunt.png"
import flipboard from "../../assets/flipboard.png"
import gepublic from "../../assets/gepublic.png"
import bulletin from "../../assets/bulletin.png"
import times from "../../assets/times.png"

export default function Home() {
  return (
    <main>
      <section
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/universitybackground-4RKQli29m4566lXOxt6ZGKMEsgFaXr.png')`,
        }}
        className="relative min-h-[600px] pt-20 pb-32 bg-center h-max bg-cover"
      >
        <div
          className="absolute bottom-0 left-0 w-full h-[35vh]"
          style={{
            background: `linear-gradient(180deg, 
        rgba(38, 185, 193, 0.2) 0%,
        rgba(38, 185, 193, 0.1) 50%,
        rgba(255, 255, 255, 0.95) 85%,
        rgba(255, 255, 255, 1) 100%
      )`,
          }}
        ></div>

        {/* Blur effect at the bottom */}
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: "100px",
            backdropFilter: "blur(25px)",
            background: "rgba(255, 255, 255, 0.3)",
            maskImage: "linear-gradient(to bottom, transparent, white)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, white)",
          }}
        ></div>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 pt-10 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-adramalech ">
                Connecting Students to Overseas Education Opportunities Using AI Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-xl">
                Our Ai-enabled solutions help International Students to choose the best global universities.
              </p>
              <button className="bg-white cursor-pointer text-black px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all">
                Try Now
              </button>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/university-eT9AESi8dQdL3uEkITEhSLX3SdOF5r.png"
                alt="AI Assistant with University"
                className="w-full max-w-[550px] mx-auto mt-[2vh] "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-6xl font-adramalech font-bold text-gray-800">Our Core </span>
            <span className="text-6xl font-adramalech font-bold text-[#26B9C1]">Strengths</span>
          </h2>
          <div className="grid md:grid-cols-3  gap-6">
            <div className="bg-[#E6FBFC] border border-[#37d7d9] rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#26B9C1] mb-2">800+</div>
              <div className="text-black font-extrabold font-roboto text-xl">Global University Tie-Ups</div>
            </div>
            <div className="bg-[#E6FBFC] border border-[#37d7d9] rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#26B9C1] mb-2">10K+</div>
              <div className="text-blacK font-extrabold text-xl font-roboto">Dreams Fulfilled</div>
            </div>
            <div className="bg-[#E6FBFC] rounded-lg border border-[#37d7d9] p-6 text-center">
              <div className="text-4xl font-bold text-[#26B9C1] mb-2">20+</div>
              <div className="text-black font-extrabold text-xl font-roboto">Years of Industry Presence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="text-center">
          <h2 className="text-3xl  font-bold">
            <p className="text-[#26B9C1] text-6xl font-adramalech">
              Edulinks Services <span className="text-black">For Universities </span>{" "}
            </p>
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boygirl-VQ8Ok9yTg8ofh3vqzoWcsDngYdZHfm.png"
                alt="Students"
                className="w-full max-w-[500px] mx-auto"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-adramalech font-semibold">How Edulinks can help Universities</h3>
              <p className="text-gray-600 text-xl font-roboto">
                Maximize your reach across geographies and watch your student recruitment gain without compromising in
                quality.
              </p>
              <p className="font-adramalech text-xl">Offerings</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src={hooks || "/placeholder.svg"}></img>
                  <span className="font-roboto text-lg">Recruit Students From Diverse Nationalities</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={hooks || "/placeholder.svg"}></img>
                  <span className="font-roboto text-lg">Edulinks Extensive Recruitment Network</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={hooks || "/placeholder.svg"}></img>
                  <span className="font-roboto text-lg">Enhance Brand Visibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#37d7d9]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">
                <span className="text-black text-4xl font-adramalech">Edulinks Multi Country Advantage</span>
                <br />
                <h1 className="text-black text-4xl font-adramalech">For Students</h1>
              </h1>
              <p className="text-black font-adramalech text-xl ">Study anywhere throughout the Globe with Edulinks!</p>
              <p className="text-black  font-roboto font-thin text-xl">
                Aspire for more. Choose what suits you the best from 800+ Global Universities in 33 Countries. The
                choices and opportunities our Universities offer are endless!
              </p>
              <div className="flex gap-x-2">
                <button className="text-black font-semibold text-lg hover:underline">Explore More </button>
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
            <div className="relative">
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
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-3xl font-bold text-black font-adramalech">Edulinks technology based platform</span>
            <br />
            <span className="text-xl text-[#26B9C1] font-adramalech">makes it easier for you to study abroad</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personstudy-YOtdi9pho7WWkDhNb10ZROpTRAqpiq.png"
                alt="Technology Platform"
                className="w-full max-w-[500px] mx-auto"
              />
            </div>
            <div className="space-y-4 text-gray-600">
              {[
                "Search Near Perfect, ‘eligible’ courses",
                "‘One’ application, ‘multiple’ courses & universities",
                "Project commissions and process applications",
                "Submit & manage unlimited applications",
                "Enhance revenues through ancillary services",
              ].map((text, index) => (
                <div key={index} className="flex gap-x-3 items-center">
                  <p className="pl-4 font-roboto text-lg">{text}</p>
                  <img className="w-5 h-5 flex-shrink-0" src={tick || "/placeholder.svg"} alt="Tick" />
                </div>
              ))}
              <button className="text-[#26B9C1] pl-[15vw] font-semibold font-roboto hover:underline">
                EduLink AI Assistant »
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#37d7d970]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-3xl font-bold text-black  font-adramalech">Edulinks</span>
            <span className="text-3xl font-bold text-[#37d7d9]  font-adramalech"> Study Partners</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/autt-0OTbVPfIagfULmguQRAl7OVXASmrfm.png"
              alt="AUT"
              className="h-16"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/witt-vgUfmXjkIp5F8DYERZx0fTH1RfwQjX.png"
              alt="WITT"
              className="h-16"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otago-AAEq24Zo9OH2GFQX9ZgA08NXT4v93H.png"
              alt="OTAGO"
              className="h-16"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wintec-lfszNfWflG3BxpZhLd7lswKykIJ1N2.png"
              alt="Wintec"
              className="h-16"
            />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-6xl font-bold text-black font-adramalech">Edulinks In the </span>
            <span className="text-6xl font-bold text-[#26B9C1] font-adramalech">news</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-[#26B9C1]/80 z-10"></div>
              <img
                src={students || "/placeholder.svg"}
                alt="Students"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-8 p-6">
                <img src={dailyhunt || "/placeholder.svg"} alt="Dailyhunt" className="h-12" />
                <img src={flipboard || "/placeholder.svg"} alt="Flipboard" className="h-12" />
                <img src={gepublic || "/placeholder.svg"} alt="Republic News India" className="h-12" />
                <img src={times || "/placeholder.svg"} alt="RD Times" className="h-12" />
                <img src={bulletin || "/placeholder.svg"} alt="The Indian Bulletin" className="h-12" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-adramalech font-semibold">Lorem Ipsum</h3>
              <p className="text-gray-600 font-roboto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div >
                <button className=" text-red-500 font-bold font-roboto   rounded-lg px-6 py-2 font-roboto">
                  Read More
                </button>
                <div >
                  <p className="font-roboto font-bold pl-[2vw]">- Dailyhunt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#E6FBFC]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-6xl font-bold text-black font-adramalech">Contact </span>
            <span className="text-6xl font-bold text-[#26B9C1] font-adramalech">Us</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-roboto text-center mb-6">
                Trusted Expertise for Your International Goals
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      className="w-24 px-2 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      defaultValue="+91"
                    >
                      <option value="+91">+91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Mobile*"
                      className="flex-1 px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
              
                </div>
                <div>
                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="City*"
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Age*"
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Occupation*"
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Country Interested in*
                      </option>
                      <option value="nz">New Zealand</option>
                      <option value="au">Australia</option>
                      <option value="uk">United Kingdom</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className="w-full px-4 py-2 border border-[#37d7d9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B9C1]"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Visa Categories Interested in*
                      </option>
                      <option value="student">Student Visa</option>
                      <option value="work">Work Visa</option>
                      <option value="pr">Permanent Residency</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#26B9C1] text-white py-3 rounded-md font-roboto hover:bg-[#37d7d9] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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

