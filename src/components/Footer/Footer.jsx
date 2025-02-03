export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "About Us", href: "/about" },
    { name: "Study Destinations", href: "/studydestination" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "https://cal.com/edulink-9gf5fp/30min?month=2025-01" },
    { name: "Company", href: "/company" },
  ]

  const services = [
    { name: "Student Visa", href: "/services/student-visa" },
    { name: "Personalised Career Guidance", href: "/services/career-guidance" },
    { name: "Edulinks AI Jackpot", href: "/services/edulinkAi" },
    { name: "Scholarship Assessment", href: "/services/scholarship-assesment" },
    { name: "Loan Guidance", href: "/services/Loan-Guidance" },
    { name: "Post Landing Services", href: "/services/post-landing" },
  ]

  const studyDestinations = [
    { name: "Germany", href: "/study-destination/germany" },
    { name: "Canada", href: "/study-destination/canada" },
    { name: "Australia", href: "/study-destination/australia" },
    { name: "United States", href: "/study-destination/usa" },
    { name: "United Kingdom", href: "/study-destination/uk" },
    { name: "New Zealand", href: "/study-destination/newzealand" },
  ]

  return (
    <footer className="bg-[#37d7d9] text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-roboto font-[400] mb-4 sm:mb-6">Contact Us</h3>
            <p className="text-sm sm:text-base font-roboto font-[500] leading-relaxed">
              Reach out to the team of Edulinks to take advantage of the best migration services.
            </p>
            <p className="text-sm font-roboto font-[500]">admin@edulinks.io</p>
            <p className="text-sm font-roboto font-[500]">+64 27 326 3612</p>
            <div className="flex space-x-4 mt-4">
              {["instagram", "facebook", "linkedin", "youtube"].map((social) => (
                <a key={social} href="#" className="hover:opacity-80 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {social === "instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    )}
                    {social === "facebook" && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    )}
                    {social === "linkedin" && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                    {social === "youtube" && (
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:col-span-2 lg:col-span-3">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-roboto font-[400] mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm font-roboto font-[500] hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-roboto font-[400] mb-4 sm:mb-6">Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a href={service.href} className="text-sm font-roboto font-[500] hover:underline">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Destinations */}
            <div>
              <h3 className="text-xl font-roboto font-[400] mb-4 sm:mb-6">Study Destinations</h3>
              <ul className="space-y-2 sm:space-y-3">
                {studyDestinations.map((destination) => (
                  <li key={destination.name}>
                    <a href={destination.href} className="text-sm font-roboto font-[500] hover:underline">
                      {destination.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-white text-center">
          <p className="text-base sm:text-lg font-roboto font-[500]">© All Rights Reserved By Edulinks 2025</p>
        </div>
      </div>
    </footer>
  )
}

