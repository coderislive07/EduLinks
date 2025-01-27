import React from "react"
import img1 from "../../../../assets/Group-522.png"
import img2 from "../../../../assets/icon-3.png"


const courses = [
  {
    title: "Aerospace Engineering",
    image: 
     
     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001-gVtWYim75BK6hRQiyWAcmghvDsdne1.png"
     ,
    description:
      "Aerospace Engineering in Australia is focused on the design, development, and maintenance of aircraft and spacecraft. With companies like Boeing Australia and Airbus Australia Pacific leading the way, aerospace engineers play a critical role in advancing aviation technology, improving defense capabilities, and supporting space exploration initiatives, such as those by the Australian Space Agency.",
  },
  {
    title: "Biomedical Engineering",
    image: 
     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10002-g54wEC4sWaVDaD8vDysdwedJEOEKKA.png",
    description:
      "Biomedical Engineering in Australia merges healthcare and engineering, creating technologies that improve patient outcomes and revolutionize medical treatments. Australian biomedical engineers work on developing medical devices, prosthetics, and imaging systems, contributing to healthcare advancements and playing a vital role in research institutions and hospitals across the country.",
  },
  {
    title: "Software Engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10003-2ekNPtBKOiTvgAcnuZuvwS7RXKOOIo.png",
    description:
      "Australia’s growing tech industry offers abundant opportunities for Software Engineers, particularly in major cities like Sydney and Melbourne. Software engineers in Australia are crucial in developing and maintaining software applications across industries, including finance, healthcare, and e-commerce. The increasing focus on cybersecurity, artificial intelligence, and cloud computing further expands opportunities in this field.",
  },
  {
    title: "Robotics and Automation Engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10004-C49wMNZbMOUBaWeK8x5x0CcAaE17gD.png",
    description:
      "Robotics and Automation Engineering in Australia is booming, particularly in industries like mining, manufacturing, and agriculture. Australian engineers design and implement automated systems that improve efficiency, safety, and precision. With advancements in AI and machine learning, robotics engineers are shaping the future of industry automation in Australia.",
  },
]

const universities = [
  {
    name: "University of Melbourne",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "University of Sydney",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Australian National University (ANU)",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "University of New South Wales (UNSW)",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "University of Queensland",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const faqs = [
  {
    question: "What is Engineering & Technology?",
    answer:
      "Engineering & Technology encompasses various disciplines that apply scientific and mathematical principles to solve real-world problems and create innovative solutions.",
  },
  {
    question: "How do I apply to study Engineering in Australia?",
    answer:
      "To study Engineering in Australia, you need to meet academic requirements, English language proficiency, and submit applications through universities' online portals.",
  },
  {
    question: "What are the career prospects in Australia?",
    answer:
      "Engineering careers in Australia offer excellent prospects with competitive salaries and opportunities across various sectors including mining, construction, technology, and healthcare.",
  },
  {
    question: "Are there scholarships available for Engineering students?",
    answer:
      "Yes, many Australian universities offer scholarships for international engineering students based on academic merit and other criteria.",
  },
]

export default function AusEngAndTech() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState(null)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-[#37d7d9]">edulinks</span>
              </a>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Study Destinations
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Services
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-[#37d7d9] text-white px-4 py-2 rounded-md text-sm font-medium">
                Free Career Counseling
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative  py-16 sm:py-24"
      style={

        {
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      }
      
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-522-T0amr9ccbOpFeiSQ8GjqvpRryLouhA.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >Australia</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Engineering & Technology</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
            Gateway to Innovative Careers in Australia
          </p>
        </div>
      </div>
      <div>
        <div className="absolute  left-[6%] top-[62%]">
          <img  src={img2}
          
          /> 
          
          
                 </div>
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-center text-black font-roboto1 text-2xl font-light leading-[37.2px]">
              
Engineering & Technology in Australia is a diverse and innovative field that blends scientific principles, practical skills, and cutting-edge technology to address modern challenges. Australian engineers are at the forefront of advancements in sectors such as aerospace, mining, biomedical technology, and renewable energy. With a growing focus on sustainability and digital transformation, Australia offers excellent opportunities for engineers to make significant contributions while enjoying a high quality of life.
            </h1>
          </div>


      </div>

      {/* Courses Section */}
      <div className="py-16 bg-[#37D7D91A]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="space-y-12">
      {courses.map((course, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } gap-8`}
        >
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="rounded-lg shadow-lg w-[401px] h-[292px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-4">
              {course.title}
            </h2>
            <p className="text-[#232323] font-roboto1 text-[24px] font-light leading-[37.2px]">
              {course.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
<div className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
    {/* Section 1 */}
    <div className="text-center">
      <h1 className="text-[32px] font-bold text-[#232323] mb-6">
        Why Choose a Career in Engineering & Technology?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
        A career in Engineering & Technology in Australia offers the chance to work in a forward-thinking, innovative
        environment that applies scientific principles to solve real-world challenges. Engineers in Australia are
        integral to addressing issues such as climate change, energy efficiency, and healthcare innovation. With a
        strong focus on research and development, the country offers diverse opportunities for engineers to make a
        lasting impact.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-bold text-[#232323] mb-6">
        Engineering & Technology Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
        The job market for Engineering & Technology in Australia is thriving, particularly in fields like software
        engineering, renewable energy, and biomedical technology. The Australian government’s investment in
        infrastructure and technology-driven sectors is driving steady demand for skilled engineers, especially in
        cities like Sydney, Brisbane, and Perth.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-bold text-[#232323] mb-6">
        Future Aspects of Engineering & Technology
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
        Australia’s future in Engineering & Technology is driven by innovation and sustainability. Aerospace engineers
        will play a pivotal role in the Australian Space Agency’s projects, while biomedical engineers will continue to
        advance health technologies such as AI-powered diagnostics and personalized treatments. Software engineers will
        remain essential in developing secure, scalable solutions, and automation engineers will revolutionize
        industries like agriculture and mining with intelligent robotics systems.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-bold text-[#232323] mb-6">
        Top Engineering & Technology Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
        In Canada, leading companies like Bombardier Aerospace and BlackBerry offer extensive opportunities in aerospace
        and software engineering. Thomson Reuters recruits for roles in technology development, while Apotex Inc.
        focuses on biomedical engineering. Additionally, Shopify is at the forefront, seeking skilled engineers to
        innovate in e-commerce technology, reflecting the diverse career opportunities across the country’s technology
        landscape.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-4">Top Picks for Future Engineers:
          Australia’s Elite Tech Universities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={university.image || "/placeholder.svg"}
                  alt={university.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-center">{university.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Top 10 FAQs for Engineering & Technology</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0">{openFaqIndex === index ? "−" : "+"}</span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  )
}

