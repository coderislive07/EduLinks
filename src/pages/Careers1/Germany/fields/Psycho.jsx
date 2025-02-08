import React from "react"
import img1 from "../../../../assets/Group-13.png"
import img2 from "../../../../assets/icon-3.png"
import { ChevronDown } from "lucide-react";



const courses = [
    {
      title: "Industrial-Organizational Psychologist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lO4pQMmbw0Pf035QonbtGmPBBKbnR9.png",
      description:
        "Industrial-Organizational Psychologists in Germany work with organizations to improve workplace dynamics, employee satisfaction, and overall productivity. They design training programs, conduct employee assessments, and advise on leadership development, contributing to healthier work environments across various industries.",
    },
    {
      title: "Neuropsychologist",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PMbzGYUhUfnlM0K4Z3UtMMYIaLbWyU.png",
      description:
        "Neuropsychologists in Germany focus on assessing and treating individuals with neurological disorders, such as brain injuries, dementia, or stroke. They work in hospitals, rehabilitation centers, and research institutions, using advanced neuroimaging and cognitive assessment tools to support patient recovery and enhance quality of life.",
    },
    {
      title: "Research Scientist in Cognitive Science",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jIn3cYO5EmIZ0Ti0KiF1h39Uy83hbl.png",
      description:
        "Research Scientists in Cognitive Science in Germany explore how the brain processes information, including perception, memory, and decision-making. Employed by universities, research centers, and tech companies, they investigate topics such as artificial intelligence, brain-computer interfaces, and human-computer interaction, contributing to cutting-edge advancements in technology and cognition.",
    },
  ]
  

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
    question: "What is Psychology & Neuroscience?",
    answer:
      "It’s the study of brain function, behavior, and mental health, focusing on cognitive processes, workplace efficiency, and neurological conditions.",
  },
  {
    question: "What degrees do I need to work in Psychology & Neuroscience in Germany?",
    answer:
      "A bachelor’s degree in psychology or neuroscience is required, with postgraduate qualifications needed for specialized roles like neuropsychology or cognitive science research.",
  },
  {
    question: "What skills are essential for psychology and neuroscience professionals in Germany?",
    answer:
      "Key skills include problem-solving, research abilities, critical thinking, and expertise in mental health or cognitive processes.",
  },
  {
    question: "Are there internships available for psychology and neuroscience students in Germany?",
    answer:
      "Yes, internships and practicums are available through universities, hospitals, and research institutes, providing hands-on experience in clinical or research settings.",
  },
  {
    question: "What are the emerging trends in Germany’s psychology and neuroscience sector?",
    answer:
      "AI in cognitive science, mental health app development, and advancements in neurorehabilitation are key trends.",
  },
  {
    question: "Can Germanyn psychology and neuroscience professionals work internationally?",
    answer:
      "Yes, Germanyn qualifications in psychology and neuroscience are globally respected, allowing professionals to work in various countries.",
  },
  {
    question: "What is the job outlook for psychology and neuroscience professionals in Germany?",
    answer:
      "The outlook is positive, especially in clinical neuropsychology, organizational psychology, and cognitive science research.",
  },
  {
    question: "How does specialization affect my career in Germanyn psychology and neuroscience?",
    answer:
      "Specializing in high-demand areas like neuropsychology or AI research can open up more career opportunities and lead to higher salaries.",
  },
  {
    question: "Are psychology and neuroscience jobs flexible in Germany?",
    answer:
      "Yes, many roles offer flexibility, including opportunities for private practice, remote research, and consulting.",
  },
  {
    question: "What are the challenges faced by psychology and neuroscience professionals in Germany today?",
    answer:
      "Challenges include addressing mental health disparities, integrating new technologies into cognitive research, and navigating ethical issues in neuropsychology.",
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >Germany</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Psychology and Neuroscience</h1>
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
              
            
            
            
Germany is known for its excellence in mental health services, workplace psychology, and cognitive science research, making it an ideal destination for professionals in psychology and neuroscience. With a focus on improving mental health outcomes, enhancing workplace productivity, and advancing cognitive research, Germany offers numerous career opportunities in fields like Industrial-Organizational Psychology, Neuropsychology, and Cognitive Science.   
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
      Why Choose a Career in Psychology & Neuroscience?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      A career in psychology and neuroscience in Germany offers the opportunity to make a positive impact on mental health, organizational behavior, and cognitive research. Professionals in these fields contribute to improving patient care, workplace environments, and understanding of the brain, providing a meaningful and rewarding career path.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Psychology & Neuroscience Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for psychology and neuroscience professionals in Germany is strong, particularly in clinical neuropsychology, organizational psychology, and cognitive science research. As mental health awareness continues to grow, and technological advancements shape cognitive research, demand for qualified professionals is expected to rise.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Psychology & Neuroscience
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The future of psychology and neuroscience in Germany will focus on mental health innovation, technological integration in cognitive research, and enhancing workplace well-being. Industrial-organizational psychologists will play a key role in adapting to changing work environments, while neuropsychologists will contribute to advancements in neurorehabilitation
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Psychology & Neuroscience Employers
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      
Top employers in Germany include health care organizations like the Royal Melbourne Hospital, research institutions such as the Germanyn National University (ANU), and technology companies developing cognitive computing solutions. The Germanyn government also supports mental health services and cognitive research, providing numerous opportunities for professionals in the field.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
          Top Picks for Future Psychology & Neuroscience Professionals:<br />
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
          Average Salary in Psychology & Neuroscience
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Salaries for psychology and neuroscience professionals in Germany vary by role. Industrial-organizational psychologists typically earn around AUD $95,000 annually, while neuropsychologists make approximately AUD $100,000. Research scientists in cognitive science can expect to earn about AUD $90,000, depending on their experience and research area.
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

