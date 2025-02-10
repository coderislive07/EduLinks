import React from "react"
import img1 from "../../../../assets/Group-8.png"
import img2 from "../../../../assets/icon-3.png"
import {ChevronDown} from "lucide-react";



const courses = [
    {
      title: "Wildlife Conservationist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7kE1Spe1DoCUQlk92URyjHNp9nkKj7.png",
      description:
        "Wildlife Conservationists in Australia work to protect native species such as koalas, kangaroos, and unique marine life. Conservationists collaborate with government agencies like the Department of Agriculture, Water and the Environment, and organizations such as the Australian Wildlife Conservancy to protect habitats and prevent biodiversity loss.",
    },
    {
      title: "Climate Change Analyst",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oO4XBCAUwIhKRqeEwJqoFCmSrkrCoH.png",
      description:
        "Australia faces severe climate risks, including droughts, bushfires, and coral bleaching of the Great Barrier Reef. These professionals assess the impact of climate change on ecosystems and communities and help develop adaptation and mitigation strategies.",
    },
    {
      title: "Renewable Energy Manager",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NkHh97DWLcc1rvrcKu0LcCMrGsh6Ge.png",
      description:
        "Australia is a global leader in solar energy, and Renewable Energy Managers are crucial in driving the country's transition to clean energy. They oversee solar, wind, and hydropower projects, contributing to Australia's goal of achieving 100% renewable energy in the coming decades.",
    }
  ];

  const universities = [
    {
      name: "University of Melbourne",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CCjdRZBspOgNFHcR1VNIjZw61nsO06.png",
    },
    {
      name: "University of Sydney",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TM1aFc8x3VYXPSZp8H2Y8Pq2ViLZ0a.png",
    },
    {
      name: "Australian National University (ANU)",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3JRngDu5MYp4NXN4xkmgrUmuqo8RPe.png",
    },
    {
      name: "University of Queensland",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vwLbbSx0vWAJV8sZt3kcGOF4SRPrLC.png",
    },
    {
      name: "University of Western Australia",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DcX33ZaTrrzJXi4cvNTqNagND7Zlyq.png",
    },
  ];

const faqs = [
  {
    question: "What is Environmental Science?",
    answer:
      "It’s the study of the environment, focusing on issues like conservation, pollution, and climate change..",
  },
  {
    question: "What degrees do I need to work in Environmental Science in Australia?",
    answer:
      "A bachelor’s degree in environmental science, ecology, or a related field is required, with postgraduate degrees useful for specialized roles.",
  },
  {
    question: "What skills are essential for environmental scientists in Australia?",
    answer:
      "Analytical thinking, data analysis, and strong communication skills are critical.",
  },
  {
    question: "Are there internships available for environmental science students in Australia?",
    answer:
      "Yes, internships are available through universities, environmental organizations, and government agencies.",
  },
  {
    question: "What are the emerging technologies in Australia’s environmental science sector?",
    answer:
      "Solar energy, AI-driven climate models, and advanced conservation techniques are key innovations.",
  },
  {
    question: "Can Australian environmental scientists work internationally?",
    answer:
      "Yes, Australian environmental qualifications are respected globally, providing international career opportunities.",
  },
  {
    question: "What is the job outlook for environmental scientists in Australia?",
    answer:
      "The outlook is positive, particularly in renewable energy, conservation, and climate change sectors.",
  },
  {
    question: "How does specialization affect my career in Australian environmental science?",
    answer:
      "Specializing in areas like renewable energy or climate resilience can lead to higher salaries and more career opportunities.",
  },
  {
    question: "Are environmental science jobs flexible in Australia?",
    answer:
      "Many roles offer flexibility, including remote work, fieldwork, and project-based opportunities.",
  },
  {
    question: "What are the challenges faced by environmental scientists in Australia today?",
    answer:
      "Challenges include protecting endangered species, addressing climate risks, and advancing renewable energy projects.",
  },

  
]

export default function EnviroSc() {
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >Australia</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Environmental Science</h1>
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
              

            Australia’s unique landscapes and ecosystems, from the Great Barrier Reef to vast deserts, create significant opportunities for careers in Environmental Science. Professionals in wildlife conservation, climate change analysis, and renewable energy management play crucial roles in preserving biodiversity, addressing climate challenges, and promoting sustainability.
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
      Why Choose a Career in Environmental Science?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Choosing a career in Environmental Science in Australia provides the chance to make a significant impact in protecting the country’s unique ecosystems and addressing climate challenges. With Australia’s strong focus on sustainability and clean energy, professionals in this field are at the forefront of innovation and conservation.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Environmental Science Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for Environmental Science professionals in Australia is highly favorable, particularly in wildlife conservation, renewable energy, and climate change analysis. As the government and private sector continue to invest in sustainability, demand for skilled professionals is growing.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Environmental Science
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The future of Environmental Science in Australia focuses on protecting biodiversity, mitigating climate impacts, and expanding renewable energy. Conservationists will continue to restore habitats, climate change analysts will guide policies to protect vulnerable communities, and renewable energy managers will lead the country’s clean energy transition.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Environmental Science Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Leading employers in Australia’s environmental sector include the Department of Agriculture, Water and the Environment, the Australian Wildlife Conservancy, and renewable energy companies such as AGL Energy and Origin Energy.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
            Top Picks for Future Engineers:<br />
            Australia's Elite Tech Universities
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
          Average Salary in Environmental Science
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Environmental science professionals in Australia earn competitive salaries. Wildlife conservationists typically earn around AUD $70,000 annually, while climate change analysts make approximately AUD $80,000. Renewable energy managers can expect salaries around AUD $90,000, depending on their specialization and experience.
          </p>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-regular text-center mb-8">
            Top 10 FAQs for Environmental Science
          </h2>
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

