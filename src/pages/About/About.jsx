import { useEffect, useRef } from "react"
import herogirl from "../../assets/heroimagegirl.png"
import people from "../../assets/people.png"
import vision from "../../assets/vision.png"
import blurr from "../../assets/Rectangle 667.png"
import hook from "../../assets/bighook.png"
import png from "../../assets/10001 (2).svg"
import png1 from "../../assets/10002 (2).svg"
import png2 from "../../assets/10003 (2).svg"

export default function About() {
  

  return (
    <div className="overflow-x-hidden w-full">
      <section
        className="relative min-h-screen md:pt-20 md:pb-32 bg-center bg-cover
                     lg:min-h-[800px] xl:h-[2vh] bg-[#37d7d9]"
      >
        <div className="max-w-[1400px] mx-auto px-4">
          <div
            className="grid lg:grid-cols-2 gap-8 pt-24 items-start
                        [@media(min-width:1024px)_and_(max-width:1366px)]:pt-12"
          >
            {/* Text Content */}
            <div
              className="text-white max-w-[800px] lg:left-20 relative space-y-6 pt-12
                          md:max-w-screen md:pt-8 lg:max-w-[492px] lg:pt-6
                          xl:max-w-[650px]
                          [@media(min-width:1024px)_and_(max-width:1366px)]:left-10


                          "
            >
              <h1
                className="text-[1.875rem] lg:text-[2.5rem] xl:text-[4rem] leading-1
                           [@media(min-width:1280px)_and_(max-width:1600px)]:text-[54px]"
              >
                We're Committed To Your Global Education Success
              </h1>
              <p
                className="text-lg mt-0 sm:text-xl md:text-2xl lg:text-[22px] font-roboto lg:leading-[39px]
                          [@media(min-width:1280px)_and_(max-width:1366px)]:text-[26px]
                          [@media(min-width:1024px)_and_(max-width:1366px)]:leading-[39px]"
              >
                Edulinks offers expert guidance and personalized support, ensuring your journey to study abroad is
                smooth and rewarding.
              </p>
            </div>

            {/* Image Section with Stats */}
            <div
              className="relative h-[500px] md:h-[600px]
                          [@media(min-width:1024px)_and_(max-width:1366px)]:h-[400px]"
            >
              {/* Stats Card */}
              <div
                className="hidden lg:block absolute top-[55%] left-[1%] xl:top-[50%]   xl:left-[15%] z-20 w-[190px] h-[90px] bg-white text-black rounded-xl p-3 shadow-lg
                            [@media(min-width:1024px)_and_(max-width:1366px)]:w-[180px]
                            [@media(min-width:1024px)_and_(max-width:1366px)]:h-[85px]

                            [@media(min-width:1024px)_and_(max-width:1280px)]:p-3
                             [@media(min-width:1200px)_and_(max-width:1280px)]:left-[13%]
                             [@media(min-width:1100px)_and_(max-width:1200px)]:left-[8%]




                            "
              >
                <div
                  className="text-4xl font-roboto text-center justify-center align-middle
                              [@media(min-width:1024px)_and_(max-width:1366px)]:text-4xl
text-[#37d7d9] font-bold
                              "
                >
                  10K+<br/>

                </div>
                <div
                  className="text-xl font-roboto font-medium text-center justify-center align-middle
                              [@media(min-width:1024px)_and_(max-width:1366px)]:text-base"
                >
                  Dreams Fulfilled
                </div>
              </div>

              {/* Student Image */}
              <div
                className="relative w-full h-full lg:ml-[5%] lg:right-24 flex justify-end items-start
                            [@media(min-width:1024px)_and_(max-width:1600px)]:right-18"
              >
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HMGHw7vM7w651wCPTpRq5eCiOnNsvh.png"
                    alt="Student with book"
                    className="relative z-10 lg:w-[450px] md:w-[500px] lg:left-8 lg:-top-6 xl:top-[-20px] object-contain
                             [@media(min-width:1280px)_and_(max-width:1600px)]:w-[500px]"
                  />
                </div>
              </div>

              {/* Opportunities Card */}
              <div
                className="hidden lg:block absolute ml-4 right-[1%] top-[20%] xl:top-[14%] z-20 lg:w-[160px] lg:h-[80px] w-[180px] h-[85px] bg-white text-black rounded-xl p-2 shadow-lg
                            [@media(min-width:1280px)_and_(max-width:1366px)]:w-[180px]
                            [@media(min-width:1280px)_and_(max-width:1366px)]:h-[85px]
                            [@media(min-width:1024px)_and_(max-width:1366px)]:p-2
                            [@media(min-width:1024px)_and_(max-width:1366px)]:top-[25%]"
              >
                <p
                  className=" text-center font-roboto
                           text-md"
                >
                  Opportunities <br />
                  across leading <br />
                  global universities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Blur Effect */}
        <div className="absolute bottom-0  left-0 right-0 hidden md:block">
          <div className="relative lg:mt-[-40px]">
            <div
              className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-white to-transparent z-50
                          [@media(min-width:1024px)_and_(max-width:1366px)]:h-[300px]"
            />
          </div>
        </div>
      </section>
    

      {/* Features Section */}
      <div className="relative z-10 lg:mt-[-40px] bg-white">
        <section className="relative z-50 bg-white py-8 md:py-16">
          <div className="max-w-full px-4 md:max-w-[1200px] lg:max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-4 lg:space-x-8">
              {/* Career Pathways Card */}
              <div
                className="bg-white w-full max-w-[350px] p-6 md:p-8 rounded-3xl text-center transform transition-transform hover:-translate-y-1"
                style={{ boxShadow: "5px 0px 5px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6">
                  <img
                    src={png || "/placeholder.svg"}
                    alt="Career Pathways Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-regular mb-4">Personalized Career Pathways:</h3>
                <p className="text-black text-lg md:text-2xl font-roboto1 text-center">
                  Tailored advice for your unique goals.
                </p>
              </div>

              {/* AI Chatbot Card */}
              <div
                className="bg-white w-full max-w-[350px] p-6 md:p-8 rounded-3xl text-center transform transition-transform hover:-translate-y-1"
                style={{ boxShadow: "5px 0px 5px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6">
                  <img
                    src={png1 || "/placeholder.svg"}
                    alt="AI Chatbot Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-regular mb-4 text-center">
                  AI Chatbot
                  <br /> Assistance:
                </h3>
                <p className="text-black text-lg md:text-2xl font-roboto1 text-center">
                  Instant support anytime, anywhere.
                </p>
              </div>

              {/* Post-Landing Card */}
              <div
                className="bg-white w-full max-w-[350px] p-6 md:p-8 rounded-3xl text-center transform transition-transform hover:-translate-y-1"
                style={{ boxShadow: "5px 0px 5px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6">
                  <img
                    src={png2 || "/placeholder.svg"}
                    alt="Post-Landing Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-regular mb-4 text-center">
                  Post-Landing
                  <br /> Guidance:
                </h3>
                <p className="text-black text-lg md:text-2xl font-roboto1 text-center">
                  Seamless transition and settlement services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16">
          <div className="max-w-[1180px] mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-regular font-adramalech">Who We Are</h2>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center mt-8">
              <div>
                <div className="w-full lg:w-[536px] space-y-6 md:space-y-8">
                  <p className="text-black font-roboto1 text-lg md:text-[24px] text-justify font-light leading-relaxed">
                    Edulinks is dedicated to helping students achieve their educational dreams abroad. We provide a
                    range of services including study visas, career guidance, and post-landing support. Our mission is
                    to simplify your journey from start to finish.
                  </p>
                  <p className="text-black font-roboto1 text-lg md:text-[24px] text-justify font-light leading-relaxed">
                    Edulinks also offers AI-driven tools and scholarship assessments to ensure you make informed
                    decisions. With expertise in various global destinations, we guide you every step of the way, making
                    your study abroad experience smooth and successful.
                  </p>
                </div>
              </div>
              <div className="md:-mt-[70px] md:ml-[30px] relative">
                <div className="relative left-0 md:-ml-[90px] z-10">
                  <img
                    src={hook || "/placeholder.svg"}
                    alt="Team Collaboration"
                    className="rounded-lg w-[120px] h-[55px] md:w-[188px] md:h-[87px] lg:w-[239px] lg:h-[110px]"
                  />
                </div>
                <img
                  src={people || "/placeholder.svg"}
                  alt="Team Collaboration"
                  className="rounded-lg shadow-sm w-full mt-16 md:mt-0"
                />
                <div className="hidden md:block relative md:left-[400px] right-0 md:right-[30px]">
                  <img
                    src={hook || "/placeholder.svg"}
                    alt="Team Collaboration"
                    className="rounded-lg w-[87px] h-[40px] md:w-[140px] md:h-[65px] lg:w-[175px] lg:h-[80.97px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-12 md:py-16 bg-[#37d7d970] relative">
        {/* Floating Image */}
        <div className="absolute left-4 md:left-8 top-4 md:top-8 z-10">
          <img
            src={hook || "/placeholder.svg"}
            alt="Team Collaboration"
            className="rounded-lg w-[80px] h-[40px] md:w-[188px] md:h-[87px] lg:w-[255px] lg:h-[120px]"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-full px-4 md:max-w-[90%] lg:max-w-[1180px] mx-auto flex flex-col justify-center">
          {/* Header */}
          <div className="flex justify-center">
            <h2 className="text-[24px] md:text-[32px] font-regular text-[#37d7d9] bg-white w-fit px-4 py-1 font-adramalech text-center mb-4">
              Our Values
            </h2>
          </div>

          <p className="text-center text-[20px] md:text-[32px] leading-[30px] md:leading-[48px] text-black mt-4 font-adramalech mb-8 md:mb-12">
            Empowering Your Global Education Journey
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch">
            {/* Card 1 */}
            <div
              className="bg-white p-6 w-full max-w-[325px] mx-auto transition-transform hover:scale-105 hover:bg-[#37D7D9] hover:text-white shadow-md flex flex-col"
              style={{ boxShadow: "4px 4px 4px 0 rgba(0, 0, 0, 0.25)" }}
            >
              <h3 className="font-roboto text-2xl font-black mb-4 text-center">STUDENT SUCCESS</h3>
              <p className="font-roboto1 text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] text-center flex-grow">
                Your success is our priority. We believe in guiding you towards achieving your educational and career
                goals with personalized support.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white p-6 w-full max-w-[325px] mx-auto transition-transform hover:scale-105 hover:bg-[#37D7D9] hover:text-white shadow-md flex flex-col"
              style={{ boxShadow: "4px 4px 4px 0 rgba(0, 0, 0, 0.25)" }}
            >
              <h3 className="font-roboto text-2xl font-black mb-4 text-center">INNOVATIVE SOLUTIONS</h3>
              <p className="font-roboto1 text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] text-center flex-grow">
                We harness cutting-edge technology and innovative tools to provide tailored solutions that make your
                study abroad journey seamless.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white p-6 w-full max-w-[325px] mx-auto transition-transform hover:scale-105 hover:bg-[#37D7D9] hover:text-white shadow-md flex flex-col"
              style={{ boxShadow: "4px 4px 4px 0 rgba(0, 0, 0, 0.25)" }}
            >
              <h3 className="font-roboto text-2xl font-black mb-4 text-center">GLOBAL EXPERTISE</h3>
              <p className="font-roboto1 text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] text-center flex-grow">
                With deep knowledge of international education systems, we offer expert guidance to help you navigate
                your path with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          {/* Section Header */}
          <div className="bg-[#37D7D9] md:ml-[50px] lg:ml-0 inline-block px-3.5 py-1 mb-8">
            <h2 className="text-[32px] font-medium text-white font-adramalech">Our Mission</h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="md:ml-[50px] lg:ml-0">
              <h3 className="text-black text-3xl font-normal leading-12 font-adramalech">
                Hear what people are saying about their Study Abroad Journey.
              </h3>
              <p className="mt-5 text-justify text-black font-roboto1 text-2xl font-light leading-9">
                At Edulinks, we are committed to making your study abroad dreams a reality. Our mission is to provide
                personalized guidance, from selecting the right course and university to securing a visa and settling in
                a new country. We tailor our services to meet each student's unique needs.
              </p>
              <button className="mt-4 text-[#37d7d9] text-[24px] font-bold font-roboto shadow-inner shadow-gray-400 bg-white border border-transparent px-6 py-2 rounded-lg transition-all hover:shadow-lg">
                Edulinks AI Assistant →
              </button>
            </div>

            {/* Right Content */}
            <div className="lg:-mt-[50px] mt-8 md:ml-[50px] lg:ml-0">
              <h3 className="text-black text-3xl font-normal leading-12 font-adramalech">
                How we can transform your Study Abroad Experience.
              </h3>
              <p className="mt-5 text-black font-roboto1 text-2xl font-light leading-9">
                At Edulinks, we understand the challenges of studying abroad and offer comprehensive support to ensure
                your success.
              </p>
              <ul className="mt-7 text-justify text-black font-roboto1 text-2xl font-light leading-9 space-y-2">
                <li>• Study Visa Consultancy.</li>
                <li>• Personalized Career Guidance.</li>
                <li>• AI Chatbot Assistance.</li>
                <li>• Scholarship Assessment.</li>
                <li>• Loan Guidance.</li>
                <li>• Post-Landing Support.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 bg-[#37D7D970]">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <img
                src={vision || "/placeholder.svg"}
                alt="Happy Students"
                className="rounded-lg shadow-lg w-[462px] h-[561px] object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="max-w-[667px] space-y-6">
              <h2 className="text-4xl p-2 font-regular text-[#37d7d9] bg-white w-fit px-4 font-adramalech text-center">
                Our Vision
              </h2>
              <h3 className="text-3xl font-adramalech">
                Hear what people are saying about their Global Education Experience.
              </h3>
              <p className="text-justify text-black font-roboto1 text-2xl font-light leading-9">
                At Edulinks, we envision a world where every student has access to the best global education
                opportunities. We strive to empower students with the tools, resources, and support they need to achieve
                academic success and build a bright future.
              </p>
              <ul className="space-y-4 text-justify text-black font-roboto1 text-2xl font-light">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span>We prioritize your success.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span>Innovative solutions for your journey.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span>Global expertise, local support.</span>
                </li>
              </ul>
              <button className="mt-4 text-[#37d7d9] text-[24px] font-bold font-roboto shadow-inner shadow-gray-400 bg-white border border-transparent px-6 py-2 rounded-lg transition-all hover:shadow-lg">
                Edulinks AI Assistant →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

