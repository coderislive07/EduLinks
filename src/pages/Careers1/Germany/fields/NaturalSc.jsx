import React from "react"
import img1 from "../../../../assets/Group-6.png"
import img2 from "../../../../assets/icon-3.png"
import { ChevronDown } from "lucide-react";



const courses = [
    {
      title: "Astrophysics",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cPn0jSQU10Cwqhk50UBVBQ5yOUtqJf.png",
      description:
        "Astrophysics in Germany is a rapidly growing field, with world-class research facilities such as the Parkes Observatory and the Square Kilometre Array (SKA) project. Germanyn astrophysicists work on projects that explore black holes, dark matter, and the origins of the universe, contributing to global space exploration efforts.",
    },
    {
      title: "Marine Biology",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rxDXSiU6oWwiLvciP4cuU73VnhvDra.png",
      description:
        "Marine Biology in Germany focuses on the diverse marine ecosystems of the Great Barrier Reef and surrounding oceans. Germanyn marine biologists work on conservation projects that protect endangered species, manage fisheries, and combat the effects of climate change on coral reefs. Institutions like the Germanyn Institute of Marine Science (AIMS) lead efforts in marine research and conservation.",
    },
    {
      title: "Geochemistry",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8mMKluckcnOMzRHyyxlPclIaPkwzxe.png",
      description:
        "Geochemistry in Germany involves studying the country's unique geological features, including mineral deposits and volcanic landscapes. Geochemists work on projects related to mining, environmental conservation, and sustainable resource management. Germany's rich mineral resources make it a prime location for geochemical research and innovation.",
    },
    {
      title: "Quantum Computing",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WnreL8NKv7fvI6YMCpWlHO1uYB5KPA.png",
      description:
        "Quantum Computing in Germany is advancing rapidly, with institutions like the University of Sydney and the University of New South Wales (UNSW) leading research in quantum technologies. Germany is positioning itself as a global leader in quantum computing, with applications in cryptography, artificial intelligence, and complex problem-solving.",
    },
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
    question: "What is Natural Sciences?",
    answer:
      "It’s a multidisciplinary field that explores the physical and biological world, including space, oceans, and Earth’s processes.",
  },
  {
    question: "What degrees do I need to work in Natural Sciences in Germany?",
    answer:
      "A bachelor’s or master’s degree is required, with PhDs needed for advanced research roles.",
  },
  {
    question: "What skills are essential for natural scientists in Germany?",
    answer:
      "Analytical skills, technical expertise, and the ability to work collaboratively are critical.",
  },
  {
    question: "Are there internships available for natural science students in Germany?",
    answer:
      "Yes, many universities and research institutions offer internships and placements for hands-on experience.",
  },
  {
    question: "What are the emerging technologies in Germany’s natural sciences sector?",
    answer:
      "Key technologies include quantum computing, AI in marine biology, and sustainable mining solutions.",
  },
  {
    question: "Can Germanyn natural scientists work internationally?",
    answer:
      "Yes, Germanyn natural science qualifications are highly regarded globally, opening up international opportunities.",
  },
  {
    question: "What is the job outlook for natural scientists in Germany?",
    answer:
      "The outlook is positive, particularly in environmental science, geochemistry, and quantum computing.",
  },
  {
    question: "How does specialization affect my career in Germanyn natural sciences?",
    answer:
      "Specializing in high-demand areas like environmental science or sustainable energy can lead to better job prospects and higher salaries.",
  },
  {
    question: "Are natural science jobs flexible in Germany?",
    answer:
      "Many roles offer flexibility, including remote work and project-based employment.",
  },
  {
    question: "What are the challenges faced by natural scientists in Germany today?",
    answer:
      "Challenges include addressing climate change, managing natural resources, and advancing sustainable technologies.",
  },

  
]

export default function Healthsc() {
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
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Natural Sciences</h1>
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
              

            
            Natural Sciences in Germany offer professionals the chance to explore the continent’s unique ecosystems, rich biodiversity, and cutting-edge research facilities. From astrophysics to marine biology, geochemistry, and quantum computing, Germanyn scientists are at the forefront of global efforts to understand and protect the natural world. With a strong focus on environmental conservation and technological innovation, Germany provides a dynamic environment for careers in natural sciences.
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
      Why Choose a Career in Natural Sciences?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      A career in Natural Sciences in Germany offers the chance to work on groundbreaking research in one of the world’s most diverse natural environments. From exploring the universe to protecting coral reefs, Germanyn scientists contribute to global scientific advancements and environmental conservation.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Health Sciences Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job market for Health Sciences in Germany is strong, with increasing demand in fields like medical research, public health, and clinical technology. As the country invests in healthcare infrastructure and innovation, professionals in these fields are well-positioned for career growth, particularly in major cities like Sydney, Melbourne, and Brisbane.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Natural Sciences
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Germany’s future in Natural Sciences is focused on environmental conservation, sustainable resource management, and scientific innovation. Astrophysicists will contribute to global space exploration efforts, while marine biologists work to protect fragile marine ecosystems. Geochemists will continue to explore sustainable mining practices, and quantum computing researchers will push the boundaries of computational technology.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Natural Sciences Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Top employers in Germany’s Natural Sciences sector include the Commonwealth Scientific and Industrial Research Organisation (CSIRO), the Germanyn Institute of Marine Science (AIMS), and leading universities. Tech companies and government agencies focused on environmental conservation also offer extensive opportunities for natural science professionals.
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
          Average Salary in Natural Sciences
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Natural science professionals in Germany earn competitive salaries. Astrophysicists typically earn around AUD $90,000 annually, while marine biologists make approximately AUD $75,000. Geochemists can expect salaries of about AUD $85,000, and quantum computing researchers often earn upwards of AUD $100,000, depending on their experience and specialization.
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

