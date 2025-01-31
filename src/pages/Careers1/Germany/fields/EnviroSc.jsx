import React from "react"
import img1 from "../../../../assets/Group-8.png"
import img2 from "../../../../assets/icon-3.png"



const courses = [
    {
      title: "Wildlife Conservationist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7kE1Spe1DoCUQlk92URyjHNp9nkKj7.png",
      description:
        "Wildlife Conservationists in Germany work to protect native species such as koalas, kangaroos, and unique marine life. Conservationists collaborate with government agencies like the Department of Agriculture, Water and the Environment, and organizations such as the Germanyn Wildlife Conservancy to protect habitats and prevent biodiversity loss.",
    },
    {
      title: "Climate Change Analyst",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oO4XBCAUwIhKRqeEwJqoFCmSrkrCoH.png",
      description:
        "Germany faces severe climate risks, including droughts, bushfires, and coral bleaching of the Great Barrier Reef. These professionals assess the impact of climate change on ecosystems and communities and help develop adaptation and mitigation strategies.",
    },
    {
      title: "Renewable Energy Manager",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NkHh97DWLcc1rvrcKu0LcCMrGsh6Ge.png",
      description:
        "Germany is a global leader in solar energy, and Renewable Energy Managers are crucial in driving the country's transition to clean energy. They oversee solar, wind, and hydropower projects, contributing to Germany's goal of achieving 100% renewable energy in the coming decades.",
    }
  ];

  const universities = [
    {
      name: "Technische Universität München (TUM)",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ARlqv4nxPA5vpIPXpE4XmwmjnCTgSk.png",
      description:
        "One of Germany's leading technical universities, TUM excels in engineering, technology, and natural sciences. Known for its innovative research in artificial intelligence, robotics, and sustainable technologies, it maintains strong industry partnerships with major German technology companies.",
    },
    {
      name: "RWTH Aachen University",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fkyaaGn1e0CYUxDNP46S2oT0FyNnvg.png",
      description:
        "RWTH Aachen is Germany's largest technical university and a leading center for engineering education in Europe. Its close proximity to industrial regions makes it a hub for technological innovation and applied research, particularly in mechanical engineering and production technology.",
    },
    {
      name: "Karlsruhe Institute of Technology (KIT)",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Di34bISjiGBh5aA8G5WUMB5Z32SLUR.png",
      description:
        "KIT combines the traditions of a prestigious technical university with cutting-edge research facilities. It is particularly renowned for its computer science, energy research, and climate science programs, contributing significantly to Germany's energy transition initiatives.",
    },
    {
      name: "Ludwig-Maximilians-Universität München (LMU)",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YCF9PCdrB7qHdBH146d96gitN6xmOy.png",
      description:
        "While known for comprehensive education across disciplines, LMU has strong programs in applied sciences and technology. Its research centers focus on quantum science, nanotechnology, and biotechnology, making it a vital part of Munich's innovation ecosystem.",
    },
    {
      name: "Universität Stuttgart",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VeRYQlDimblTvowub7iiA727aLZwjC.png",
      description:
        "Stuttgart University is recognized for its outstanding programs in engineering and natural sciences. Located in Germany's industrial heartland, it specializes in automotive engineering, aerospace technology, and sustainable manufacturing processes.",
    },
  ]
  
  

const faqs = [
  {
    question: "What is Environmental Science?",
    answer:
      "It’s the study of the environment, focusing on issues like conservation, pollution, and climate change..",
  },
  {
    question: "What degrees do I need to work in Environmental Science in Germany?",
    answer:
      "A bachelor’s degree in environmental science, ecology, or a related field is required, with postgraduate degrees useful for specialized roles.",
  },
  {
    question: "What skills are essential for environmental scientists in Germany?",
    answer:
      "Analytical thinking, data analysis, and strong communication skills are critical.",
  },
  {
    question: "Are there internships available for environmental science students in Germany?",
    answer:
      "Yes, internships are available through universities, environmental organizations, and government agencies.",
  },
  {
    question: "What are the emerging technologies in Germany’s environmental science sector?",
    answer:
      "Solar energy, AI-driven climate models, and advanced conservation techniques are key innovations.",
  },
  {
    question: "Can Germanyn environmental scientists work internationally?",
    answer:
      "Yes, Germanyn environmental qualifications are respected globally, providing international career opportunities.",
  },
  {
    question: "What is the job outlook for environmental scientists in Germany?",
    answer:
      "The outlook is positive, particularly in renewable energy, conservation, and climate change sectors.",
  },
  {
    question: "How does specialization affect my career in Germanyn environmental science?",
    answer:
      "Specializing in areas like renewable energy or climate resilience can lead to higher salaries and more career opportunities.",
  },
  {
    question: "Are environmental science jobs flexible in Germany?",
    answer:
      "Many roles offer flexibility, including remote work, fieldwork, and project-based opportunities.",
  },
  {
    question: "What are the challenges faced by environmental scientists in Germany today?",
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >Germany</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Environmental Science</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
            Gateway to Innovative Careers in Germany
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
              

            Germany’s unique landscapes and ecosystems, from the Great Barrier Reef to vast deserts, create significant opportunities for careers in Environmental Science. Professionals in wildlife conservation, climate change analysis, and renewable energy management play crucial roles in preserving biodiversity, addressing climate challenges, and promoting sustainability.
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
      Choosing a career in Environmental Science in Germany provides the chance to make a significant impact in protecting the country’s unique ecosystems and addressing climate challenges. With Germany’s strong focus on sustainability and clean energy, professionals in this field are at the forefront of innovation and conservation.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Environmental Science Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for Environmental Science professionals in Germany is highly favorable, particularly in wildlife conservation, renewable energy, and climate change analysis. As the government and private sector continue to invest in sustainability, demand for skilled professionals is growing.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Environmental Science
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The future of Environmental Science in Germany focuses on protecting biodiversity, mitigating climate impacts, and expanding renewable energy. Conservationists will continue to restore habitats, climate change analysts will guide policies to protect vulnerable communities, and renewable energy managers will lead the country’s clean energy transition.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Environmental Science Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Leading employers in Germany’s environmental sector include the Department of Agriculture, Water and the Environment, the Germanyn Wildlife Conservancy, and renewable energy companies such as AGL Energy and Origin Energy.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
            Top Picks for Future Engineers:<br />
            Germany's Elite Tech Universities
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
          Environmental science professionals in Germany earn competitive salaries. Wildlife conservationists typically earn around AUD $70,000 annually, while climate change analysts make approximately AUD $80,000. Renewable energy managers can expect salaries around AUD $90,000, depending on their specialization and experience.
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

