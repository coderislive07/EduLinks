import  React from "react"
import img1 from "../../../../assets/Group-522.png"
import img2 from "../../../../assets/icon-3.png"
import { ChevronDown } from "lucide-react";


const courses = [
  {
    title: "Aerospace Engineering",
    image: 
     
     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001-gVtWYim75BK6hRQiyWAcmghvDsdne1.png"
     ,
    description:
      "Aerospace Engineering in UK is focused on the design, development, and maintenance of aircraft and spacecraft. With companies like Boeing UK and Airbus UK Pacific leading the way, aerospace engineers play a critical role in advancing aviation technology, improving defense capabilities, and supporting space exploration initiatives, such as those by the UKn Space Agency.",
  },
  {
    title: "Biomedical Engineering",
    image: 
     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10002-g54wEC4sWaVDaD8vDysdwedJEOEKKA.png",
    description:
      "Biomedical Engineering in UK merges healthcare and engineering, creating technologies that improve patient outcomes and revolutionize medical treatments. UKn biomedical engineers work on developing medical devices, prosthetics, and imaging systems, contributing to healthcare advancements and playing a vital role in research institutions and hospitals across the country.",
  },
  {
    title: "Software Engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10003-2ekNPtBKOiTvgAcnuZuvwS7RXKOOIo.png",
    description:
      "UK’s growing tech industry offers abundant opportunities for Software Engineers, particularly in major cities like Sydney and Melbourne. Software engineers in UK are crucial in developing and maintaining software applications across industries, including finance, healthcare, and e-commerce. The increasing focus on cybersecurity, artificial intelligence, and cloud computing further expands opportunities in this field.",
  },
  {
    title: "Robotics and Automation Engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10004-C49wMNZbMOUBaWeK8x5x0CcAaE17gD.png",
    description:
      "Robotics and Automation Engineering in UK is booming, particularly in industries like mining, manufacturing, and agriculture. UKn engineers design and implement automated systems that improve efficiency, safety, and precision. With advancements in AI and machine learning, robotics engineers are shaping the future of industry automation in UK.",
  },
]

const universities = [
  {
    name: "University of Oxford",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PAzXyh7x4oDLE4paM2xCltUGOZrfAU.png",
    description:
      "The oldest university in the English-speaking world, Oxford combines centuries of tradition with cutting-edge research facilities. Its collegiate system, world-renowned faculty, and historic architecture create an unparalleled academic environment for students across all disciplines.",
  },
  {
    name: "University of Cambridge",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9OHP6eovgEcuooOljXJp3EwNIKSwon.png",
    description:
      "Cambridge offers a unique combination of medieval tradition and contemporary scientific excellence. Known for its mathematical heritage and scientific innovations, the university continues to produce groundbreaking research across multiple fields.",
  },
  {
    name: "Imperial College London",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8psUmKKZqWtHGRR4VuwA0nbLvd7nVh.png",
    description:
      "Focusing exclusively on science, engineering, medicine, and business, Imperial College London is at the forefront of technological innovation. Its central London location provides unique opportunities for collaboration with industry leaders and research institutions.",
  },
  {
    name: "University of Edinburgh",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZRQy4IHCxjUgtbkEKivf52b0tVvtNU.png",
    description:
      "Edinburgh combines its rich heritage in medicine, science, and engineering with pioneering research in artificial intelligence and data science. Its historic campus in Scotland's capital city provides an inspiring environment for academic excellence.",
  },
  {
    name: "University of Exeter",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0j5RyQKOukkX8H4T3kDnMu0IKiK1Qk.png",
    description:
      "Known for its expertise in environmental science and sustainable development, Exeter offers cutting-edge facilities for research and teaching. The university's modern campus reflects its commitment to innovation while maintaining strong ties to its regional heritage.",
  },
]


const faqs = [
  {
    question: "What is Engineering & Technology?",
    answer:
      "Engineering & Technology encompasses various disciplines that apply scientific and mathematical principles to solve real-world problems and create innovative solutions.",
  },
  {
    question: "How do I apply to study Engineering in UK?",
    answer:
      "To study Engineering in UK, you need to meet academic requirements, English language proficiency, and submit applications through universities' online portals.",
  },
  {
    question: "What are the career prospects in UK?",
    answer:
      "Engineering careers in UK offer excellent prospects with competitive salaries and opportunities across various sectors including mining, construction, technology, and healthcare.",
  },
  {
    question: "Are there scholarships available for Engineering students?",
    answer:
      "Yes, many UKn universities offer scholarships for international engineering students based on academic merit and other criteria.",
  },
  {
    question: "What are the emerging technologies in UK's engineering sector?",
    answer:
      "Emerging technologies include artificial intelligence, renewable energy systems, and advanced manufacturing technologies",
  },
  {
    question: "Can UKn engineers work abroad?",
    answer:
      "Yes, UKn engineering qualifications are highly respected internationally, offering opportunities for global employment.",
  },
  {
    question: "What is the job outlook for engineers in UK?",
    answer:
      "The job outlook is strong, with demand expected to grow in sectors such as renewable energy, software development, and biomedical engineering.",
  },
  {
    question: "How does specialization affect my career in UKn engineering?",
    answer:
      "Specializing in fields like AI, automation, or sustainable technologies can lead to higher salaries and increased job opportunities",
  },
  {
    question: "Are engineering jobs flexible in UK?",
    answer:
      "Many engineering roles offer flexible working arrangements, including project-based work, remote opportunities, and part-time options.",
  },
  {
    question: "What are the challenges faced by engineers in UK today?",
    answer:
      "Key challenges include adapting to rapid technology changes, addressing sustainability, and managing large-scale infrastructures.",
  },

  
]

export default function AusEngAndTech() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState(null)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      

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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >UK</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Engineering & Technology</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
            Gateway to Innovative Careers in UK
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
              
Engineering & Technology in UK is a diverse and innovative field that blends scientific principles, practical skills, and cutting-edge technology to address modern challenges. UKn engineers are at the forefront of advancements in sectors such as aerospace, mining, biomedical technology, and renewable energy. With a growing focus on sustainability and digital transformation, UK offers excellent opportunities for engineers to make significant contributions while enjoying a high quality of life.
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
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
        Why Choose a Career in Engineering & Technology?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
        A career in Engineering & Technology in UK offers the chance to work in a forward-thinking, innovative
        environment that applies scientific principles to solve real-world challenges. Engineers in UK are
        integral to addressing issues such as climate change, energy efficiency, and healthcare innovation. With a
        strong focus on research and development, the country offers diverse opportunities for engineers to make a
        lasting impact.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
        Engineering & Technology Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
        The job market for Engineering & Technology in UK is thriving, particularly in fields like software
        engineering, renewable energy, and biomedical technology. The UKn government’s investment in
        infrastructure and technology-driven sectors is driving steady demand for skilled engineers, especially in
        cities like Sydney, Brisbane, and Perth.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
        Future Aspects of Engineering & Technology
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
        UK’s future in Engineering & Technology is driven by innovation and sustainability. Aerospace engineers
        will play a pivotal role in the UKn Space Agency’s projects, while biomedical engineers will continue to
        advance health technologies such as AI-powered diagnostics and personalized treatments. Software engineers will
        remain essential in developing secure, scalable solutions, and automation engineers will revolutionize
        industries like agriculture and mining with intelligent robotics systems.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
        Top Engineering & Technology Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
        In UK, leading companies like Bombardier Aerospace and BlackBerry offer extensive opportunities in aerospace
        and software engineering. Thomson Reuters recruits for roles in technology development, while Apotex Inc.
        focuses on biomedical engineering. Additionally, Shopify is at the forefront, seeking skilled engineers to
        innovate in e-commerce technology, reflecting the diverse career opportunities across the country’s technology
        landscape.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
            Top Picks for Future Engineers:<br />
            UK's Elite Tech Universities
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-wrap justify-center gap-8 w-full mb-8">
              {universities.slice(0, 3).map((university, index) => (
                <div key={index} className="w-full sm:w-[369.537px] bg-white shadow-lg overflow-hidden border-b-4 border-[#37D7D9]">
                  <div className="h-[365px] overflow-hidden">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between" style={{ height: '152px' }}>
                    <h3 className="text-[20px] font-normal font-roboto text-center">
                      {university.name}
                    </h3>
                    <div className="text-center">
                    <button className="px-6 py-2 text-[16px] font-roboto font-bold bg-white text-[#53C2C3] hover:bg-[#53C2C3] hover:text-white transition-colors border border-[#53C2C3]">
                        Explore &gt;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {universities.slice(3).map((university, index) => (
                <div key={index} className="w-full sm:w-[369.537px] bg-white shadow-lg overflow-hidden border-b-4 border-[#37D7D9]">
                  <div className="h-[365px] overflow-hidden">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between" style={{ height: '152px' }}>
                    <h3 className="text-[20px] font-normal font-roboto text-center">
                      {university.name}
                    </h3>
                    <div className="text-center">
                    <button className="px-6 py-2 text-[16px] font-roboto font-bold bg-white text-[#53C2C3] hover:bg-[#53C2C3] hover:text-white transition-colors border border-[#53C2C3]">
                        Explore &gt;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-[32px] font-regular text-[#232323] mb-6">
            Average Salary in Engineering & Technology
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
            Engineers in UK enjoy competitive salaries. Software engineers typically earn around AUD $95,000 annually, while biomedical engineers make approximately AUD $85,000. Aerospace engineers can expect salaries around AUD $110,000, and robotics engineers often earn over AUD $100,000, depending on experience and specialization.
          </p>
        </div>
      </div>

      {/* FAQs Section */}
  <div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-regular text-center mb-8">Top 10 FAQs for Engineering & Technology</h2>
    <div className="space-y-4">
      {faqs.map((faq, index) => (
          <div key={index} className="bg-[#37d7d9] rounded-lg shadow-sm overflow-hidden">
            <button
                className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
            >
                  <span className="font-black text-[20px] font-roboto text-white">
                    {faq.question}
                  </span>
              <ChevronDown
                  className="ml-6 flex-shrink-0 transition-transform duration-500 ease-in-out text-white w-6 h-6"
                  style={{
                    transform: openFaqIndex === index ? 'rotate(-180deg)' : 'rotate(0deg)'
                  }}
              />
            </button>
            <div
                className="transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: openFaqIndex === index ? '500px' : '0',
                  opacity: openFaqIndex === index ? 1 : 0,
                  overflow: 'hidden'
                }}
            >
              <div className="px-6 py-4 bg-[#ebfbfc]">
                <p className="text-black text-[20px] font-roboto1 font-regular py-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
      ))}
    </div>
  </div>
  </div>


      {/* Footer */}
      
    </div>
  )
}

