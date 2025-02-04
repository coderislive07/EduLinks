import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeLink, setActiveLink] = useState(""); 
  const navigate = useNavigate();
  const dropdownLinks = {
    study: [
      { title: "Study in Australia", href: "/study-destination/australia" },
      { title: "Study in CANADA", href: "/study-destination/canada" },
      { title: "Study in Germany", href: "/study-destination/germany" },
      { title: "Study in New Zealand", href: "/study-destination/newzealand" },
      { title: "Study in UK", href: "/study-destination/uk" },
      { title: "Study In USA", href: "/study-destination/usa" },
    ],
    services: [
      { title: "Student Visa", href: "/services/student-visa" },
      { title: "Career Guidance", href: "/services/career-guidance" },
      { title: "Loan Guidance", href: "/services/Loan-Guidance" },
      { title: "Scholarship Assessment", href: "/services/scholarship-assesment" },
      { title: "EduLink Ai", href: "/services/edulinkAi" },
      { title: "Post Landing Services", href: "/services/post-landing" },
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
  const handleLinkClick = (path, linkName) => {
    setActiveLink(linkName); // Set the active link
    navigate(path); // Navigate to the specified path
  };
  
  return (
    <nav className="w-full  bg-white shadow-md  pt-[-4vh] z-50 relative  top-0 xl:h-[65px] 2xl:px-[88px]">
      <div className="lg:max-w-[1600px]  mx-auto px-20 ">
        <div className="flex justify-between items-center  h-16">
        <div className="lg:hidden  ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#37d7d9] ml-[-18vw] md:ml-[-7vw] focus:outline-none "
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
          {/* Logo */}
          <div className="flex-shrink-0 ">
          
            <img  onClick={()=>{navigate('/')}}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-J0XEoKoJtnHEDYec9KjRYAq38rC3gj.png"
              alt="Edulinks Logo"
              className="h-14 xl:h-14 pl-[24vw]  md:pl-[69vw] lg:pl-0 xl:pr-10 cursor-pointer"
            />
          </div>
          {/* Desktop Navigation */}
          <div className="flex 2xl:pr-14 ">
          <div className="hidden lg:flex items-center lg:w-[55vw] xl:w-[45vw] 2xl:w-[37vw]  lg:space-x-3">
            <a onClick={()=>{navigate('/')}} className="text-gray-800 cursor-pointer  font-[700] font-roboto text-sm xl:text-[16px]">
              Home
            </a>
            <a onClick={()=>{navigate('/about')}} className="text-gray-800 cursor-pointer  font-[700] font-roboto text-sm xl:text-[16px]">
              About Us
            </a>
             {/* a */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("study")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button onClick={()=>{navigate('/studydestination')}} className="text-gray-800 font-bold font-roboto text-sm xl:text-base flex items-center">
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
                <div className="absolute left-0   w-56   bg-white rounded-md shadow-lg  z-50">
                  {dropdownLinks.study.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="block px-4 py-2 text-base  font-roboto1 font-[700] text-gray-800 border hover:bg-[#37d7d9]  transition-colors"
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
              <button onClick={()=>{navigate('/services')}} className="text-gray-800   font-bold font-roboto text-sm xl:text-base flex items-center">
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
                <div className="absolute left-0   w-56   bg-white rounded-md shadow-lg  z-50">
                  {dropdownLinks.services.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="block px-4 py-2 text-base  font-roboto1 font-[700] text-gray-800 border hover:bg-[#37d7d9]  transition-colors"
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
              <button className="text-gray-800 font-roboto hover:text-[#37d7d9] font-bold text-sm xl:text-[16px] flex items-center">
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
                <div className="absolute left-0   w-56   bg-white rounded-md shadow-lg  z-50">
                  {dropdownLinks.universities.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="block px-4 py-2 text-base  font-roboto1 font-[700] text-gray-800 border hover:bg-[#37d7d9]  transition-colors"
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
              <button className="text-gray-800 font-roboto hover:text-[#37d7d9] font-bold  text-sm xl:text-[16px] flex items-center">
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
                <div className="absolute left-0   w-56   bg-white rounded-md shadow-lg  z-50">
                  {dropdownLinks.careers.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="block px-4 py-2 text-base  font-roboto1 font-[700] text-gray-800 border hover:bg-[#37d7d9]  transition-colors"
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
            <button className=" py-1.5  xl:w-[10vw]  text-black border font-roboto1 font-bold   border-black rounded-lg hover:bg-[#37d7d9] hover:text-black transition-colors text-base  xl:text-[13px]">
              Edulinks AI Assistant
            </button>
            <button className="px-3 flex py-1.5  xl:w-[13vw]  text-black border font-roboto1 font-bold   border-black rounded-lg hover:bg-[#37d7d9] hover:text-black transition-colors text-base xl:text-[12px] 2xl:text-[13px] ">
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
       
        </div>
        {/* Mobile menu */}
        <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 h-full w-[300px] bg-white shadow-lg z-50`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 p-2 focus:outline-none"
        aria-label="Close menu"
      >
        <svg
          aria-hidden="true"
          tabIndex="0"
          className="w-6 h-6 text-[#7a7a7a]"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"
          ></path>
        </svg>
      </button>
      <div className="flex flex-col pt-14   space-y-7 p-10 w-[300px]">
        {/* Home Link */}
        <a
          onClick={() => handleLinkClick("/", "home")}
          className={`text-[14.592px]  font-roboto font-bold ${
            activeLink === "home" ? "text-[#61ce70]" : "text-[#7a7a7a] "
          }`}
        >
          Home
        </a>

        {/* About Us Link */}
        <a
          onClick={() => handleLinkClick("/about", "about")}
          className={`text-[14.592px] font-roboto font-bold ${
            activeLink === "about" ? "text-[#61ce70]" : "text-[#7a7a7a] "
          }`}
        >
          About Us
        </a>

        {/* Dropdown Example: Study Destinations */}
        <div className="space-y-2">
          <button
            onClick={() => setActiveDropdown(activeDropdown === "study" ? null : "study")}
            className="text-[#7a7a7a] text-[14.452px]  font-bold font-roboto text-lg text-left w-full flex justify-between items-center"
          >
            Study Destinations
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                activeDropdown === "study" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown === "study" && (
            <div className="space-y-2">
              {dropdownLinks.study.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block  py-2 text-xl font-normal text-[13px] font-roboto text-gray-800 hover:bg-[#37d7d9] hover:text-white transition-colors"
                >
                  {link.title}
                  <hr ></hr>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <button
            onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
            className="text-[#7a7a7a] text-[14.452px] font-bold font-roboto text-lg text-left w-full flex justify-between items-center"
          >
           Services
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                activeDropdown === "services" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown === "services" && (
            <div className=" space-y-2">
              {dropdownLinks.services.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block  py-2 text-xl font-normal text-[13px] font-roboto text-gray-800 hover:bg-[#37d7d9] hover:text-white transition-colors"
                >
                  {link.title}
                  <hr ></hr>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <button
            onClick={() => setActiveDropdown(activeDropdown === "universities" ? null : "universities")}
            className="text-[#7a7a7a] text-[14.452px] font-bold font-roboto text-lg text-left w-full flex justify-between items-center"
          >
            Top Universities
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                activeDropdown === "universities" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown === "universities" && (
            <div className=" space-y-2">
              {dropdownLinks.universities.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block  py-2 text-xl font-normal text-[13px] font-roboto text-gray-800 hover:bg-[#37d7d9] hover:text-white transition-colors"
                >
                  {link.title}
                  <hr ></hr>
                </a>
              ))}
       
            </div>
          )}
        </div>
        <div className="space-y-2">
          <button
            onClick={() => setActiveDropdown(activeDropdown === "careers" ? null : "careers")}
            className="text-[#7a7a7a] text-[14.452px]  font-bold font-roboto text-lg text-left w-full flex justify-between items-center"
          >
            Careers
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                activeDropdown === "careers" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {activeDropdown === "careers" && (
            <div className=" space-y-1">
              {dropdownLinks.careers.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block  py-2 text-xl font-normal text-[13px] font-roboto text-gray-800 hover:bg-[#37d7d9] hover:text-white transition-colors"
                >
                  {link.title}
                  <hr ></hr>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <button
      
            className="text-[#7a7a7a] text-[14.452px]  font-bold font-roboto text-lg text-left w-full flex justify-between items-center"
          >
            Edulinks Ai assistant
        
          </button>
      
        </div>
      </div>
    </div>
      </div>
    </nav>
  )
}

