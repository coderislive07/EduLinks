import React from "react"
import img1 from "../../../../assets/Group-10.png"
import img2 from "../../../../assets/icon-3.png"



const courses = [
    {
      title: "Genetic Counsellor",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aPkZvJQAMciiqSaF4p8O2pvKNpAATL.png",
      description:
        "Genetic Counsellors in New Zealand help individuals and families assess their genetic health risks, offering guidance on inherited conditions and reproductive planning. These professionals work closely with healthcare teams to interpret genetic tests and provide personalized care, contributing to New Zealand's growing focus on preventive healthcare.",
    },
    {
      title: "Pharmaceutical Research Technician",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d6WsWN6WhBHge2ejCeevQ7lgYCxWzr.png",
      description:
        "Pharmaceutical Research Technicians in New Zealand support the development and testing of new drugs, working in laboratories to ensure the safety and efficacy of pharmaceutical products. They play a vital role in New Zealand's growing pharmaceutical industry, contributing to research that improves public health.",
    },
    {
      title: "Bioinformatics",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qiI5E30qO8Z27Z8TZvsm0Bv0ROrbdT.png",
      description:
        "Bioinformatics professionals in New Zealand apply computational techniques to analyze biological data, supporting research in genomics, drug discovery, and personalized medicine. With the growth of big data in healthcare and research organizations, using data science to solve complex biological challenges.",
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
    question: "What is Biotechnology?",
    answer:
      "Biotechnology combines biological science with technology to develop solutions for healthcare, agriculture, and environmental conservation.",
  },
  {
    question: "What degrees do I need to work in Biotechnology in New Zealand?",
    answer:
      "A bachelor’s or master’s degree in biotechnology, genetics, bioinformatics, or related fields is required, with PhDs needed for advanced research roles.",
  },
  {
    question: "What skills are essential for biotechnologists in New Zealand?",
    answer:
      "Data analysis, research skills, and technical proficiency in biological sciences are key for success.",
  },
  {
    question: "Are there internships available for biotechnology students in New Zealand?",
    answer:
      "Yes, many biotech companies and universities offer internships to provide practical experience in research and development.",
  },
  {
    question: "What are the emerging technologies in New Zealand’s biotechnology sector?",
    answer:
      "Gene editing, AI in drug discovery, and advancements in personalized medicine are key innovations.",
  },
  {
    question: "Can New Zealandn biotechnologists work internationally?",
    answer:
      "Yes, New Zealandn biotechnology qualifications are respected globally, opening doors to international career opportunities.",
  },
  {
    question: "What is the job outlook for biotechnologists in New Zealand?",
    answer:
      "The outlook is strong, particularly in bioinformatics, genetic counseling, and pharmaceutical research.",
  },
  {
    question: "How does specialization affect my career in New Zealandn biotechnology?",
    answer:
      "Specializing in high-demand areas like bioinformatics or genetic counseling can lead to more job opportunities and higher salaries.",
  },
  {
    question: "Are biotechnology jobs flexible in New Zealand?",
    answer:
      "Many biotechnology roles offer flexibility, including research-based work, remote data analysis, and project-based employment.",
  },
  {
    question: "What are the challenges faced by biotechnologists in New Zealand today?",
    answer:
      "Challenges include navigating regulatory frameworks for genetic research and advancing sustainable agricultural solutions.",
  },

  
]

export default function BioTech() {
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >New Zealand</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Biotechnology</h1>
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
              
            New Zealand’s Biotechnology sector is thriving, contributing to advancements in healthcare, agriculture, and environmental sustainability. Biotechnology professionals work in fields such as genetic counseling, pharmaceutical research, and bioinformatics, driving innovation in medical treatments, sustainable agriculture, and genomics research.
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
      Why Choose a Career in Biotechnology?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      A career in Biotechnology in New Zealand offers the chance to work in a highly innovative industry that addresses global health and environmental challenges. Biotechnology professionals in New Zealand contribute to advancements in medical treatments, sustainable agriculture, and genetic research, making a significant impact on society.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Biotechnology Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for Biotechnology professionals in New Zealand is strong, particularly in genetic counseling, pharmaceutical research, and bioinformatics. As the country invests in healthcare innovation and sustainable agriculture, demand for biotechnology expertise is expected to grow.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Biotechnology
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      New Zealand’s future in Biotechnology focuses on personalized medicine, gene therapy, and bioinformatics-driven research. Genetic counselors will continue to provide personalized healthcare, while bioinformatics professionals will drive innovations in genomics and agricultural biotechnology.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Biotechnology Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Leading employers in New Zealand’s biotechnology sector include CSL Limited, Cochlear, and government research institutions. Universities and hospitals also offer numerous opportunities for professionals specializing in genetic counseling, pharmaceutical research, and bioinformatics.
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
          Average Salary in Biotechnology
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Biotechnology professionals in New Zealand earn competitive salaries. 
          Genetic counselors typically earn around AUD $80,000 annually,
           while pharmaceutical research technicians make approximately AUD $60,000. Bioinformatics specialists can expect salaries of about AUD $85,000, depending on their expertise and experience.
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

