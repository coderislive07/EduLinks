import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navigate = useNavigate();
  const dropdownLinks = {
    study: [
      { title: "Study in Australia", href: "#" },
      { title: "Study in CANADA", href: "#" },
      { title: "Study in Germany", href: "#" },
      { title: "Study in New Zealand", href: "#" },
      { title: "Study in UK", href: "#" },
      { title: "Study In USA", href: "#" },
    ],
    services: [
      { title: "Student Visa", href: "#" },
      { title: "Career Guidance", href: "#" },
      { title: "University Admission", href: "#" },
      { title: "Scholarship Assessment", href: "#" },
      { title: "Test Preparation", href: "#" },
      { title: "Post Landing Services", href: "#" },
    ],
    universities: [
      { title: "Top Universities in Australia", href: "/australia-topuniversity" },
      { title: "Top Universities in Canada", href: "/canada-topuniversity" },
      { title: "Top Universities in Germany", href: "/germany-topuniversity" },
      { title: "Top Universities in New Zealand", href: "/nz-topuniversity" },
      { title: "Top Universities in Uk", href: "/uk-topuniversity" },
      { title: "Top Universities in Usa", href: "/usa-topuniversity" },
    ],
    careers: [
      { title: "Top Careers in Australia", href: "/australia-career" },
      { title: "Top Careers in Canada", href: "/canada-career" },
      { title: "Top Careers in Germany", href: "germany-career" },
      { title: "Top Careers in New Zealand ", href: "newzealand-career" },
      { title: "Top Careers in UK", href: "uk-career" },
      { title: "Top Careers in USA", href: "usa-career" },
    ],
  }
  return (
    <nav className="w-full bg-white shadow-md  fixed pt-[-4vh]  top-0 z-50 xl:h-[65px] xl:px-[4vw]">
      <div className="lg:max-w-[1500px]  mx-auto px-20 ">
        <div className="flex justify-between items-center  h-16">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <img  onClick={()=>{navigate('/')}}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-J0XEoKoJtnHEDYec9KjRYAq38rC3gj.png"
              alt="Edulinks Logo"
              className="h-10 xl:h-14 xl:pr-10 cursor-pointer"
            />
          </div>
          {/* Desktop Navigation */}
          <div className="flex ">
          <div className="hidden lg:flex items-center lg:w-[52vw] xl:w-[45vw] 2xl:w-[37vw] lg:space-x-3">
            <a onClick={()=>{navigate('/')}} className="text-gray-800 cursor-pointer hover:text-[#26B9C1] font-extrabold font-roboto text-sm xl:text-[16px]">
              Home
            </a>
            <a onClick={()=>{navigate('/about')}} className="text-gray-800 font-roboto cursor-pointer hover:text-[#26B9C1] font-bold text-sm xl:text-[16px]">
              About Us
            </a>
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("study")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button onClick={()=>{navigate('/studydestination')}} className="text-gray-800 hover:text-[#26B9C1] font-bold font-roboto text-sm xl:text-base flex items-center">
                Study Destinations
                <svg
                  className={`w-3 h-3 xl:w-4 xl:h-4 ml-1 transform transition-transform duration-200 ${activeDropdown === "study" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "study" && (
                <div className="absolute left-1 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                  {dropdownLinks.study.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                        className="block px-4 py-2 text-base font-bold font-roboto text-gray-800 hover:bg-[#26B9C1] hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button onClick={()=>{navigate('/services')}} className="text-gray-800 hover:text-[#26B9C1] font-bold font-roboto text-sm xl:text-base flex items-center">
                Services
                <svg
                  className={`w-3 h-3 xl:w-4 xl:h-4 ml-1 transform transition-transform  duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "services" && (
                <div className="absolute left-0  w-56 bg-white rounded-md shadow-lg py-1 z-50">
                  {dropdownLinks.services.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="block px-4 py-2 text-base font-bold font-roboto text-gray-800 hover:bg-[#26B9C1] hover:text-white transition-colors"
                    > 
                      {link.title}
                    </a> 
                  ))}
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("universities")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-800 font-roboto hover:text-[#26B9C1] font-bold text-sm xl:text-[16px] flex items-center">
                Top Universities
                <svg
                  className={`w-3 h-3 xl:w-4 xl:h-4 ml-1 transform transition-transform duration-200 ${activeDropdown === "universities" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "universities" && (
                <div className="absolute left-0  w-56 bg-white rounded-md shadow-lg py-2 z-50">
                  {dropdownLinks.universities.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                       className="block px-4 py-2 text-base font-bold font-roboto text-gray-800 hover:bg-[#26B9C1] hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("careers")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-800 font-roboto hover:text-[#26B9C1] font-bold  text-sm xl:text-[16px] flex items-center">
                Careers
                <svg
                  className={`w-3 h-3 xl:w-4 xl:h-4 ml-1 transform transition-transform duration-200 ${activeDropdown === "careers" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "careers" && (
                <div className="absolute left-0  w-56 bg-white rounded-md shadow-lg py-2 z-50">
                  {dropdownLinks.careers.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                       className="block px-4 py-2 text-base font-bold font-roboto text-gray-800 hover:bg-[#26B9C1] hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <button className=" py-1.5  xl:w-[10vw]  text-black border font-roboto1 font-bold   border-black rounded-lg hover:bg-[#26B9C1] hover:text-black transition-colors text-base xl:text-[14px]">
              Edulinks AI Assistant
            </button>
            <button className="px-3 flex py-1.5  xl:w-[13vw]  text-black border font-roboto1 font-bold   border-black rounded-lg hover:bg-[#26B9C1] hover:text-black transition-colors text-base xl:text-[12px] 2xl:text-[14px] ">
              <svg className="w-3 h-3 mt-1 xl:w-4 xl:h-4 mr-1 xl:mr-2" viewBox="0 0 576 512">
                <path
                  fill="currentColor"
                  d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
                />
              </svg>
              Book Online Counselling
            </button>
          </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#26B9C1] focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[800px]" : "max-h-0"}`}
        >
          <div className="flex flex-col space-y-7 pb-6">
            <a onClick={() => navigate('/')} className="text-gray-800 hover:text-[#26B9C1] font-roboto font-[1200] text-lg">
              Home
            </a>
            <a onClick={() => navigate('/about')} className="text-gray-800 hover:text-[#26B9C1] font-roboto font-extrabold text-lg">
              About Us
            </a>
            <div className="space-y-2">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "study" ? null : "study")}
                className="text-gray-800 hover:text-[#26B9C1] font-extrabold text-lg text-left w-full flex justify-between items-center"
              >
                Study Destinations
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${activeDropdown === "study" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "study" && (
                <div className="pl-4 space-y-2">
                  {dropdownLinks.study.map((link) => (
                    <a key={link.title} href={link.href}   className="block px-4 py-2 text-3xl font-bold font-roboto text-gray-800 hover:bg-[#26B9C1] hover:text-white transition-colors">
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                className="text-gray-800 hover:text-[#26B9C1] font-extrabold  text-lg text-left w-full flex justify-between items-center"
              >
                Services
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "services" && (
                <div className="pl-4 space-y-1">
                  {dropdownLinks.services.map((link) => (
                    <a key={link.title} href={link.href} className="block text-gray-600 hover:text-[#26B9C1] text-lg">
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "universities" ? null : "universities")}
                className="text-gray-800 font-roboto hover:text-[#26B9C1] font-extrabold text-lg text-left w-full flex justify-between items-center"
              >
                Top Universities
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${activeDropdown === "universities" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "universities" && (
                <div className="pl-4 space-y-2">
                  {dropdownLinks.universities.map((link) => (
                    <a key={link.title} href={link.href} className="block text-gray-600 hover:text-[#26B9C1] text-lg">
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "careers" ? null : "careers")}
                className="text-gray-800 hover:text-[#26B9C1] font-extrabold text-lg text-left w-full flex justify-between items-center"
              >
                Careers
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${activeDropdown === "careers" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "careers" && (
                <div className="pl-4 space-y-2">
                  {dropdownLinks.careers.map((link) => (
                    <a key={link.title} href={link.href} className="block text-gray-600 hover:text-[#26B9C1] text-lg">
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <button className="px-4 py-2 text-[#26B9C1] border font-roboto border-[#26B9C1] rounded hover:bg-[#26B9C1] hover:text-white transition-colors w-full">
              Edulinks AI Assistant
            </button>
            <button className="px-4 py-2 bg-transparent border border-black text-black rounded hover:bg-[#1fa1a8] hover:text-white hover:border-[#1fa1a8] transition-colors w-full flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 576 512">
                <path
                  fill="currentColor"
                  d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
                />
              </svg>
              Book Online Counselling
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

