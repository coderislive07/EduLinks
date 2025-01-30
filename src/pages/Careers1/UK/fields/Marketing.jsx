import React from "react"
import img1 from "../../../../assets/Group-15.png"
import img2 from "../../../../assets/icon-3.png"



const courses = [
    {
      title: "Digital Marketing Specialist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SrllehjdLTAkorIXloJnUcoPw8f5Hj.png",
      description:
        "Digital Marketing Specialists in UK develop and implement online marketing strategies that include social media, email marketing, and paid digital advertising. They use data to optimize campaigns, increase brand awareness, and drive sales. Digital marketing specialists are essential in helping businesses connect with their target audience in a highly competitive market.",
    },
    {
      title: "Market Research Analyst",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NVuwCSBdThSoRbXWnRFVI7BKeQ5DKc.png",
      description:
        "Market Research Analysts in UK collect and analyze data on consumer preferences, market trends, and industry competitors. They provide actionable insights that guide marketing campaigns and business strategies, ensuring companies can effectively meet the needs of their customers and remain competitive.",
    },
    {
      title: "SEO/SEM Specialist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bM5HiLWuAZTnCvHtTb6oA7jIFfEc15.png",
      description:
        "SEO/SEM Specialists in UK focus on improving the online visibility of businesses through organic search optimization and paid search engine marketing. These specialists help companies increase traffic, improve search rankings, and generate leads or sales by using both SEO techniques and SEM strategies.",
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
    question: "What is Marketing?",
    answer:
      "It’s the practice of promoting products or services through market research, advertising, and customer engagement strategies.",
  },
  {
    question: "What degrees do I need to work in Marketing in UK?",
    answer:
      "A bachelor’s degree in marketing, business, or communications is required, with digital marketing and data analysis as valuable specializations.",
  },
  {
    question: "What skills are essential for marketers in UK?",
    answer:
      "Key skills include creativity, analytical thinking, communication, and proficiency in digital tools like Google Ads, Facebook Ads, and SEO strategies.",
  },
  {
    question: "Are there internships available for marketing students in UK?",
    answer:
      "Internships are widely available in retail, tech, and finance, offering practical experience in digital marketing, SEO, and market research.",
  },
  {
    question: "What are the emerging trends in UK’s marketing sector?",
    answer:
      "Key trends include the rise of personalized marketing, AI-driven campaigns, and the increasing use of data analytics for decision-making.",
  },
  {
    question: "Can UKn marketers work internationally?",
    answer:
      "Yes, marketing qualifications and experience gained in UK are highly regarded globally, offering opportunities to work abroad.",
  },
  {
    question: "What is the job outlook for marketers in UK?",
    answer:
      "The outlook is positive, especially for digital marketing, market research, and SEO/SEM roles.",
  },
  {
    question: "How does specialization affect my career in UKn marketing?",
    answer:
      "Specializing in high-demand areas like digital marketing, data analysis, or SEO can lead to higher salaries and better job prospects.",
  },
  {
    question: "Are marketing jobs flexible in UK?",
    answer:
      "Yes, many marketing roles offer flexibility, including opportunities for remote work and freelance consulting.",
  },
  {
    question: "What are the challenges faced by marketers in UK today?",
    answer:
      "Challenges include staying updated on changing platforms, managing data privacy regulations, and adapting to evolving consumer behavior.",
  },

  
]

export default function Psycho() {
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
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Marketing</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
            Gateway to Dynamic Careers in UK
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
              
            
                UK’s marketing industry is thriving, with a strong focus on digital marketing, data analysis, and e-commerce growth. Marketing professionals in UK, especially in fields like digital marketing, market research, and SEO/SEM, are key players in helping businesses engage with consumers and stay competitive in the digital landscape.   
            
            

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
      Why Choose a Career in Marketing?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      A career in marketing in UK offers the chance to work with leading brands, develop innovative campaigns, and leverage digital platforms to engage with consumers. Marketing professionals are integral to business success, driving growth through data-driven insights, creative strategies, and digital marketing expertise.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Marketing Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for marketing professionals in UK is highly favorable, particularly in digital marketing, market research, and SEO/SEM roles. As businesses continue to expand their online presence and focus on data-driven decision-making, demand for skilled marketers is expected to grow.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Marketing
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The future of marketing in UK will be driven by digital transformation, personalization, and data analytics. Digital marketing specialists will continue to optimize campaigns using AI and automation tools, while market research analysts will leverage advanced analytics to better understand consumer behavior. SEO/SEM specialists will remain crucial for maintaining strong online visibility in a competitive marketplace.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Marketing Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      
      Leading employers in UK include major corporations like Woolworths, Commonwealth Bank, and Qantas. Advertising agencies, tech companies, and e-commerce businesses also provide significant opportunities for marketing professionals.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
          Top Picks for Future Marketers:<br />
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
          Average Salary in Marketing
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Salaries for marketing professionals in UK vary depending on the role. Digital marketing specialists typically earn around AUD $80,000 annually, while market research analysts make approximately AUD $85,000. SEO/SEM specialists can expect to earn about AUD $75,000, depending on their experience and campaign complexity.
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

