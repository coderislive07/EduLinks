import React from "react"
import img1 from "../../../../assets/Group-7.png"
import img2 from "../../../../assets/icon-3.png"
import { ChevronDown } from "lucide-react";


const courses = [
    {
      title: "Cybersecurity Specialist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ud5aSMMvpbZDojSQBCbsXsyGV0Umlb.png",
      description:
        "Cybersecurity is a top priority in USA, with specialists tasked with protecting the country's digital infrastructure from an increasing number of cyber threats. Cybersecurity professionals work across sectors like government, finance, and healthcare to safeguard data and systems. As cybercrime continues to rise, cybersecurity specialists are in high demand in USA.",
    },
    {
      title: "Machine Learning Engineer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YtlZ6jQvEjrdrQRjplNN6ei1XEnkGh.png",
      description:
        "Machine Learning Engineers in USA are at the forefront of AI innovations, building algorithms that enable machines to learn from data. These engineers work across sectors such as healthcare, finance, and agriculture, contributing to automation and decision-making processes. USA's growing AI research ecosystem provides numerous opportunities for machine learning professionals.",
    },
    {
      title: "Blockchain Developer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rZJHSSEcVm3ZVGFj31ImgoAvrK8DCG.png",
      description:
        "Blockchain Developers in USA are transforming industries by implementing decentralized systems that enhance transparency and security. From finance to agriculture, blockchain technology is gaining traction, and developers are playing a key role in its adoption. With USA's focus on digital transformation, blockchain developers are in high demand.",
    }
  ];

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
    question: "What is Information Technology?",
    answer:
      "IT involves the use of computers, software, and networks to store, retrieve, and secure data.",
  },
  {
    question: "What degrees do I need to work in Health Sciences in USA?",
    answer:
      "A degree in IT, computer science, or a related field is required, with certifications valuable in cybersecurity and AI.",
  },
  {
    question: "What skills are essential for IT professionals in USA?",
    answer:
      "Technical expertise, adaptability to new technologies, and problem-solving skills are essential.",
  },
  {
    question: "Are there internships available for IT students in USA?",
    answer:
      "Yes, many USAn universities and companies offer internships, providing practical experience in various IT fields.",
  },
  {
    question: "What are the emerging technologies in USA’s IT sector?",
    answer:
      "AI, blockchain, and cybersecurity are among the most prominent emerging technologies.",
  },
  {
    question: "Can USAn IT professionals work internationally?",
    answer:
      "Yes, USAn IT qualifications are globally respected, enabling professionals to pursue international careers.",
  },
  {
    question: "What is the job outlook for IT professionals in USA?",
    answer:
      "The outlook is highly positive, especially in cybersecurity, AI, and blockchain development.",
  },
  {
    question: "How does specialization affect my career in USAn IT?",
    answer:
      "Specializing in high-demand areas like machine learning or blockchain can lead to better opportunities and higher salaries.",
  },
  {
    question: "Are IT jobs flexible in USA?",
    answer:
      "Many IT roles offer flexible working arrangements, including remote work and freelance opportunities.",
  },
  {
    question: "What are the challenges faced by IT professionals in USA today?",
    answer:
      "Challenges include keeping up with cybersecurity threats and staying current with fast-evolving technology",
  },

  
]

export default function AusEngAndTech() {
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
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Information Technology</h1>
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
              

            USA’s Information Technology sector is rapidly expanding, playing a critical role in economic growth and innovation. IT professionals in USA work on cutting-edge technologies in cybersecurity, AI, and blockchain, contributing to advancements in industries such as finance, healthcare, and agriculture. With Sydney and Melbourne emerging as key tech hubs, USA offers a dynamic environment for IT professionals.
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
      Why Choose a Career in Information Technology?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Choosing a career in IT in USA provides the opportunity to work in a thriving industry that drives innovation and digital transformation. IT professionals play a crucial role in addressing global challenges, from cybersecurity to AI-driven automation, making it a dynamic and impactful career path.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Information Technology Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for IT professionals in USA is highly favorable, particularly in cybersecurity, AI, and blockchain. As industries continue to adopt digital solutions, the demand for skilled IT professionals is expected to rise significantly.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Information Technology
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The future of IT in USA will be centered around AI, cybersecurity, and blockchain technology. Machine learning engineers will drive AI advancements, cybersecurity specialists will protect USA’s digital infrastructure, and blockchain developers will expand decentralized systems across industries.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top  Information Technology Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Leading employers in USA’s IT sector include Atlassian, Telstra, NAB, and government agencies. Sydney and Melbourne are key hubs for tech innovation, with numerous startups and multinational companies seeking IT professionals.
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
            Average Salary in Engineering & Technology
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
            Engineers in USA enjoy competitive salaries. Software engineers typically earn around US $95,000 annually, while biomedical engineers make approximately US $85,000. Aerospace engineers can expect salaries around AUD $110,000, and robotics engineers often earn over AUD $100,000, depending on experience and specialization.
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

