import React from "react"
import herogirl from "../../assets/heroimagegirl.png"
import people from "../../assets/people.png"
import vision from '../../assets/vision.png'

export default function About() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[600px] bg-gradient-to-b from-[#37d7d9] to-[#37d7d9]/90 pt-20 pb-32 overflow-hidden">
      {/* Large Circle Background */}
      <div
        className="absolute right-[10%] top-[50%] translate-y-[-50%] w-[600px] h-[600px] rounded-full"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.37)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 pt-10 items-center">
          <div className="text-white space-y-8 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-adramalech">
              We're Committed
              <br />
              To Your Global
              <br />
              Education Success
            </h1>
            <p className="text-lg md:text-xl font-roboto max-w-xl font-medium">
              Edulinks offers expert guidance and personalized support, ensuring your journey to study abroad is smooth
              and rewarding.
            </p>
          </div>
          <div className="relative">
            {/* Stats Box */}
            <div className="absolute left-[10%] top-[40%] z-10 bg-white text-black rounded-xl p-6 shadow-lg">
              <div className="text-3xl text-[#26B9C1] font-bold font-adramalech">10K+</div>
              <div className="text-xl font-roboto font-bold">Dreams Fulfilled</div>
            </div>
            <div className="relative">
  {/* Background circle */}
  <div
    className="absolute w-[500px] h-[500px] bg-[#37d7d9] rounded-full  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
  ></div>

  {/* Image */}
  <img
    src={herogirl}
    alt="Student Success"
    className="w-full max-w-[400px] mx-auto relative z-10"
  />
</div>


            {/* Opportunities Box */}
            <div className="absolute left-[65%] top-[20%] right-0 z-10 bg-white text-black p-6 rounded-xl shadow-lg max-w-[270px]">
              <p className="text-xl font-roboto font-bold">
                Opportunities across leading
                <br />
                global universities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

            {/* Features Section */}
            <section className="py-16 -mt-24 relative z-10">
                <div className="max-w-[900px] mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white  p-8 rounded-lg shadow-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#E6FBFC] rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#26B9C1]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold font-adramalech mb-2">Personalized Career Pathways:</h3>
                            <p className="text-gray-600 text-xl font-roboto">Tailored advice for your unique goals.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#E6FBFC] rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#26B9C1]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-adramalech font-bold mb-2">AI Chatbot Assistance:</h3>
                            <p className="text-gray-600 text-xl">Instant support anytime, anywhere.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#E6FBFC] rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#26B9C1]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-adramalech font-bold mb-2">Post-Landing Guidance:</h3>
                            <p className="text-gray-600 text-xl">Seamless transition and settlement services.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-16 ">
                <div className="max-w-[1400px] mx-auto px-4">
                    <h2 className="text-4xl font-bold font-adramalech  ">Who We Are</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-[30vw]">
                                <p className="text-black font-roboto text-xl mb-10 text-justify ">
                                    Edulinks is dedicated to helping students achieve their educational dreams abroad. We provide a range
                                    of services including study visas, career guidance, and post-landing support. Our mission is to
                                    simplify your journey from start to finish.
                                </p>
                                <p className="text-black  font-roboto text-xl text-justify">
                                    Edulinks also offers AI-driven tools and scholarship assessments to ensure you make informed
                                    decisions. With expertise in various global destinations, we guide you every step of the way, making
                                    your study abroad experience smooth and successful
                                </p>
                            </div>
                        </div>
                        <div>
                            <img
                                src={people || "/placeholder.svg"}
                                alt="Team Collaboration"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-16 bg-[#37d7d970]">
                <div className="max-w-[900px] mx-auto px-4 flex flex-col justify-center">
                <div className="flex justify-center align-bottom">
                    <h2 className="text-4xl font-bold text-[#37d7d9] bg-white w-[25vw] xl:w-[15vw]  font-adramalech text-center mb-4">
                        Our Values
                    </h2>
                    </div>
                    <p className="text-center text-xl text-black  font-adramalech mb-12">
                        Empowering Your Global Education Journey
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#E6FBFC] p-6 rounded-lg">
                            <h3 className="font-adramalech text-xl font-bold mb-4">STUDENT SUCCESS</h3>
                            <p className="font-roboto text-xl text-gray-600">
                                Your success is our priority.
                                We believe in guiding you
                                towards achieving your
                                educational and career goals
                                with personalized support.
                            </p>
                        </div>
                        <div className="bg-[#E6FBFC] p-6 rounded-lg">
                            <h3 className="font-adramalech text-xl font-bold mb-4">INNOVATIVE SOLUTIONS</h3>
                            <p className="font-roboto text-gray-600 text-xl">
                                We harness cutting-edge
                                technology and innovative tools
                                to provide tailored solutions
                                that make your study abroad
                                journey seamless.
                            </p>
                        </div>
                        <div className="bg-[#E6FBFC] p-6 rounded-lg">
                            <h3 className="font-adramalech text-xl font-bold mb-4">GLOBAL EXPERTISE</h3>
                            <p className="font-roboto text-gray-600 text-xl">
                                With deep knowledge of
                                international education
                                systems, we offer expert
                                guidance to help you navigate
                                your path with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="inline-block bg-[#26B9C1] px-6 py-2 mb-8">
            <h2 className="text-3xl font-bold text-white font-adramalech">Our Mission</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-adramalech">Hear what people are saying about their Study Abroad Journey.</h3>
              <p className="text-gray-700  mb-8 font-roboto text-xl">
                At Edulinks, we are committed to making your study abroad dreams a reality. Our mission is to provide
                personalized guidance, from selecting the right course and university to securing a visa and settling in
                a new country. We tailor our services to meet each student's unique needs.
              </p>
              <button className="text-[#26B9C1] font-bold font-roboto shadow-md shadow-gray-700 bg-white border border-transparent px-6 py-2 rounded-lg  transition-all  ">
  Edulinks AI Assistant →
</button>


            </div>
            <div className="-mt-[7vh]">
              <h3 className="text-3xl font-bold mb-6 font-adramalech">How we can transform your Study Abroad Experience.</h3>
              <p className="text-gray-700 text-xl mb-6 font-roboto">
              At Edulinks, we understand the challenges of studying
abroad and offer comprehensive support to ensure your
success.
              </p>
              <ul className="space-y-4 text-lg font-roboto">
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
                <div className="max-w-[950px] mx-auto px-4">
                  
                    <div className="grid lg:grid-cols-2  ">
                        <div>
                            <img
                                src={vision}
                                alt="Happy Students"
                                className="rounded-lg shadow-lg w-96"
                            />
                        </div>
                        <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-[#37d7d9] bg-white w-[25vw] xl:w-[15vw]  font-adramalech text-center mb-4">
                        Our Vision
                    </h2>
                    <h3 className="text-3xl font-adramalech mb-6">
                        Hear what people are saying about their Global Education Experience.
                    </h3>
                            <p className="text-gray-600 font-roboto text-xl">
                            At Edulinks, we envision a world where every student has access to the best global education opportunities. We strive to empower students with the tools, resources, and support they need to achieve academic success and build a bright future.
                            </p>
                            <ul className="space-y-4 font-roboto">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black rounded-full"></div>
                                    <h1 className="text-xl">We prioritize your success.</h1>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black rounded-full"></div>
                                    <h1 className="text-xl">Innovative solutions for your journey.</h1>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black  rounded-full"></div>
                                    <h1 className="text-xl">Global expertise, local support.</h1>
                                </li>
                                <button className="text-[#26B9C1] font-bold font-roboto shadow-md shadow-gray-700 bg-white border border-transparent px-6 py-2 rounded-lg  transition-all  ">
  Edulinks AI Assistant →
</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

