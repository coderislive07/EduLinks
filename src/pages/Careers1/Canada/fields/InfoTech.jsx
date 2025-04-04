import React from "react"
import img1 from "../../../../assets/Group-7.png"
import img2 from "../../../../assets/icon-3.png"
import { ChevronDown } from "lucide-react";



const courses = [
    {
      title: "Cybersecurity Specialist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ud5aSMMvpbZDojSQBCbsXsyGV0Umlb.png",
      description:
        "Cybersecurity is a top priority in Canada, with specialists tasked with protecting the country's digital infrastructure from an increasing number of cyber threats. Cybersecurity professionals work across sectors like government, finance, and healthcare to safeguard data and systems. As cybercrime continues to rise, cybersecurity specialists are in high demand in Canada.",
    },
    {
      title: "Machine Learning Engineer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YtlZ6jQvEjrdrQRjplNN6ei1XEnkGh.png",
      description:
        "Machine Learning Engineers in Canada are at the forefront of AI innovations, building algorithms that enable machines to learn from data. These engineers work across sectors such as healthcare, finance, and agriculture, contributing to automation and decision-making processes. Canada's growing AI research ecosystem provides numerous opportunities for machine learning professionals.",
    },
    {
      title: "Blockchain Developer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rZJHSSEcVm3ZVGFj31ImgoAvrK8DCG.png",
      description:
        "Blockchain Developers in Canada are transforming industries by implementing decentralized systems that enhance transparency and security. From finance to agriculture, blockchain technology is gaining traction, and developers are playing a key role in its adoption. With Canada's focus on digital transformation, blockchain developers are in high demand.",
    }
  ];

  const universities = [
    {
      name: "University of Toronto",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JwIyc4yJHbWNXJymr4k1Rv2sRxzWW4.png",
      description:
        "Renowned for its prestigious Rotman School of Management, the University of Toronto offers world-class programs in business, economics, and finance. Located in Canada's financial hub, it provides students with unique opportunities for industry connections and practical experience.",
    },
    {
      name: "University of British Columbia",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0iamN6D047ov3hWOksiMId0BXhBvP7.png",
      description:
        "UBC's Sauder School of Business is recognized globally for its innovative approach to business education. With strong ties to the Pacific Rim economies, it offers students exceptional insights into international business and economics.",
    },
    {
      name: "McGill University",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WCh6z5iNTylj0ZDPAAwC4CQYkGjMUg.png",
      description:
        "McGill's Desautels Faculty of Management is known for its rigorous academic programs and diverse international community. The university's location in Montreal provides students with exposure to both English and French business environments.",
    },
    {
      name: "University of Ottawa",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GpqRXfR7Ku5yiXCJSdvTZ0H807BDde.png",
      description:
        "The Telfer School of Management at uOttawa offers bilingual business education and strong connections to government and policy institutions, making it an ideal choice for students interested in public sector economics and management.",
    },
    {
      name: "University of Alberta",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9KG3QJ9zRmYAReqXhtKtsmJoQAQry6.png",
      description:
        "The Alberta School of Business leverages its proximity to Canada's energy sector to offer unique specializations in natural resources and energy economics, while maintaining strong programs in all core business disciplines.",
    },
  ]
  
  

const faqs = [
  {
    question: "What is Information Technology?",
    answer:
      "IT involves the use of computers, software, and networks to store, retrieve, and secure data.",
  },
  {
    question: "What degrees do I need to work in Health Sciences in Canada?",
    answer:
      "A degree in IT, computer science, or a related field is required, with certifications valuable in cybersecurity and AI.",
  },
  {
    question: "What skills are essential for IT professionals in Canada?",
    answer:
      "Technical expertise, adaptability to new technologies, and problem-solving skills are essential.",
  },
  {
    question: "Are there internships available for IT students in Canada?",
    answer:
      "Yes, many Canadan universities and companies offer internships, providing practical experience in various IT fields.",
  },
  {
    question: "What are the emerging technologies in Canada’s IT sector?",
    answer:
      "AI, blockchain, and cybersecurity are among the most prominent emerging technologies.",
  },
  {
    question: "Can Canadan IT professionals work internationally?",
    answer:
      "Yes, Canadan IT qualifications are globally respected, enabling professionals to pursue international careers.",
  },
  {
    question: "What is the job outlook for IT professionals in Canada?",
    answer:
      "The outlook is highly positive, especially in cybersecurity, AI, and blockchain development.",
  },
  {
    question: "How does specialization affect my career in Canadan IT?",
    answer:
      "Specializing in high-demand areas like machine learning or blockchain can lead to better opportunities and higher salaries.",
  },
  {
    question: "Are IT jobs flexible in Canada?",
    answer:
      "Many IT roles offer flexible working arrangements, including remote work and freelance opportunities.",
  },
  {
    question: "What are the challenges faced by IT professionals in Canada today?",
    answer:
      "Challenges include keeping up with cybersecurity threats and staying current with fast-evolving technology",
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >Canada</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Information Technology</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
            Gateway to Innovative Careers in Canada
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
              

            Canada’s Information Technology sector is rapidly expanding, playing a critical role in economic growth and innovation. IT professionals in Canada work on cutting-edge technologies in cybersecurity, AI, and blockchain, contributing to advancements in industries such as finance, healthcare, and agriculture. With Sydney and Melbourne emerging as key tech hubs, Canada offers a dynamic environment for IT professionals.
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
      Why Choose a Career in Information Technology?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Choosing a career in IT in Canada provides the opportunity to work in a thriving industry that drives innovation and digital transformation. IT professionals play a crucial role in addressing global challenges, from cybersecurity to AI-driven automation, making it a dynamic and impactful career path.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Information Technology Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for IT professionals in Canada is highly favorable, particularly in cybersecurity, AI, and blockchain. As industries continue to adopt digital solutions, the demand for skilled IT professionals is expected to rise significantly.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Information Technology
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The future of IT in Canada will be centered around AI, cybersecurity, and blockchain technology. Machine learning engineers will drive AI advancements, cybersecurity specialists will protect Canada’s digital infrastructure, and blockchain developers will expand decentralized systems across industries.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top  Information Technology Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Leading employers in Canada’s IT sector include Atlassian, Telstra, NAB, and government agencies. Sydney and Melbourne are key hubs for tech innovation, with numerous startups and multinational companies seeking IT professionals.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
            Top Picks for Future Engineers:<br />
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
                      <button className="px-6 py-2 text-[12px] font-roboto1 font-bold bg-white text-[#53C2C3] hover:bg-[#53C2C3] hover:text-white transition-colors border border-[#53C2C3]">
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
            IT professionals in Canada earn competitive salaries. Cybersecurity specialists typically earn around CAD $85,000 annually, while machine learning engineers make approximately CAD $95,000. Blockchain developers can expect salaries around CAD $90,000, depending on experience and specialization.
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

