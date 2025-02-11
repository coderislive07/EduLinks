import React from "react"
import img1 from "../../../../assets/Group-4-1.png"
import img2 from "../../../../assets/icon-3.png"
import img3 from "../../../../assets/image-51.png"
import img4 from "../../../../assets/image-52.png"
import img5 from "../../../../assets/image-53.png"
import { ChevronDown } from "lucide-react";




const courses = [
  {
    title: "AI Research Scientist",
    image:
        img3,
    description:
        "AI Research Scientists in Canada focus on advancing the theoretical aspects of artificial intelligence, including machine learning, deep learning, and reinforcement learning. They work in research labs, universities, and leading tech companies, pushing the boundaries of AI to solve complex problems in areas like healthcare, autonomous driving, and robotics.",
  },
  {
    title: "Natural Language Processing Engineer",
    image:
        img4,
    description:
        "NLP Engineers in Canada specialize in developing AI systems that understand and process human language. They work on applications like chatbots, voice assistants, and language translation tools, using models like transformers and neural networks to improve machine understanding of speech and text.",
  },
  {
    title: "AI Application Developer",
    image: img5,
    description:
        "AI Application Developers in Canada are responsible for building AI-powered software solutions that integrate machine learning models into real-world applications. They work across industries, developing tools for predictive analytics, recommendation systems, and autonomous technologies using frameworks like TensorFlow and PyTorch.",
  },

];

const universities = [
  {
    name: "University of Toronto",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JwIyc4yJHbWNXJymr4k1Rv2sRxzWW4.png",
    description:
        "Renowned for its prestigious programs, the University of Toronto offers world-class education. Located in Canada's largest city, it provides students with unique opportunities for industry connections and practical experience.",
  },
  {
    name: "University of British Columbia",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0iamN6D047ov3hWOksiMId0BXhBvP7.png",
    description:
        "UBC is recognized globally for its innovative approach to education. With strong ties to various industries, it offers students exceptional insights and opportunities.",
  },
  {
    name: "McGill University",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WCh6z5iNTylj0ZDPAAwC4CQYkGjMUg.png",
    description:
        "McGill is known for its rigorous academic programs and diverse international community. The university's location provides students with exposure to various environments.",
  },
  {
    name: "University of Ottawa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GpqRXfR7Ku5yiXCJSdvTZ0H807BDde.png",
    description:
        "The University of Ottawa offers diverse educational opportunities and strong connections. Its location makes it an ideal choice for students interested in various fields.",
  },
  {
    name: "University of Alberta",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9KG3QJ9zRmYAReqXhtKtsmJoQAQry6.png",
    description:
        "The University of Alberta offers unique specializations and maintains strong programs in all core disciplines.",
  },
];

const faqs = [
  {
    question: "What is Artificial Intelligence (AI)?",
    answer:
        "AI refers to systems and algorithms that perform tasks requiring human intelligence, like decision-making, language processing, and recognition.",
  },
  {
    question: "What degrees do I need to work in AI in Canada?",
    answer:
        "A bachelor’s degree in AI, computer science, or related fields is common, with a master’s or PhD needed for specialized AI roles.",
  },
  {
    question: "What skills are essential for AI professionals in Canada?",
    answer:
        "Key skills include expertise in machine learning, deep learning, Python, and proficiency in AI frameworks like TensorFlow, Keras, and PyTorch.",
  },
  {
    question: "Are there internships available for AI students in Canada?",
    answer:
        "Yes, many tech companies and research institutions in Canada offer internships, providing experience in AI research and development.",
  },
  {
    question: "What are the emerging trends in AI in Canada?",
    answer:
        "Key trends include AI in healthcare, smart agriculture, and AI ethics to ensure fair and transparent use of technologies.",
  },
  {
    question: "Can AI professionals in Canada work internationally?",
    answer:
        "Yes, AI professionals from Canada are highly valued worldwide, and they have access to opportunities across the globe.",
  },
  {
    question: "What is the job outlook for AI professionals in Canada?",
    answer:
        "The outlook is highly favorable, particularly in sectors like healthcare, finance, and agriculture, where AI technologies are rapidly being adopted.",
  },
  {
    question: "How does specialization affect my career in AI in Canada?",
    answer:
        "Specializing in fields like machine learning, NLP, or robotics can lead to higher salaries and advanced career opportunities.",
  },
  {
    question: "Are AI jobs flexible in Canada?",
    answer:
        "Yes, many AI roles offer flexibility, including opportunities for remote work, freelance projects, and part-time roles.",
  },
  {
    question: "What are the challenges faced by AI professionals in Canada today?",
    answer:
        "Challenges include scaling AI solutions for different industries, addressing ethical concerns, and ensuring data privacy and security.",
  },
];

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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >Canada</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Artificial Intelligence</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
          Gateway to Cutting-Edge Careers in Canada
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


              Canada is at the forefront of artificial intelligence (AI) innovation, with a thriving AI ecosystem supported by universities, research institutions, and tech companies. AI professionals, including AI Research Scientists, Natural Language Processing (NLP) Engineers, and AI Application Developers, have ample opportunities to work on transformative projects in areas like healthcare, finance, and autonomous systems.


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
        A career in AI in Canada provides the opportunity to work in one of the most innovative and forward-thinking fields in technology. AI professionals are at the forefront of creating technologies that transform industries, improve efficiency, and solve complex problems, from automating processes to advancing medical research.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Artificial Intelligence Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
        The job market for AI professionals in Canada is strong, with opportunities growing across sectors like healthcare, autonomous vehicles, and finance. Tech hubs like Toronto, Vancouver, and Montreal are home to AI startups and established companies that are continuously expanding their AI capabilities.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Artificial Intelligence
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
        Canada’s AI future is driven by continued investments in AI research and innovation. AI Research Scientists will focus on improving model efficiency and ethical AI, while NLP Engineers will enhance machine understanding of human language. AI Application Developers will create intelligent solutions that transform industries from healthcare to logistics.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Artificial Intelligence Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
        Canada is home to leading AI employers, including tech giants like Google, Amazon, and Microsoft, as well as AI-focused startups and research institutions like the Vector Institute and Element AI. Financial institutions like RBC and TD are also investing in AI talent to develop predictive and automation technologies.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
          Top Picks for Future AI Professionals:<br />
            Canada's Elite Tech Universities
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
            Salaries for AI professionals in Canada are highly competitive. AI Research Scientists typically earn around CAD $120,000 annually, while NLP Engineers and AI Application Developers make approximately CAD $100,000, depending on their experience and the complexity of their projects.
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

