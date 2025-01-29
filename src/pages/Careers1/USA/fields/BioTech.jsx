import React from "react"
import img1 from "../../../../assets/Group-10.png"
import img2 from "../../../../assets/icon-3.png"



const courses = [
    {
      title: "Genetic Counsellor",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aPkZvJQAMciiqSaF4p8O2pvKNpAATL.png",
      description:
        "Genetic Counsellors in USA help individuals and families assess their genetic health risks, offering guidance on inherited conditions and reproductive planning. These professionals work closely with healthcare teams to interpret genetic tests and provide personalized care, contributing to USA's growing focus on preventive healthcare.",
    },
    {
      title: "Pharmaceutical Research Technician",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d6WsWN6WhBHge2ejCeevQ7lgYCxWzr.png",
      description:
        "Pharmaceutical Research Technicians in USA support the development and testing of new drugs, working in laboratories to ensure the safety and efficacy of pharmaceutical products. They play a vital role in USA's growing pharmaceutical industry, contributing to research that improves public health.",
    },
    {
      title: "Bioinformatics",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qiI5E30qO8Z27Z8TZvsm0Bv0ROrbdT.png",
      description:
        "Bioinformatics professionals in USA apply computational techniques to analyze biological data, supporting research in genomics, drug discovery, and personalized medicine. With the growth of big data in healthcare and research organizations, using data science to solve complex biological challenges.",
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
    question: "What is Biotechnology?",
    answer:
      "Biotechnology combines biological science with technology to develop solutions for healthcare, agriculture, and environmental conservation.",
  },
  {
    question: "What degrees do I need to work in Biotechnology in USA?",
    answer:
      "A bachelor’s or master’s degree in biotechnology, genetics, bioinformatics, or related fields is required, with PhDs needed for advanced research roles.",
  },
  {
    question: "What skills are essential for biotechnologists in USA?",
    answer:
      "Data analysis, research skills, and technical proficiency in biological sciences are key for success.",
  },
  {
    question: "Are there internships available for biotechnology students in USA?",
    answer:
      "Yes, many biotech companies and universities offer internships to provide practical experience in research and development.",
  },
  {
    question: "What are the emerging technologies in USA’s biotechnology sector?",
    answer:
      "Gene editing, AI in drug discovery, and advancements in personalized medicine are key innovations.",
  },
  {
    question: "Can USAn biotechnologists work internationally?",
    answer:
      "Yes, USAn biotechnology qualifications are respected globally, opening doors to international career opportunities.",
  },
  {
    question: "What is the job outlook for biotechnologists in USA?",
    answer:
      "The outlook is strong, particularly in bioinformatics, genetic counseling, and pharmaceutical research.",
  },
  {
    question: "How does specialization affect my career in USAn biotechnology?",
    answer:
      "Specializing in high-demand areas like bioinformatics or genetic counseling can lead to more job opportunities and higher salaries.",
  },
  {
    question: "Are biotechnology jobs flexible in USA?",
    answer:
      "Many biotechnology roles offer flexibility, including research-based work, remote data analysis, and project-based employment.",
  },
  {
    question: "What are the challenges faced by biotechnologists in USA today?",
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >USA</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Biotechnology</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
            Gateway to Innovative Careers in USA
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
              
            USA’s Biotechnology sector is thriving, contributing to advancements in healthcare, agriculture, and environmental sustainability. Biotechnology professionals work in fields such as genetic counseling, pharmaceutical research, and bioinformatics, driving innovation in medical treatments, sustainable agriculture, and genomics research.
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
      A career in Biotechnology in USA offers the chance to work in a highly innovative industry that addresses global health and environmental challenges. Biotechnology professionals in USA contribute to advancements in medical treatments, sustainable agriculture, and genetic research, making a significant impact on society.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Biotechnology Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for Biotechnology professionals in USA is strong, particularly in genetic counseling, pharmaceutical research, and bioinformatics. As the country invests in healthcare innovation and sustainable agriculture, demand for biotechnology expertise is expected to grow.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Biotechnology
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      USA’s future in Biotechnology focuses on personalized medicine, gene therapy, and bioinformatics-driven research. Genetic counselors will continue to provide personalized healthcare, while bioinformatics professionals will drive innovations in genomics and agricultural biotechnology.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Biotechnology Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Leading employers in USA’s biotechnology sector include CSL Limited, Cochlear, and government research institutions. Universities and hospitals also offer numerous opportunities for professionals specializing in genetic counseling, pharmaceutical research, and bioinformatics.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
            Top Picks for Future Engineers:<br />
            USA's Elite Tech Universities
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
          Biotechnology professionals in USA earn competitive salaries. 
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

