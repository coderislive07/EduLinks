import React from "react"
import img1 from "../../../../assets/Group-4-1.png"
import img2 from "../../../../assets/icon-3.png"
import { ChevronDown } from "lucide-react";



const courses = [
  {
    title: "Aerospace Engineering",
    image: 
     
     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001-gVtWYim75BK6hRQiyWAcmghvDsdne1.png"
     ,
    description:
      "Aerospace Engineering in New Zealand is focused on the design, development, and maintenance of aircraft and spacecraft. With companies like Boeing New Zealand and Airbus New Zealand Pacific leading the way, aerospace engineers play a critical role in advancing aviation technology, improving defense capabilities, and supporting space exploration initiatives, such as those by the New Zealandn Space Agency.",
  },
  {
    title: "Biomedical Engineering",
    image: 
     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10002-g54wEC4sWaVDaD8vDysdwedJEOEKKA.png",
    description:
      "Biomedical Engineering in New Zealand merges healthcare and engineering, creating technologies that improve patient outcomes and revolutionize medical treatments. New Zealandn biomedical engineers work on developing medical devices, prosthetics, and imaging systems, contributing to healthcare advancements and playing a vital role in research institutions and hospitals across the country.",
  },
  {
    title: "Software Engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10003-2ekNPtBKOiTvgAcnuZuvwS7RXKOOIo.png",
    description:
      "New Zealand’s growing tech industry offers abundant opportunities for Software Engineers, particularly in major cities like Sydney and Melbourne. Software engineers in New Zealand are crucial in developing and maintaining software applications across industries, including finance, healthcare, and e-commerce. The increasing focus on cybersecurity, artificial intelligence, and cloud computing further expands opportunities in this field.",
  },
  {
    title: "Robotics and Automation Engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10004-C49wMNZbMOUBaWeK8x5x0CcAaE17gD.png",
    description:
      "Robotics and Automation Engineering in New Zealand is booming, particularly in industries like mining, manufacturing, and agriculture. New Zealandn engineers design and implement automated systems that improve efficiency, safety, and precision. With advancements in AI and machine learning, robotics engineers are shaping the future of industry automation in New Zealand.",
  },
]

const universities = [
  {
    name: "University of Auckland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fWJm6DnGVMkNJnrFFfRMC65dI8RGYg.png",
    description:
      "New Zealand's largest university, renowned for its research excellence and comprehensive range of programs. Located in the heart of Auckland, it offers world-class facilities and strong connections to the Pacific region's business and research communities.",
  },
  {
    name: "University of Otago",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ViAZERs74VlGGpbmUIK8Ep0g2Hz74v.png",
    description:
      "New Zealand's oldest university, established in 1869, combines historic tradition with cutting-edge research facilities. Known for its strong medical school and science programs, it offers a unique study environment in the cultural heart of Dunedin.",
  },
  {
    name: "Victoria University of Wellington",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HYIf6YoaXn8ffKvlEnd4OXM218FomO.png",
    description:
      "Situated in New Zealand's capital, Victoria University excels in public policy, law, and creative arts. Its location provides unique opportunities for students to engage with government institutions and cultural organizations.",
  },
  {
    name: "Massey University",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8eczDhBuGKSwN2NiZ77WFDpGQEUhJ6.png",
    description:
      "A leader in distance education and agricultural sciences, Massey University is known for its innovative approach to learning. With campuses across New Zealand, it specializes in veterinary science, food technology, and creative arts.",
  },
  {
    name: "Auckland University of Technology (AUT)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sbo5R2a68tQYuEvDHrJYZPf2gTrWks.png",
    description:
      "As New Zealand's newest university, AUT focuses on contemporary programs in technology, design, and business. Its modern facilities and industry connections make it a hub for innovation and practical learning in the digital age.",
  },
]



const faqs = [
  {
    question: "What is Artificial Intelligence (AI)?",
    answer:
      "AI refers to systems and algorithms that perform tasks requiring human intelligence, like decision-making, language processing, and recognition.",
  },
  {
    question: "What degrees do I need to work in AI in New Zealand?",
    answer:
      "A bachelor’s degree in AI, computer science, or related fields is common, with a master’s or PhD needed for specialized AI roles.",
  },
  {
    question: "What skills are essential for AI professionals in New Zealand?",
    answer:
      "Key skills include expertise in machine learning, deep learning, Python, and proficiency in AI frameworks like TensorFlow, Keras, and PyTorch.",
  },
  {
    question: "Are there internships available for AI students in New Zealand?",
    answer:
      "Yes, many tech companies and research institutions in New Zealand offer internships, providing experience in AI research and development.",
  },
  {
    question: "What are the emerging trends in AI in New Zealand?",
    answer:
      "Key trends include AI in healthcare, smart agriculture, and AI ethics to ensure fair and transparent use of technologies.",
  },
  {
    question: "Can AI professionals in New Zealand work internationally?",
    answer:
      "Yes, AI professionals from New Zealand are highly valued worldwide, and they have access to opportunities across the globe.",
  },
  {
    question: "What is the job outlook for AI professionals in New Zealand?",
    answer:
      "The outlook is highly favorable, particularly in sectors like healthcare, finance, and agriculture, where AI technologies are rapidly being adopted.",
  },
  {
    question: "How does specialization affect my career in AI in New Zealand?",
    answer:
      "Specializing in fields like machine learning, NLP, or robotics can lead to higher salaries and advanced career opportunities.",
  },
  {
    question: "Are AI jobs flexible in New Zealand?",
    answer:
      "Yes, many AI roles offer flexibility, including opportunities for remote work, freelance projects, and part-time roles.",
  },
  {
    question: "What are the challenges faced by AI professionals in New Zealand today?",
    answer:
      "Challenges include scaling AI solutions for different industries, addressing ethical concerns, and ensuring data privacy and security.",
  },

  
]

export default function Artificial() {
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >New Zealand</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Artificial Intelligence</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
          Gateway to Cutting-Edge Careers in New Zealand
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
              

            New Zealand is a growing hub for artificial intelligence (AI) development, with strong industry demand across sectors such as healthcare, agriculture, and finance. AI professionals, including AI Research Scientists, Natural Language Processing (NLP) Engineers, and AI Application Developers, are integral to advancing AI solutions that enhance operational efficiency and transform industries.
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
      Why Choose a Career in Artificial Intelligence?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      A career in AI in New Zealand offers the opportunity to work in one of the fastest-growing and most innovative fields of technology. AI professionals are at the forefront of technological advancements that impact healthcare, agriculture, finance, and more, helping industries use AI to solve complex challenges.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Artificial Intelligence Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The AI job market in New Zealand is expanding rapidly, with growing demand for AI talent in major cities like Sydney, Melbourne, and Brisbane. From startups to established companies, AI professionals have access to a diverse range of opportunities in fields such as healthcare, fintech, and smart infrastructure.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Artificial Intelligence
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      New Zealand’s future in AI will see significant advancements in areas like machine learning, AI-driven healthcare, and AI applications in agriculture. AI Research Scientists will work on ethical AI and automation, while NLP Engineers will continue improving machine understanding of human language, leading to more sophisticated AI-powered applications.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Artificial Intelligence Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Leading employers in AI in New Zealand include tech giants like Google, Amazon, and IBM, as well as startups and companies focused on AI-driven healthcare, fintech, and agriculture solutions. Notable employers also include CSIRO’s Data61, New Zealand’s national science agency, which leads research in AI and machine learning.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
          Top Picks for Future AI Professionals:<br />
            New Zealand's Elite Tech Universities
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
          Average Salary in Artificial Intelligence
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          AI professionals in New Zealand command competitive salaries. AI Research Scientists typically earn around NZD $130,000 annually, while NLP Engineers and AI Application Developers make approximately NZD $110,000, depending on their level of expertise and the complexity of their work.
          </p>
        </div>
      </div>

      {/* FAQs Section */}
  <div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-regular text-center mb-8">Top 10 FAQs for Artificial Intelligence</h2>
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

