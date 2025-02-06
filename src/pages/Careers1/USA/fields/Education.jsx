import React from "react"
import img1 from "../../../../assets/Group-22.png"
import img2 from "../../../../assets/icon-3.png"
import { ChevronDown } from "lucide-react";


const courses = [
    {
      title: "Science Curriculum Designer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0wdSiScKlAsFzEDPnsLso6h7MxoG53.png",
      description:
        "Science Curriculum Designers in USA are responsible for creating and updating science curricula that align with the national curriculum standards. They work to ensure that scientific concepts are presented in engaging and accessible ways, incorporating the latest technologies and methodologies to enhance student learning.",
    },
    {
      title: "Educational Consultant",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4xqehqcOGv54hzaaclKlIC500itcXs.png",
      description:
        "Educational Consultants in USA advise schools, educational organizations, and policymakers on curriculum development, teacher training, and the integration of new technologies. They also offer guidance on improving student outcomes and enhancing the overall learning experience.",
    },
    {
      title: "STEM Program Coordinator",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EUM7fZONQDYcPlo1Q1VzXufo734iUQ.png",
      description:
        "STEM Program Coordinators in USA manage programs that promote STEM education, collaborating with educators, industry partners, and government agencies to encourage student interest in science, technology, engineering, and mathematics. These professionals play a key role in preparing students for future careers in high-demand fields.",
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
    question: "What is Education?",
    answer:
      "It’s the field dedicated to teaching, learning, and the development of academic programs and initiatives that improve student outcomes.",
  },
  {
    question: "What degrees do I need to work in Education in USA?",
    answer:
      "A degree in education or a related field is required, with postgraduate qualifications helpful for roles like consulting and curriculum design.",
  },
  {
    question: "What skills are essential for education professionals in USA?",
    answer:
      "Creativity, leadership, and familiarity with educational technology are essential.",
  },
  {
    question: "Are there internships available for education students in USA?",
    answer:
      "Yes, many schools and universities offer internships for students to gain hands-on experience in education-related roles.",
  },
  {
    question: "What are the emerging trends in USA’s education sector?",
    answer:
      "Digital transformation, STEM education, and personalized learning are key trends.",
  },
  {
    question: "Can USAn education professionals work internationally?",
    answer:
      "Yes, USAn teaching and education credentials are widely respected globally, providing opportunities for international roles.",
  },
  {
    question: "What is the job outlook for education professionals in USA?",
    answer:
      "The outlook is positive, especially for roles related to STEM education, digital learning, and consulting.",
  },
  {
    question: "How does specialization affect my career in USAn education?",
    answer:
      "Specializing in areas like STEM or digital education can lead to more job opportunities and higher salaries.",
  },
  {
    question: "Are education jobs flexible in USA?",
    answer:
      "Many roles offer flexibility, including part-time work, remote roles, and consulting opportunities.",
  },
  {
    question: "What are the challenges faced by education professionals in USA today?",
    answer:
      "Challenges include adapting to technological advancements, addressing diverse student needs, and ensuring equitable access to education.",
  },

  
]

export default function Education() {
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
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Education</h1>
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
              
            
            
                USA’s education system is well-regarded for its focus on innovation, inclusivity, and preparing 
                students for the future workforce. Professionals in education play critical roles in curriculum development,
                 consulting, and STEM program coordination, helping shape the educational experiences of students across
                  the country. With a focus on digital transformation and STEM learning, USA offers numerous opportunities
                   for education professionals to make a meaningful impact.
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
      Why Choose a Career in Education?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      A career in education in USA offers the chance to shape the future of students and contribute to the country’s commitment to innovation and academic excellence. Whether you’re designing science curricula or coordinating STEM programs, the impact you have on students will help prepare them for success in an ever-changing global economy.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Education Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for education professionals in USA is strong, particularly in areas like STEM education, digital learning, and curriculum development. As schools continue to prioritize technology integration and STEM subjects, demand for skilled professionals in these fields is expected to grow.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Education
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The future of education in USA is focused on expanding digital learning opportunities, promoting STEM education, and improving equity in education. Science curriculum designers will play a vital role in adapting content for the digital age, while STEM coordinators will help prepare students for careers
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Education Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Leading employers in USA’s education sector include public and private schools, universities, and government agencies like the Department of Education. Nonprofit organizations and companies focused on educational technology also offer significant opportunities for professionals in education
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
                      <button className="px-6 py-2 text-[16px] font-bold font-roboto bg-white text-[#53C2C3] hover:bg-[#53C2C3] hover:text-white transition-colors border border-[#53C2C3]">
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
          Average Salary in Education
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Education professionals in USA earn competitive salaries. Science curriculum designers typically earn around AUD $75,000 annually, while educational consultants make approximately AUD $85,000. STEM program coordinators can expect to earn about AUD $70,000, depending on their experience and the size of the program they manage.
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

