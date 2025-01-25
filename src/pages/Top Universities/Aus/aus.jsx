import React from "react"

const universities = [
  { name: "Australian National University", image: "australian national university.png" },
  { name: "University of Melbourne", image: "university of melbourne.png" },
  { name: "University of Sydney", image: "university of sydney.png" },
  { name: "University of Queensland", image: "uni of queen.png" },
  { name: "University of New South Wales", image: "university of new south wales.png" },
  { name: "Monash University", image: "monash university.png" },
  { name: "University of Western Australia", image: "university of western aus.png" },
  { name: "University of Adelaide", image: "university of adelaide.png" },
  { name: "University of Technology Sydney", image: "university of tech sydney.png" },
  { name: "University of Canberra", image: "university of canberra.png" },
  { name: "Macquarie University", image: "macquarie university.png" },
  { name: "Queensland University of Technology", image: "queensland university of tech.png" },
  { name: "RMIT University​", image: "RMIT university.png" },
  { name: "University of Wollongong​", image: "university of wollongong.png" },
  { name: "Curtin University​", image: "curtin univ.png" },
  { name: "Deakin University​", image: "deakin univ.png" },
  { name: "University of Newcastle​", image: "uni of newcastle.png" },
  { name: "Griffith University​", image: "griffith uni.png" },
  { name: "La Trobe University​​", image: "la trobe university.png" },
  { name: "University of Tasmania​", image: "uni of tasmania.png" },
]

export default function Aus() {
  return (
    <div className="font-sans">
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="logo">
          <img src="logo.png" alt="Edulinks Logo" />
        </div>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-700">
            About Us
          </a>
          <a href="#" className="text-gray-700">
            Study Destinations
          </a>
          <a href="#" className="text-gray-700">
            Services
          </a>
          <a href="#" className="text-gray-700">
            Top Universities
          </a>
          <a href="#" className="text-gray-700">
            Careers
          </a>
          <button className="px-4 py-2 rounded bg-transparent text-gray-700 border border-gray-300">
            Edulinks AI Assistant
          </button>
          <button className="px-4 py-2 rounded bg-[#00b4d8] text-white">Book Online Counseling</button>
        </div>
      </nav>

      <header className="bg-[#40E0D0] py-40 px-64 text-center text-white relative overflow-hidden text-4xl font-serif rounded-bl-[55%] rounded-br-[55%]">
        <h1>Top Australian Universities</h1>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="text-center max-w-7xl mx-auto mb-8 text-gray-700 text-2xl font-['Open Sans', 'Roboto', 'Lato']">
          <p>
            Australia is home to some of the world's leading universities, offering a diverse range of programs and
            cutting-edge research opportunities. At Edulinks, we guide you through Australia's top 20 universities,
            ensuring you find the perfect match for your academic aspirations. Whether you're looking for world-class
            research facilities, innovative programs, international career opportunities, or a vibrant student life,
            Edulinks is here to support you every step of the way towards achieving your study abroad dreams in
            Australia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="bg-white rounded-none overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-1 font-serif"
            >
              <img src={uni.image || "/placeholder.svg"} alt={uni.name} className="w-full h-[400px] object-cover" />
              <div className="p-6 text-center">
                <h3 className="mb-4 text-gray-800">{uni.name}</h3>
                <a
                  href="#"
                  className="inline-block px-6 py-2 border border-[#00b4d8] text-[#00b4d8] rounded hover:bg-[#00b4d8] hover:text-white transition-colors duration-300"
                >
                  Know More &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-[#40E0D0] text-white pt-12 pb-4 px-8 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Reach out to the team of Edulinks to take advantage of our excellent services</p>
            <p>info@edulinks.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <a href="#" className="block mb-2">
              Home
            </a>
            <a href="#" className="block mb-2">
              About Us
            </a>
            <a href="#" className="block mb-2">
              Study Destinations
            </a>
            <a href="#" className="block mb-2">
              Services
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <a href="#" className="block mb-2">
              Student Visa
            </a>
            <a href="#" className="block mb-2">
              Professional Career Guidance
            </a>
            <a href="#" className="block mb-2">
              Guidance for Scholarship
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Study Destinations</h3>
            <a href="#" className="block mb-2">
              Germany
            </a>
            <a href="#" className="block mb-2">
              Canada
            </a>
            <a href="#" className="block mb-2">
              Australia
            </a>
            <a href="#" className="block mb-2">
              United Kingdom
            </a>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-white border-opacity-10">
          <p>© All Rights Reserved By Edulinks 2025</p>
        </div>
      </footer>
    </div>
  )
}


