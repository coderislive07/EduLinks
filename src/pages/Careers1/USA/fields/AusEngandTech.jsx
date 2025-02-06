import React from "react"
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
      "Aerospace Engineering in USA is focused on the design, development, and maintenance of aircraft and spacecraft. With companies like Boeing USA and Airbus USA Pacific leading the way, aerospace engineers play a critical role in advancing aviation technology, improving defense capabilities, and supporting space exploration initiatives, such as those by the USAn Space Agency.",
  },
  {
    title: "Biomedical Engineering",
    image: 
     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10002-g54wEC4sWaVDaD8vDysdwedJEOEKKA.png",
    description:
      "Biomedical Engineering in USA merges healthcare and engineering, creating technologies that improve patient outcomes and revolutionize medical treatments. USAn biomedical engineers work on developing medical devices, prosthetics, and imaging systems, contributing to healthcare advancements and playing a vital role in research institutions and hospitals across the country.",
  },
  {
    title: "Software Engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10003-2ekNPtBKOiTvgAcnuZuvwS7RXKOOIo.png",
    description:
      "USA’s growing tech industry offers abundant opportunities for Software Engineers, particularly in major cities like Sydney and Melbourne. Software engineers in USA are crucial in developing and maintaining software applications across industries, including finance, healthcare, and e-commerce. The increasing focus on cybersecurity, artificial intelligence, and cloud computing further expands opportunities in this field.",
  },
  {
    title: "Robotics and Automation Engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10004-C49wMNZbMOUBaWeK8x5x0CcAaE17gD.png",
    description:
      "Robotics and Automation Engineering in USA is booming, particularly in industries like mining, manufacturing, and agriculture. USAn engineers design and implement automated systems that improve efficiency, safety, and precision. With advancements in AI and machine learning, robotics engineers are shaping the future of industry automation in USA.",
  },
]

const universities = [
  {
    name: "Harvard University",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZvepvwqUxF2vTWa08Vercmijfh63EP.png",
    description:
      "Harvard's Graduate School of Education is a pioneer in educational research and leadership training. Founded in 1920, it combines historic prestige with innovative approaches to teaching and learning, preparing the next generation of educational leaders and researchers.",
  },
  {
    name: "Stanford University",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pbX7z4gOw3eGCHphvY53CnlZKXYQeV.png",
    description:
      "Stanford's School of Education, renowned for its integration of technology and education, leads groundbreaking research in learning sciences and teacher preparation. Its location in Silicon Valley provides unique opportunities for innovation in educational technology.",
  },
  {
    name: "Columbia University (Teachers College)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k5dy9YgLyH7tMDnmKeu7OOvi4jKY1b.png",
    description:
      "As the first and largest graduate school of education in the United States, Teachers College at Columbia University has been at the forefront of developing education leaders, innovating teaching methods, and conducting influential research in education for over 125 years.",
  },
  {
    name: "University of California, Berkeley",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lZt7zMgSOWjOYfl5543tGCNKdW4DRc.png",
    description:
      "Berkeley's Graduate School of Education is known for its commitment to social justice in education and innovative research methodologies. Its programs combine rigorous academic study with practical application in diverse educational settings.",
  },
  {
    name: "University of Pennsylvania (Graduate School of Education)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3mJXQVElAdkLjHQYRKqY7SppTg6GrO.png",
    description:
      "Penn GSE is distinguished by its research in urban education, educational policy, and international education. Located in Philadelphia, it provides students with extensive opportunities for practical experience in diverse educational environments.",
  },
]


const faqs = [
  {
    question: "What is Engineering & Technology?",
    answer:
      "Engineering & Technology encompasses various disciplines that apply scientific and mathematical principles to solve real-world problems and create innovative solutions.",
  },
  {
    question: "How do I apply to study Engineering in USA?",
    answer:
      "To study Engineering in USA, you need to meet academic requirements, English language proficiency, and submit applications through universities' online portals.",
  },
  {
    question: "What are the career prospects in USA?",
    answer:
      "Engineering careers in USA offer excellent prospects with competitive salaries and opportunities across various sectors including mining, construction, technology, and healthcare.",
  },
  {
    question: "Are there scholarships available for Engineering students?",
    answer:
      "Yes, many USAn universities offer scholarships for international engineering students based on academic merit and other criteria.",
  },
  {
    question: "What are the emerging technologies in USA's engineering sector?",
    answer:
      "Emerging technologies include artificial intelligence, renewable energy systems, and advanced manufacturing technologies",
  },
  {
    question: "Can USAn engineers work abroad?",
    answer:
      "Yes, USAn engineering qualifications are highly respected internationally, offering opportunities for global employment.",
  },
  {
    question: "What is the job outlook for engineers in USA?",
    answer:
      "The job outlook is strong, with demand expected to grow in sectors such as renewable energy, software development, and biomedical engineering.",
  },
  {
    question: "How does specialization affect my career in USAn engineering?",
    answer:
      "Specializing in fields like AI, automation, or sustainable technologies can lead to higher salaries and increased job opportunities",
  },
  {
    question: "Are engineering jobs flexible in USA?",
    answer:
      "Many engineering roles offer flexible working arrangements, including project-based work, remote opportunities, and part-time options.",
  },
  {
    question: "What are the challenges faced by engineers in USA today?",
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >USA</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Engineering & Technology</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
            Gateway to Innovative Careers in USA
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
              
Engineering & Technology in USA is a diverse and innovative field that blends scientific principles, practical skills, and cutting-edge technology to address modern challenges. USAn engineers are at the forefront of advancements in sectors such as aerospace, mining, biomedical technology, and renewable energy. With a growing focus on sustainability and digital transformation, USA offers excellent opportunities for engineers to make significant contributions while enjoying a high quality of life.
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
        A career in Engineering & Technology in USA offers the chance to work in a forward-thinking, innovative
        environment that applies scientific principles to solve real-world challenges. Engineers in USA are
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
        The job market for Engineering & Technology in USA is thriving, particularly in fields like software
        engineering, renewable energy, and biomedical technology. The USAn government’s investment in
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
        USA’s future in Engineering & Technology is driven by innovation and sustainability. Aerospace engineers
        will play a pivotal role in the USAn Space Agency’s projects, while biomedical engineers will continue to
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
        In USA, leading companies like Bombardier Aerospace and BlackBerry offer extensive opportunities in aerospace
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
            USA's Elite Tech Universities
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
            Engineers in USA enjoy competitive salaries. Software engineers typically earn around AUD $95,000 annually, while biomedical engineers make approximately AUD $85,000. Aerospace engineers can expect salaries around AUD $110,000, and robotics engineers often earn over AUD $100,000, depending on experience and specialization.
          </p>
        </div>
      </div>

      {/* FAQs Section */}
  <div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-regular text-center mb-8">Top 10 FAQs for Engineering & Technology</h2>
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-[#37d7d9] shadow-sm">
          <button
            className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
          >
            <span className="font-black text-[20px] font-roboto text-white">{faq.question}</span>
            <span className="ml-6 flex-shrink-0">{openFaqIndex === index ? "−" : "+"}</span>
          </button>
          {openFaqIndex === index && (
            <div className="px-6 bg-[#ebfbfc]  ">
              <p className="text-black text-[20px] font-roboto1 font-regular">{faq.answer}</p>
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

