import React from "react"
import img1 from "../../../../assets/Group-4-1.png"
import img2 from "../../../../assets/icon-3.png"



const courses = [
    {
      title: "Scientific Illustrator",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ztv53EQ7ZmG6ttKtNOxANCcIflZdKQ.png",
      description:
        "Scientific Illustrators in Germany work for universities, museums, and research institutions to create detailed visual representations of scientific discoveries. They help communicate complex information related to biology, medicine, and environmental science through engaging illustrations that are used in academic publications and public exhibitions.",
    },
    {
      title: "Technical Writer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EfeCFNdo881JoeqPxjUbChTXFl5cwS.png",
      description:
        "Technical Writers in Germany specialize in creating clear and user-friendly documentation for industries such as software, engineering, and healthcare. They play a critical role in producing product manuals, instructional guides, and online help systems, ensuring that technical content is easily understood by a broad audience.",
    },
    {
      title: "UX/UI Designer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Puiz47jjUIQnWHXnRnjhqNL0kz9wT4.png",
      description:
        "UX/UI Designers in Germany are key players in the tech industry, where they design user-friendly and visually appealing digital experiences for websites, mobile applications, and software. They combine creativity with a deep understanding of user behavior, helping companies create seamless and enjoyable digital interactions.",
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
    question: "What is Graphic Design and Media?",
    answer:
      "Graphic Design and Media involve visual communication to solve problems and enhance user experiences across digital and print platforms.",
  },
  {
    question: "What degrees do I need to work in Graphic Design and Media in Germany?",
    answer:
      "A bachelor’s degree in a relevant field is required, with additional qualifications necessary for advanced or specialized roles.",
  },
  {
    question: "What skills are essential for Graphic Design and Media professionals in Germany?",
    answer:
      "A bachelor’s degree in graphic design, media, or related field is required, with training in UX/UI design, technical writing, or illustration beneficial.",
  },
  {
    question: "Are there internships available for graphic design and media students in Germany?",
    answer:
      "Key skills include proficiency in design software, UX design, strong writing, and the ability to visually communicate complex ideas.",
  },
  {
    question: "What are the emerging trends in Graphic Design and Media in Germany?",
    answer:
      "Emerging trends include digital accessibility, sustainable design practices, and the use of AI to enhance design processes.",
  },
  {
    question: "Can Germanyn Graphic Design and Media professionals work internationally?",
    answer:
      "Yes, Germanyn qualifications in graphic design and media are respected globally, providing professionals with opportunities to work abroad.",
  },
  {
    question: "What is the job outlook for Graphic Design and Media professionals in Germany?",
    answer:
      "The job outlook is highly favorable, particularly in UX/UI design and technical writing roles.",
  },
  {
    question: "How does specialization affect my career in Graphic Design and Media in Germany?",
    answer:
      "Specializing in in-demand areas like UX/UI design or technical writing can lead to higher salaries and more career opportunities.",
  },
  {
    question: "Are Graphic Design and Media jobs flexible in Germany?",
    answer:
      "Yes, many graphic design and media roles offer flexibility, including freelance opportunities and remote work options.",
  },
  {
    question: "What are the challenges faced by Graphic Design and Media professionals in Germany today?",
    answer:
      "Challenges include keeping up with rapid tech advancements and balancing creative integrity with client demands in a fast-paced industry.",
  },

  
]

export default function Artificial() {
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
          <h1 className="text-xl mb-6 font-regular text-[#95FEFF] sm:text-3xl md:text-4xl underline font-roboto1" >Germany</h1>
          <h1 className="text-4xl mt-4 font-regular text-white sm:text-5xl md:text-6xl">Graphic Design and Media</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-[30px] md:mt-5 md:max-w-3xl">
          Gateway to Creative Careers in Germany

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
              

            
Germany’s graphic design and media industry is vibrant, with opportunities spanning various sectors, including education, technology, and healthcare. Whether you aspire to be a Scientific Illustrator, Technical Writer, or UX/UI Designer, Germany’s commitment to innovation and digital transformation makes it a prime destination for creative professionals.
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
      Why Choose a Career in Graphic Design and Media?
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      A career in Graphic Design and Media in Germany offers opportunities to work on innovative projects that intersect creativity and technology. From illustrating scientific concepts to designing cutting-edge digital interfaces, creative professionals are essential to enhancing user experiences and communicating complex ideas.
      </p>
    </div>

    {/* Section 2 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Graphic Design and Media Job Outlook
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      The job outlook for Graphic Design and Media professionals in Germany is positive, especially in cities like Sydney, Melbourne, and Brisbane. As more businesses embrace digital transformation, the demand for UX/UI Designers and Technical Writers is expected to rise significantly.
      </p>
    </div>

    {/* Section 3 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Future Aspects of Graphic Design and Media
      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Germany’s future in Graphic Design and Media will focus on digital innovation, sustainability, and accessibility. UX/UI Designers will lead the way in making digital products more user-friendly and inclusive, while Scientific Illustrators will play a key role in communicating environmental and medical research to the public. Technical Writers will ensure that emerging technologies are well-documented and accessible to users.
      </p>
    </div>

    {/* Section 4 */}
    <div className="text-center">
      <h1 className="text-[32px] font-regular text-[#232323] mb-6">
      Top Employers in Graphic Design and Media

      </h1>
      <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
      Germany is home to leading employers in Graphic Design and Media, including tech companies like Canva and Atlassian, as well as design agencies and research institutions. Universities and government organizations are also major employers for Scientific Illustrators and Technical Writers.
      </p>
    </div>
  </div>
</div>


      {/* Universities Section */}
      <div className="py-16 bg-[#37D7D91A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="bg-gradient-to-b from-[#53C2C3] to-[#248182] bg-clip-text text-transparent text-[32px] font-normal mb-12">
          Top Picks for Future Graphic Designers and Media Professionals:<br />
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
          Average Salary in Graphic Design and Media
          </h1>
          <p className="text-[24px] font-roboto1 text-[#232323] leading-[37.2px]">
          Salaries for Graphic Design and Media professionals in Germany are competitive. Scientific Illustrators typically earn around AUD $80,000 annually, while Technical Writers make approximately AUD $85,000. UX/UI Designers can expect to earn around AUD $95,000, depending on their level of expertise and experience.
          </p>
        </div>
      </div>

      {/* FAQs Section */}
  <div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-regular text-center mb-8">Top 10 FAQs for Graphic Design and Media</h2>
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

