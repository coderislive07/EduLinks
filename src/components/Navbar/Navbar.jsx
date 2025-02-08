import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeLink, setActiveLink] = useState("")
  const navigate = useNavigate()

  const dropdownLinks = {
    "study destinations": [
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
    "top universities": [
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
      { title: "Top Careers in Germany", href: "/germany-career" },
      { title: "Top Careers in New Zealand ", href: "/newzealand-career" },
      { title: "Top Careers in UK", href: "/uk-career" },
      { title: "Top Careers in USA", href: "/usa-career" },
    ],
  }

  const handleLinkClick = (path, linkName) => {
    setActiveLink(linkName)
    navigate(path)
    setIsOpen(false)
  }

  return (
      <nav className="w-full bg-white shadow-md z-50  relative top-0 h-[55px]">
        <div className="lg:max-w-[1600px] mx-auto sm:px-4 lg:px-2">
          <div className="flex justify-between  lg:pl-12  xl:pl-28 xl:pr-24 items-center h-16">
            <div className="flex items-center">
              <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-800 hover:text-[#37d7d9] -ml-[20px] focus:outline-none"
                >
                  <svg className="h-8 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 ">
                <img
                    onClick={() => navigate("/")}
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-J0XEoKoJtnHEDYec9KjRYAq38rC3gj.png"
                    alt="Edulinks Logo"
                    className="h-10 w-auto cursor-pointer"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center relative  lg:w-[50vw] xl:w-[65vw] 2xl:w-[45vw] lg:space-x-4">
              <div
                  onClick={() => handleLinkClick("/", "home")}
                  className="text-gray-800 cursor-pointer font-[700] font-roboto text-base [@media(min-width:1024px)_and_(max-width:1125px)]:text-[14px]   xl:text-[16px] hover:text-[#37d7d9] transition-colors"
              >
                Home
              </div>
              <div
                  onClick={() => handleLinkClick("/about", "about")}
                  className="text-gray-800 cursor-pointer font-[700] font-roboto text-base [@media(min-width:1024px)_and_(max-width:1125px)]:text-[14px]   xl:text-[16px] hover:text-[#37d7d9] transition-colors"
              >
                About Us
              </div>
              {["study destinations", "services", "top universities", "careers"].map((item) => (
                  <div
                      key={item}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(item)}
                      onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div
                        onClick={() => handleLinkClick(`/${item.replace(" ", "-")}`, item)}
                        className="text-gray-800 cursor-pointer font-bold font-roboto text-base [@media(min-width:1024px)_and_(max-width:1125px)]:text-[14px]   xl:text-[16px] flex items-center hover:text-[#37d7d9] transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      <svg
                          className={`w-3 h-3 xl:w-4 xl:h-4 ml-1 transform transition-transform duration-200 ${activeDropdown === item ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {activeDropdown === item && (
                        <div className="absolute w-56 bg-white rounded-md shadow-lg z-50">
                          {dropdownLinks[item].map((link) => (
                              <div
                                  key={link.title}
                                  onClick={() => handleLinkClick(link.href, link.title)}
                                  className="block px-4 py-2 text-base cursor-pointer font-roboto1 font-[700] text-gray-800 border hover:bg-[#37d7d9] hover:text-white transition-colors"
                              >
                                {link.title}
                              </div>
                          ))}
                        </div>
                    )}
                  </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <button className="px-3 h-[32px] xl:w-[141px] text-[0.75rem]  font-roboto1 font-bold border rounded-lg border-black hover:bg-[#37d7d9] hover:text-black transition-colors">
                Edulinks AI Assistant
              </button>
              <button className="px-3 h-[32px] xl:w-[160px] flex items-center justify-center text-[0.75rem] font-roboto1 font-bold border rounded-lg border-black hover:bg-[#37d7d9] hover:text-black transition-colors">
                <svg className="w-3 h-3 mr-1" viewBox="0 0 576 512">
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

        {/* Mobile Menu */}
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
            <svg aria-hidden="true" tabIndex={0} className="w-6 h-6 text-[#7a7a7a]" viewBox="0 0 512 512">
              <path
                  fill="currentColor"
                  d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"
              ></path>
            </svg>
          </button>
          <div className="flex flex-col pt-14 space-y-7 p-10 w-[300px]">
            <div
                onClick={() => handleLinkClick("/", "home")}
                className={`text-[16px] cursor-pointer font-roboto font-bold ${
                    activeLink === "home" ? "text-[#61ce70]" : "text-[#7a7a7a]"
                }`}
            >
              Home
            </div>
            <div
                onClick={() => handleLinkClick("/about", "about")}
                className={`text-[16px] cursor-pointer font-roboto font-bold ${
                    activeLink === "about" ? "text-[#61ce70]" : "text-[#7a7a7a]"
                }`}
            >
              About Us
            </div>
            {["study destinations", "services", "top universities", "careers"].map((item) => (
                <div key={item} className="space-y-2">
                  <button
                      onClick={() => setActiveDropdown(activeDropdown === item ? null : item)}
                      className="text-[#7a7a7a] text-[16px] font-bold font-roboto text-lg text-left w-full flex justify-between items-center"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${
                            activeDropdown === item ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === item && (
                      <div className="space-y-2">
                        {dropdownLinks[item].map((link) => (
                            <div
                                key={link.title}
                                onClick={() => handleLinkClick(link.href, link.title)}
                                className="block py-2 text-xl cursor-pointer font-normal text-[14px] font-roboto text-gray-800 hover:bg-[#37d7d9] hover:text-white transition-colors"
                            >
                              {link.title}
                              <hr />
                            </div>
                        ))}
                      </div>
                  )}
                </div>
            ))}
            <button className="text-[#7a7a7a] text-[16px] font-bold font-roboto text-lg text-left w-full flex justify-between items-center">
              Edulinks Ai assistant
            </button>
          </div>
        </div>
      </nav>
  )
}

