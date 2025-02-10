import React from "react"
import img1 from "../../../../assets/Group-11-1.png"
import img2 from "../../../../assets/icon-3.png"
import {ChevronDown} from "lucide-react";


const courses = [
  {
    title: "Cryptographer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aPkZvJQAMciiqSaF4p8O2pvKNpAATL.png",
    description:
      "Cryptographers in Australia work on developing advanced encryption techniques to secure digital communications and transactions. These professionals are vital to secure the finance, telecommunications, and government, where data privacy and security are of utmost importance.",
  },
  {
    title: "Statistical Data Analyst",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d6WsWN6WhBHge2ejCeevQ7lgYCxWzr.png",
    description:
      "Statistical Data Analysts in Australia help businesses and government agencies make sense of large datasets, providing insights that improve decision-making and strategy. These professionals work across industries including healthcare, finance, and technology, where data-driven strategies are key to success.",
  },
  {
    title: "Operations Research Analyst",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qiI5E30qO8Z27Z8TZvsm0Bv0ROrbdT.png",
    description:
      "Operations Research Analysts in Australia use mathematical and statistical models to optimize organizational processes, improve logistics, and enhance efficiency in various sectors. Their expertise helps businesses maximize productivity, reduce costs, and streamline operations.",
  },
]

const universities = [
  {
    name: "University of Melbourne",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pnbutq0gI9kfXYkMYyMs6K6mHB5Nqi.png",
  },
  {
    name: "University of Sydney",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s2KXZvugIpnykOll0tAEC9ai9xWQvN.png",
  },
  {
    name: "Australian National University",
    image: "https://edulinks.io/wp-content/uploads/2024/10/CANADA-21-1.png",
  },
  {
    name: "University of Queensland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7cqEt7DDDpf8lh9wq4c6lbbw0yQUGk.png",
  },
  {
    name: "University of New South Wales",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-arDcb4Y5S46TcMjiMtRm1wr45m9gI7.png",
  },
]

const faqs = [
  {
    question: "What is Mathematics and Statistics?",
    answer: "Mathematics and Statistics involves using numerical analysis and data to understand patterns, solve complex problems and make predictions.",
  },
  {
    question: "What degrees do I need to work in Mathematics and Statistics in Australia?",
    answer: "A bachelor's degree in mathematics, statistics, or related fields is required, with advanced degrees needed for research and specialized roles.",
  },
  {
    question: "What skills are essential for mathematicians and statisticians in Australia?",
    answer: "Strong analytical skills, problem-solving abilities, and proficiency in statistical software are crucial for success.",
  },
  {
    question: "Are there internships available for mathematics students in Australia?",
    answer: "Yes, many organizations offer internships in data analysis, research, and financial modeling.",
  },
  {
    question: "What are the emerging technologies in Australia's mathematics sector?",
    answer: "Machine learning, predictive analytics, and computational mathematics are key emerging areas.",
  },
  {
    question: "Can Australian mathematicians work internationally?",
    answer: "Yes, Australian mathematics and statistics qualifications are highly regarded globally.",
  },
  {
    question: "What is the job outlook for mathematicians in Australia?",
    answer: "The outlook is strong, particularly in data science, cryptography, and financial analysis.",
  },
  {
    question: "How does specialization affect my career in Australian mathematics?",
    answer: "Specializing in areas like data science or financial mathematics can lead to higher-paying opportunities.",
  },
  {
    question: "Are mathematics jobs flexible in Australia?",
    answer: "Many roles offer flexible arrangements, including remote work options and project-based positions.",
  },
  {
    question: "What are the challenges faced by mathematicians in Australia today?",
    answer: "Keeping up with rapidly evolving technology and applying theoretical concepts to real-world problems.",
  },
]

export default function MathematicsStatistics() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState(null)

  return (
    <div className="min-h-screen">
      

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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1">Australia</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Mathematics and Statistics</h1>
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
          Australia's Mathematics and Statistics sector offers opportunities to work in key industries including finance, technology, and research. Mathematics and Statistics professionals excel in data analysis, mathematical modeling, and applying quantitative methods to solve complex problems and drive decision-making across various sectors.
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
              A career in Mathematics and Statistics in Australia offers the opportunity to work in an innovative and rapidly growing industry. Professionals in these fields contribute to advancements in data science, financial modeling, and organizational optimization, making significant impacts across various sectors.
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-[32px] font-regular text-[#232323] mb-6">
              Mathematics and Statistics Job Outlook
            </h1>
            <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
              The job outlook for Mathematics and Statistics professionals in Australia is strong, with increasing demand for expertise in cryptography, statistical data analysis, and operations research. As organizations continue to rely on data-driven strategies, opportunities in these fields are expected to grow.
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-[32px] font-regular text-[#232323] mb-6">
              Future Aspects of Mathematics and Statistics
            </h1>
            <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
              The future of Mathematics and Statistics in Australia is focused on advancements in big data analytics, and cryptography. Data analysts and operations researchers will continue to drive innovations in digital transformation, while data scientists and operational researchers will advance optimization techniques and predictive analytics.
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-[32px] font-regular text-[#232323] mb-6">
              Top Mathematics and Statistics Employers
            </h1>
            <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
              Leading employers in Australia's Mathematics and Statistics sector include Commonwealth Bank, Telstra, Afterpay, and the Australian Government. Universities and research institutions also offer numerous opportunities for professionals in mathematics and statistics.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
            Top Picks for Future Mathematicians and Statisticians:<br />
            Australia's Elite Universities
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {universities.map((university, index) => (
              <div key={index} className="w-full sm:w-[369.537px] bg-white shadow-lg overflow-hidden border-b-4 border-[#37D7D9]">
                <div className="h-[365px] overflow-hidden">
                  <img src={university.image} alt={university.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between h-[152px]">
                  <h3 className="text-[20px] font-normal font-roboto text-center">{university.name}</h3>
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
          Mathematics and Statistics professionals in Australia earn competitive salaries. Cryptographers typically earn around AUD $95,000 annually, while Statistical Data Analysts make approximately AUD $85,000. Operations Research Analysts can expect salaries of about AUD $90,000, depending on their experience and expertise.
        </p>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-regular text-center mb-8">Top 10 FAQs for Mathematics and Statistics</h2>
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

