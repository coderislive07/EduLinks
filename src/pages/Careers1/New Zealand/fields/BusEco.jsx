import React from "react"
import img1 from "../../../../assets/Group-12.png"
import img2 from "../../../../assets/icon-3.png"
import { ChevronDown } from "lucide-react";
import img3 from "../../../../assets/image-26.png"
import img4 from "../../../../assets/image-27.png"
import img5 from "../../../../assets/image-28.png"




const courses = [
    {
      title: "Financial Analyst",
      image: "https://edulinks.io/wp-content/uploads/2024/10/image-26.png",
      description:
        "Financial Analysts in New Zealand assess market trends, evaluate investment opportunities, and provide financial advice to businesses and individuals. These professionals work in industries like banking, insurance, and investment, helping clients make informed financial decisions.",
    },
    {
      title: "Economic Data Analyst",
      image: "https://edulinks.io/wp-content/uploads/2024/10/image-27.png",
      description:
        "Economic Data Analysts in New Zealand interpret economic data, analyze trends, and provide insights to government agencies, corporations, and financial institutions. They help shape economic policies and business strategies, contributing to New Zealand’s economic stability and growth.",
    },
    {
      title: "Supply Chain Manager",
      image: "https://edulinks.io/wp-content/uploads/2024/10/image-28.png",
      description:
        "Supply Chain Managers in New Zealand manage the logistics of goods and services, ensuring efficient and sustainable supply chains. These professionals are vital in industries like retail, manufacturing, and logistics, where they optimize operations and manage costs.",
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
    question: "What is Business & Economics?",
    answer:
      "It’s the study of financial systems, markets, and economic policies, focusing on business operations and resource management.",
  },
  {
    question: "What degrees do I need to work in Business & Economics in New Zealand?",
    answer:
      "A bachelor’s degree in business, economics, finance, or a related field is required, with advanced degrees useful for specialized roles.",
  },
  {
    question: "What skills are essential for business and economics professionals in New Zealand?",
    answer:
      "Analytical thinking, problem-solving, and proficiency in financial modeling are key skills for success.",
  },
  {
    question: "Are there internships available for business and economics students in New Zealand?",
    answer:
      "Many companies offer internships that provide experience in financial analysis, supply chain management, and economic data analysis.",
  },
  {
    question: "What are the emerging trends in New Zealand’s business and economics sector?",
    answer:
      "AI in finance, digital transformation in supply chains, and sustainability in business practices are key trends.",
  },
  {
    question: "Can New Zealandn business and economics professionals work internationally?",
    answer:
      "Yes, New Zealandn qualifications are highly respected globally, providing opportunities for international careers.",
  },
  {
    question: "What is the job outlook for business and economics professionals in New Zealand?",
    answer:
      "The outlook is positive, with growing demand for professionals in financial analysis, economic data analysis, and supply chain management.",
  },
  {
    question: "How does specialization affect my career in New Zealandn business and economics?",
    answer:
      "Specializing in areas like supply chain management or data analysis can open up more career opportunities and lead to higher salaries.",
  },
  {
    question: "Are business and economics jobs flexible in New Zealand?",
    answer:
      "Many roles offer flexibility, including options for remote work and project-based employment.",
  },
  {
    question: "What are the challenges faced by business and economics professionals in New Zealand today?",
    answer:
      "Challenges include navigating global trade complexities, managing economic volatility, and staying ahead of technological changes.",
  },

  
]

export default function BioTech() {
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
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Business & Economics</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
            Gateway to Innovative Careers in New Zealand
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
              
            
            New Zealand’s diverse economy, strong trade networks, and commitment to innovation make it a prime location for careers in Business & Economics. Professionals in fields such as financial analysis, economic data analysis, and supply chain management are essential to driving the country’s economic growth and supporting its global trade. With its focus on sustainability, technology, and global markets, New Zealand offers rich opportunities for business and economics professionals.
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
      Why Choose a Career in Business & Economics?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      A career in Business & Economics in New Zealand offers the opportunity to work in one of the world’s fastest-growing economies. Whether managing supply chains, analyzing markets, or interpreting economic data, professionals in these fields play a crucial role in driving business success and economic growth.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Business & Economics Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for Business & Economics professionals in New Zealand is strong, particularly in financial analysis, economic data analysis, and supply chain management. As the economy continues to grow and expand, demand for skilled professionals in these areas is expected to rise.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Business & Economics
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The future of Business & Economics in New Zealand is focused on sustainability, global trade, and digital transformation. Financial analysts will use new technologies to assess markets, economic data analysts will drive data-driven policymaking, and supply chain managers will innovate in logistics
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Business & Economics Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Top employers in New Zealand’s Business & Economics sector include Commonwealth Bank, Westpac, Deloitte, and Woolworths. Additionally, government agencies such as the New Zealandn Treasury offer extensive opportunities for economic data analysts.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
            Top Picks for Future Engineers:<br />
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
          Average Salary in Business & Economics
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Business & Economics professionals in New Zealand earn competitive salaries. Financial analysts typically earn around NZD $85,000 annually, while economic data analysts make approximately NZD $80,000. Supply chain managers can expect to earn about NZD $95,000, depending on experience and expertise.
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

