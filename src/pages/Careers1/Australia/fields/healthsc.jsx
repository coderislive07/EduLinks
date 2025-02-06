import React from "react"
import img1 from "../../../../assets/Group-522.png"
import img2 from "../../../../assets/icon-3.png"
import {ChevronDown} from "lucide-react";



const courses = [
  {
    title: " Medical Research",
    image: 
     
     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001-gVtWYim75BK6hRQiyWAcmghvDsdne1.png"
     ,
    description:
      "Medical Research in Australia is recognized worldwide, with researchers leading in fields such as cancer research, immunology, and tropical medicine. Institutions like the Garvan Institute of Medical Research and the University of Sydney are at the forefront of developing innovative treatments and improving healthcare practices.",
  },
  {
    title: "Public Health Administration",
    image: 
     "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10002-g54wEC4sWaVDaD8vDysdwedJEOEKKA.png",
    description:
      "Public Health Administration in Australia focuses on improving community health through disease prevention, policy development, and health promotion. Public health professionals work with government agencies, including the Department of Health, to address public health challenges such as obesity, mental health, and indigenous health.",
  },
  {
    title: 
"Clinical Technology",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10003-2ekNPtBKOiTvgAcnuZuvwS7RXKOOIo.png",
    description:
      "Clinical Technology is a fast-growing sector in Australia, with advancements in telehealth, AI diagnostics, and medical imaging technologies. Clinical technologists collaborate with healthcare providers to ensure the effective use of these technologies in improving patient care and health outcomes.",
  }
]

const universities = [
  {
    name: "University of Melbourne",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001-ouy3vyls5dRYK1EXbXcFnKkBFiRwjd.png",
  },
  {
    name: "University of Sydney",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10002-QpZ8MzHN7cmx1wLH9PDSVHJnGhkcJP.png",
  },
  {
    name: "Australian National University (ANU)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10003-PRKFFPHSYAYGKB52NheCI0zrMWHiJN.png",
  },
  {
    name: "Monash University",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10004-F7e3RjikABne3vyqHrz34SaVdQQFSB.png",
  },
  {
    name: "University of Queensland",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10005-Cd2XADFtcgVtRT2bB4thy27QKb6Uoj.png",
  },
]

const faqs = [
  {
    question: "What is Health Sciences?",
    answer:
      "It’s a multidisciplinary field focused on improving healthcare through research, clinical technology, and public health administration.",
  },
  {
    question: "What degrees do I need to work in Health Sciences in Australia?",
    answer:
      "A bachelor’s degree in a relevant field is required, with additional qualifications necessary for advanced or specialized roles.",
  },
  {
    question: "What skills are essential for health science professionals in Australia?",
    answer:
      "Analytical skills, technical expertise, and the ability to work collaboratively are critical.",
  },
  {
    question: "Are there internships available for health science students in Australia?",
    answer:
      "Yes, internships and placements are widely available at hospitals, research institutions, and government agencies.",
  },
  {
    question: "What are the emerging technologies in Australia’s health science sector?",
    answer:
      "Emerging technologies include telemedicine, AI in diagnostics, and wearable health devices.",
  },
  {
    question: "Can Australian health science professionals work internationally?",
    answer:
      "Yes, Australian health qualifications are respected globally, allowing professionals to pursue international careers.",
  },
  {
    question: "What is the job outlook for health science professionals in Australia?",
    answer:
      "The job outlook is strong, particularly in medical research, public health, and clinical technology.",
  },
  {
    question: "How does specialization affect my career in Australian health sciences?",
    answer:
      "Specializing in fields like indigenous health or digital health technology can lead to more career opportunities and higher salaries.",
  },
  {
    question: "Are health science jobs flexible in Australia?",
    answer:
      "Yes, many roles offer flexible working arrangements, including remote work and part-time options.",
  },
  {
    question: "What are the challenges faced by health science professionals in Australia today?",
    answer:
      "Challenges include addressing rural healthcare access, improving health equity, and managing growing healthcare demand.",
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >Australia</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Health Sciences</h1>
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
              

            Health Sciences in Australia is a thriving and multidisciplinary field that integrates medical research, public health administration, and clinical technology to advance healthcare solutions. Australian professionals contribute significantly to global health through cutting-edge research, policy development, and the application of new technologies. With a well-established healthcare system and a focus on public health, Australia offers excellent opportunities for career growth in health sciences.
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
      Why Choose a Career in Health Sciences?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Choosing a career in Health Sciences in Australia offers the opportunity to work in a progressive and innovative healthcare system that prioritizes public health and medical research. Health science professionals can contribute to improving the well-being of individuals and communities through research, clinical technology, and policy development.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Health Sciences Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job market for Health Sciences in Australia is strong, with increasing demand in fields like medical research, public health, and clinical technology. As the country invests in healthcare infrastructure and innovation, professionals in these fields are well-positioned for career growth, particularly in major cities like Sydney, Melbourne, and Brisbane.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Health Sciences
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Australia’s future in Health Sciences focuses on health equity, indigenous health, and the integration of new technologies into healthcare delivery. Medical researchers will continue to advance treatments for chronic diseases, while public health professionals will address challenges like mental health and aging populations. Clinical technology will play a larger role in diagnostics and patient care through AI and wearable devices.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Health Sciences Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Leading employers in Australia’s health sciences sector include the Commonwealth Scientific and Industrial Research Organisation (CSIRO), major hospitals like Royal Melbourne Hospital, and pharmaceutical companies like CSL Limited. Universities and research institutions also offer extensive opportunities for medical researchers and public health professionals.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
            Top Picks for Future Engineers:<br />
            Australia's Elite Tech Universities
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
            Average Salary in Health 
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Health science professionals in Australia enjoy competitive salaries. Medical researchers typically earn around AUD $85,000 annually, while public health administrators make approximately AUD $90,000. Clinical technologists can expect salaries near AUD $75,000, depending on experience and specialization.
          </p>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-regular text-center mb-8">
            Top 10 FAQs for Health Sciences in Australia
          </h2>
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

