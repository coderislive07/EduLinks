import React from "react"
import img1 from "../../../../assets/Group-5-1.png"
import img2 from "../../../../assets/icon-3.png"



const courses = [
    {
      title: "Environmental Law Specialist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eOH8zc7DOnpDcV358uD3xHDdEHfnTC.png",
      description:
        "Environmental Law Specialists in Canada work to address the country's unique environmental challenges, from protecting the Great Barrier Reef to promoting sustainable energy. These professionals ensure that government and corporate actions comply with environmental regulations and contribute to sustainable development goals.",
    },
    {
      title: "Health Policy Advisor",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7iCyW1bO6gIS9mhmnZusAX4Or50B09.png",
      description:
        "Health Policy Advisors in Canada collaborate with state and federal governments, as well as healthcare providers, to shape policies that improve public health outcomes. With a strong focus on equitable access to healthcare, these advisors help to integrate new technologies and policies into the Canadan healthcare system.",
    },
    {
      title: "Intellectual Property Lawyer -Tech/Biotech",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FyQEIJ1cg1gZgcJtXD77xOjbriaaNm.png",
      description:
        "Canada's growing tech and biotech sectors rely on Intellectual Property Lawyers to protect innovations. These professionals work with research institutions and corporations to secure patents, trademarks, and copyrights, ensuring that Canada remains competitive in the global innovation landscape.",
    },
  ]
  
  
  
  

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
    question: "What is Law and Policy?",
    answer:
      "Law and Policy involve creating and enforcing legal frameworks to regulate industries, protect public interests, and solve societal issues.",
  },
  {
    question: "What degrees do I need to work in Law and Policy in Canada?",
    answer:
      "A law degree (LL.B. or J.D.) is required, with specializations like environmental law, health policy, or intellectual property.",
  },
  {
    question: "What skills are essential for Law and Policy professionals in Canada?",
    answer:
      "Key skills include legal research, policy analysis, communication, and understanding Canadan regulatory frameworks.",
  },
  {
    question: "Are there internships available for Law and Policy students in Canada?",
    answer:
      "Yes, law firms and government agencies offer internships in areas like environmental law, healthcare policy, and intellectual property.",
  },
  {
    question: "What are the emerging trends in Law and Policy in Canada?",
    answer:
      "Trends include sustainability in law, healthcare policy reform, and IP protection in tech and biotech.",
  },
  {
    question: "Can Canadan Law and Policy professionals work internationally?",
    answer:
      "Yes, Canadan legal qualifications are globally recognized, allowing work with multinational firms and organizations",
  },
  {
    question: "What is the job outlook for Law and Policy professionals in Canada?",
    answer:
      "The outlook is positive, especially in growing fields like environmental law, health policy, and intellectual property.",
  },
  {
    question: "How does specialization affect my career in Law and Policy in Canada?",
    answer:
      "Specializing in high-demand areas like IP or environmental law boosts career prospects and earning potential.",
  },
  {
    question: "Are Law and Policy jobs flexible in Canada?",
    answer:
      "Yes, many roles offer flexibility, including remote work, freelance consulting, and project-based services.",
  },
  {
    question: "What are the challenges faced by Law and Policy professionals in Canada today?",
    answer:
      "Challenges include navigating environmental regulations, adapting healthcare policies, and managing IP in emerging industries.",
  },

  
]

export default function Law() {
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >Canada</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Law and Policy</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
          Gateway to Influential Careers in Canada

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
              

            
            
Canada’s commitment to environmental sustainability, healthcare reform, and intellectual property protection provides a fertile ground for Law and Policy professionals. With a focus on balancing growth and innovation with sustainability and public health, Canada offers dynamic opportunities for legal experts in Environmental Law, Health Policy, and Intellectual Property Law.
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
      Why Choose a Career in Law and Policy?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      A career in Law and Policy in Canada offers the chance to work on globally significant issues such as climate change, healthcare reform, and the protection of intellectual property. Canada’s forward-thinking approach to law and policy provides opportunities to influence both national and international legal frameworks.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Law and Policy Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for Law and Policy professionals in Canada is promising, particularly for Environmental Law Specialists and Intellectual Property Lawyers. As the country continues to prioritize sustainability and innovation, demand for experts in these areas is expected to grow.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Law and Policy
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Canada’s future in Law and Policy will focus on addressing climate change, integrating healthcare innovations, and protecting intellectual property in emerging industries like biotech and AI. Environmental Law Specialists will help enforce Canada’s sustainability policies, while Health Policy Advisors guide the healthcare sector through technological transitions.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Law and Policy Employers

      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Canada’s top law firms, such as King & Wood Mallesons and Allens, offer significant opportunities for Environmental Law and Intellectual Property professionals. Government bodies like the Canadan Government Department of Health and the Department of Agriculture, Water, and the Environment are key employers for health policy and environmental law professionals.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
          Top Picks for Future Law and Policy Professionals:<br />
            Canada's Elite Institutions
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
                    <h3 className="text-[24px] font-normal font-roboto text-center">
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
                    <h3 className="text-[24px] font-normal font-roboto text-center">
                      {university.name}
                    </h3>
                    <div className="text-center">
                      <button className="px-6 py-2 text-[12px] font-bold font-roboto1 bg-white text-[#53C2C3] hover:bg-[#53C2C3] hover:text-white transition-colors border border-[#53C2C3]">
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
          Average Salary in Law and Policy
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Law and Policy professionals in Canada earn competitive salaries. Environmental Law Specialists typically earn around AUD $90,000 annually, while Health Policy Advisors make approximately AUD $95,000. Intellectual Property Lawyers in tech or biotech can expect to earn around AUD $110,000, depending on experience and specialization.
          </p>
        </div>
      </div>

      {/* FAQs Section */}
  <div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-regular text-center mb-8">Top 10 FAQs for Graphic Design and Media</h2>
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

