import React from "react"
import img1 from "../../../../assets/Group-8.png"
import img2 from "../../../../assets/icon-3.png"
import { ChevronDown } from "lucide-react";


const courses = [
    {
      title: "Wildlife Conservationist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7kE1Spe1DoCUQlk92URyjHNp9nkKj7.png",
      description:
        "Wildlife Conservationists in UK work to protect native species such as koalas, kangaroos, and unique marine life. Conservationists collaborate with government agencies like the Department of Agriculture, Water and the Environment, and organizations such as the UKn Wildlife Conservancy to protect habitats and prevent biodiversity loss.",
    },
    {
      title: "Climate Change Analyst",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oO4XBCAUwIhKRqeEwJqoFCmSrkrCoH.png",
      description:
        "UK faces severe climate risks, including droughts, bushfires, and coral bleaching of the Great Barrier Reef. These professionals assess the impact of climate change on ecosystems and communities and help develop adaptation and mitigation strategies.",
    },
    {
      title: "Renewable Energy Manager",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NkHh97DWLcc1rvrcKu0LcCMrGsh6Ge.png",
      description:
        "UK is a global leader in solar energy, and Renewable Energy Managers are crucial in driving the country's transition to clean energy. They oversee solar, wind, and hydropower projects, contributing to UK's goal of achieving 100% renewable energy in the coming decades.",
    }
  ];

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
    question: "What is Environmental Science?",
    answer:
      "It’s the study of the environment, focusing on issues like conservation, pollution, and climate change..",
  },
  {
    question: "What degrees do I need to work in Environmental Science in UK?",
    answer:
      "A bachelor’s degree in environmental science, ecology, or a related field is required, with postgraduate degrees useful for specialized roles.",
  },
  {
    question: "What skills are essential for environmental scientists in UK?",
    answer:
      "Analytical thinking, data analysis, and strong communication skills are critical.",
  },
  {
    question: "Are there internships available for environmental science students in UK?",
    answer:
      "Yes, internships are available through universities, environmental organizations, and government agencies.",
  },
  {
    question: "What are the emerging technologies in UK’s environmental science sector?",
    answer:
      "Solar energy, AI-driven climate models, and advanced conservation techniques are key innovations.",
  },
  {
    question: "Can UKn environmental scientists work internationally?",
    answer:
      "Yes, UKn environmental qualifications are respected globally, providing international career opportunities.",
  },
  {
    question: "What is the job outlook for environmental scientists in UK?",
    answer:
      "The outlook is positive, particularly in renewable energy, conservation, and climate change sectors.",
  },
  {
    question: "How does specialization affect my career in UKn environmental science?",
    answer:
      "Specializing in areas like renewable energy or climate resilience can lead to higher salaries and more career opportunities.",
  },
  {
    question: "Are environmental science jobs flexible in UK?",
    answer:
      "Many roles offer flexibility, including remote work, fieldwork, and project-based opportunities.",
  },
  {
    question: "What are the challenges faced by environmental scientists in UK today?",
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >UK</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Environmental Science</h1>
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
              

            UK’s unique landscapes and ecosystems, from the Great Barrier Reef to vast deserts, create significant opportunities for careers in Environmental Science. Professionals in wildlife conservation, climate change analysis, and renewable energy management play crucial roles in preserving biodiversity, addressing climate challenges, and promoting sustainability.
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
      Choosing a career in Environmental Science in UK provides the chance to make a significant impact in protecting the country’s unique ecosystems and addressing climate challenges. With UK’s strong focus on sustainability and clean energy, professionals in this field are at the forefront of innovation and conservation.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Environmental Science Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for Environmental Science professionals in UK is highly favorable, particularly in wildlife conservation, renewable energy, and climate change analysis. As the government and private sector continue to invest in sustainability, demand for skilled professionals is growing.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Environmental Science
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The future of Environmental Science in UK focuses on protecting biodiversity, mitigating climate impacts, and expanding renewable energy. Conservationists will continue to restore habitats, climate change analysts will guide policies to protect vulnerable communities, and renewable energy managers will lead the country’s clean energy transition.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Environmental Science Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Leading employers in UK’s environmental sector include the Department of Agriculture, Water and the Environment, the UKn Wildlife Conservancy, and renewable energy companies such as AGL Energy and Origin Energy.
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
                    <h3 className="text-[24px] font-normal font-roboto text-center">
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
                    <h3 className="text-[24px] font-normal font-roboto text-center">
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
          Environmental science professionals in UK earn competitive salaries. Wildlife conservationists typically earn around AUD $70,000 annually, while climate change analysts make approximately AUD $80,000. Renewable energy managers can expect salaries around AUD $90,000, depending on their specialization and experience.
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

