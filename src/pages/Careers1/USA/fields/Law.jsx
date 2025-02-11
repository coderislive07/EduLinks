import React from "react"
import img1 from "../../../../assets/Group-5-1.png"
import img2 from "../../../../assets/icon-3.png"
import { ChevronDown } from "lucide-react";


const courses = [
    {
      title: "Environmental Law Specialist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eOH8zc7DOnpDcV358uD3xHDdEHfnTC.png",
      description:
        "Environmental Law Specialists in USA work to address the country's unique environmental challenges, from protecting the Great Barrier Reef to promoting sustainable energy. These professionals ensure that government and corporate actions comply with environmental regulations and contribute to sustainable development goals.",
    },
    {
      title: "Health Policy Advisor",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7iCyW1bO6gIS9mhmnZusAX4Or50B09.png",
      description:
        "Health Policy Advisors in USA collaborate with state and federal governments, as well as healthcare providers, to shape policies that improve public health outcomes. With a strong focus on equitable access to healthcare, these advisors help to integrate new technologies and policies into the USAn healthcare system.",
    },
    {
      title: "Intellectual Property Lawyer -Tech/Biotech",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FyQEIJ1cg1gZgcJtXD77xOjbriaaNm.png",
      description:
        "USA's growing tech and biotech sectors rely on Intellectual Property Lawyers to protect innovations. These professionals work with research institutions and corporations to secure patents, trademarks, and copyrights, ensuring that USA remains competitive in the global innovation landscape.",
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
    question: "What is Law and Policy?",
    answer:
      "Law and Policy involve creating and enforcing legal frameworks to regulate industries, protect public interests, and solve societal issues.",
  },
  {
    question: "What degrees do I need to work in Law and Policy in USA?",
    answer:
      "A law degree (LL.B. or J.D.) is required, with specializations like environmental law, health policy, or intellectual property.",
  },
  {
    question: "What skills are essential for Law and Policy professionals in USA?",
    answer:
      "Key skills include legal research, policy analysis, communication, and understanding USAn regulatory frameworks.",
  },
  {
    question: "Are there internships available for Law and Policy students in USA?",
    answer:
      "Yes, law firms and government agencies offer internships in areas like environmental law, healthcare policy, and intellectual property.",
  },
  {
    question: "What are the emerging trends in Law and Policy in USA?",
    answer:
      "Trends include sustainability in law, healthcare policy reform, and IP protection in tech and biotech.",
  },
  {
    question: "Can USAn Law and Policy professionals work internationally?",
    answer:
      "Yes, USAn legal qualifications are globally recognized, allowing work with multinational firms and organizations",
  },
  {
    question: "What is the job outlook for Law and Policy professionals in USA?",
    answer:
      "The outlook is positive, especially in growing fields like environmental law, health policy, and intellectual property.",
  },
  {
    question: "How does specialization affect my career in Law and Policy in USA?",
    answer:
      "Specializing in high-demand areas like IP or environmental law boosts career prospects and earning potential.",
  },
  {
    question: "Are Law and Policy jobs flexible in USA?",
    answer:
      "Yes, many roles offer flexibility, including remote work, freelance consulting, and project-based services.",
  },
  {
    question: "What are the challenges faced by Law and Policy professionals in USA today?",
    answer:
      "Challenges include navigating environmental regulations, adapting healthcare policies, and managing IP in emerging industries.",
  },

  
]

export default function Law() {
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
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Law and Policy</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
          Gateway to Influential Careers in USA

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
              

            
            
USA’s commitment to environmental sustainability, healthcare reform, and intellectual property protection provides a fertile ground for Law and Policy professionals. With a focus on balancing growth and innovation with sustainability and public health, USA offers dynamic opportunities for legal experts in Environmental Law, Health Policy, and Intellectual Property Law.
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
      A career in Law and Policy in USA offers the chance to work on globally significant issues such as climate change, healthcare reform, and the protection of intellectual property. USA’s forward-thinking approach to law and policy provides opportunities to influence both national and international legal frameworks.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Law and Policy Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for Law and Policy professionals in USA is promising, particularly for Environmental Law Specialists and Intellectual Property Lawyers. As the country continues to prioritize sustainability and innovation, demand for experts in these areas is expected to grow.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Law and Policy
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      USA’s future in Law and Policy will focus on addressing climate change, integrating healthcare innovations, and protecting intellectual property in emerging industries like biotech and AI. Environmental Law Specialists will help enforce USA’s sustainability policies, while Health Policy Advisors guide the healthcare sector through technological transitions.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Law and Policy Employers

      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      USA’s top law firms, such as King & Wood Mallesons and Allens, offer significant opportunities for Environmental Law and Intellectual Property professionals. Government bodies like the USAn Government Department of Health and the Department of Agriculture, Water, and the Environment are key employers for health policy and environmental law professionals.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
          Top Picks for Future Law and Policy Professionals:<br />
            USA's Elite Institutions
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
          Law and Policy professionals in USA earn competitive salaries. Environmental Law Specialists typically earn around US $90,000 annually, while Health Policy Advisors make approximately US $95,000. Intellectual Property Lawyers in tech or biotech can expect to earn around USD $110,000, depending on experience and specialization.
          </p>
        </div>
      </div>

      {/* FAQs Section */}
  <div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-regular text-center mb-8">Top 10 FAQs for Graphic Design and Media</h2>
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

