import React from "react"
import img1 from "../../../../assets/Group-11-1.png"
import img2 from "../../../../assets/icon-3.png"

const courses = [
  {
    title: "Cryptographer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aPkZvJQAMciiqSaF4p8O2pvKNpAATL.png",
    description:
      "Cryptographers in UK work on developing advanced encryption techniques to secure digital communications and transactions. These professionals are vital to secure the finance, telecommunications, and government, where data privacy and security are of utmost importance.",
  },
  {
    title: "Statistical Data Analyst",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d6WsWN6WhBHge2ejCeevQ7lgYCxWzr.png",
    description:
      "Statistical Data Analysts in UK help businesses and government agencies make sense of large datasets, providing insights that improve decision-making and strategy. These professionals work across industries including healthcare, finance, and technology, where data-driven strategies are key to success.",
  },
  {
    title: "Operations Research Analyst",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qiI5E30qO8Z27Z8TZvsm0Bv0ROrbdT.png",
    description:
      "Operations Research Analysts in UK use mathematical and statistical models to optimize organizational processes, improve logistics, and enhance efficiency in various sectors. Their expertise helps businesses maximize productivity, reduce costs, and streamline operations.",
  },
]

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
    question: "What is Mathematics and Statistics?",
    answer: "Mathematics and Statistics involves using numerical analysis and data to understand patterns, solve complex problems and make predictions.",
  },
  {
    question: "What degrees do I need to work in Mathematics and Statistics in UK?",
    answer: "A bachelor's degree in mathematics, statistics, or related fields is required, with advanced degrees needed for research and specialized roles.",
  },
  {
    question: "What skills are essential for mathematicians and statisticians in UK?",
    answer: "Strong analytical skills, problem-solving abilities, and proficiency in statistical software are crucial for success.",
  },
  {
    question: "Are there internships available for mathematics students in UK?",
    answer: "Yes, many organizations offer internships in data analysis, research, and financial modeling.",
  },
  {
    question: "What are the emerging technologies in UK's mathematics sector?",
    answer: "Machine learning, predictive analytics, and computational mathematics are key emerging areas.",
  },
  {
    question: "Can UKn mathematicians work internationally?",
    answer: "Yes, UKn mathematics and statistics qualifications are highly regarded globally.",
  },
  {
    question: "What is the job outlook for mathematicians in UK?",
    answer: "The outlook is strong, particularly in data science, cryptography, and financial analysis.",
  },
  {
    question: "How does specialization affect my career in UKn mathematics?",
    answer: "Specializing in areas like data science or financial mathematics can lead to higher-paying opportunities.",
  },
  {
    question: "Are mathematics jobs flexible in UK?",
    answer: "Many roles offer flexible arrangements, including remote work options and project-based positions.",
  },
  {
    question: "What are the challenges faced by mathematicians in UK today?",
    answer: "Keeping up with rapidly evolving technology and applying theoretical concepts to real-world problems.",
  },
]

export default function MathematicsStatistics() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState(null)

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-[#37d7d9]">edulinks</span>
              </a>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Study Destinations</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Services</a>
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

      <div className="relative py-16 sm:py-24">
        <div className="absolute inset-0 "
        style={
        
                {
                  backgroundImage: `url(${img1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              } />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1">UK</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Mathematics and Statistics</h1>
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
          UK's Mathematics and Statistics sector offers opportunities to work in key industries including finance, technology, and research. Mathematics and Statistics professionals excel in data analysis, mathematical modeling, and applying quantitative methods to solve complex problems and drive decision-making across various sectors.
        </h1>
      </div>
      </div>

      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {courses.map((course, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} gap-8`}>
                <div className="flex-shrink-0">
                  <img src={course.image} alt={course.title} className="rounded-lg shadow-lg w-[401px] h-[292px] object-cover" />
                </div>
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
          <div className="text-center">
            <h1 className="text-[32px] font-regular text-[#232323] mb-6">
              Why Choose a Career in Mathematics and Statistics?
            </h1>
            <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
              A career in Mathematics and Statistics in UK offers the opportunity to work in an innovative and rapidly growing industry. Professionals in these fields contribute to advancements in data science, financial modeling, and organizational optimization, making significant impacts across various sectors.
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-[32px] font-regular text-[#232323] mb-6">
              Mathematics and Statistics Job Outlook
            </h1>
            <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
              The job outlook for Mathematics and Statistics professionals in UK is strong, with increasing demand for expertise in cryptography, statistical data analysis, and operations research. As organizations continue to rely on data-driven strategies, opportunities in these fields are expected to grow.
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-[32px] font-regular text-[#232323] mb-6">
              Future Aspects of Mathematics and Statistics
            </h1>
            <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
              The future of Mathematics and Statistics in UK is focused on advancements in big data analytics, and cryptography. Data analysts and operations researchers will continue to drive innovations in digital transformation, while data scientists and operational researchers will advance optimization techniques and predictive analytics.
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-[32px] font-regular text-[#232323] mb-6">
              Top Mathematics and Statistics Employers
            </h1>
            <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
              Leading employers in UK's Mathematics and Statistics sector include Commonwealth Bank, Telstra, Afterpay, and the UKn Government. Universities and research institutions also offer numerous opportunities for professionals in mathematics and statistics.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
            Top Picks for Future Mathematicians and Statisticians:<br />
            UK's Elite Universities
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {universities.map((university, index) => (
              <div key={index} className="w-full sm:w-[369.537px] bg-white shadow-lg overflow-hidden border-b-4 border-[#37D7D9]">
                <div className="h-[365px] overflow-hidden">
                  <img src={university.image} alt={university.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between h-[152px]">
                  <h3 className="text-[24px] font-normal font-roboto text-center">{university.name}</h3>
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

      <div className="text-center max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-[32px] font-regular text-[#232323] mb-6">
          Average Salary in Mathematics and Statistics
        </h1>
        <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Mathematics and Statistics professionals in UK earn competitive salaries. Cryptographers typically earn around AUD $95,000 annually, while Statistical Data Analysts make approximately AUD $85,000. Operations Research Analysts can expect salaries of about AUD $90,000, depending on their experience and expertise.
        </p>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-regular text-center mb-8">Top 10 FAQs for Mathematics and Statistics</h2>
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

