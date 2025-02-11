import React from "react";
// Import images
import anUniversity from "../../../assets/top universities/USA/10001.png";
import melbourneUni from "../../../assets/top universities/USA/10002.png";
import sydneyUni from "../../../assets/top universities/USA/10003.png";
import queenslandUni from "../../../assets/top universities/USA/10004.png";
import nswUni from "../../../assets/top universities/USA/10005.png";
import monashUni from "../../../assets/top universities/USA/10006.png";
import westernAusUni from "../../../assets/top universities/USA/10007.png";
import adelaideUni from "../../../assets/top universities/USA/10008.png";
import utsUni from "../../../assets/top universities/USA/10009.png";
import canberraUni from "../../../assets/top universities/USA/10010.png";
import macquarieUni from "../../../assets/top universities/USA/10011.png";
import qutUni from "../../../assets/top universities/USA/10012.png";
import rmitUni from "../../../assets/top universities/USA/10013.png";
import wollongongUni from "../../../assets/top universities/USA/10014.png";
import curtinUni from "../../../assets/top universities/USA/10015.png";
import deakinUni from "../../../assets/top universities/USA/10016.png";
import newcastleUni from "../../../assets/top universities/USA/10017.png";
import griffithUni from "../../../assets/top universities/USA/10018.png";
import laTrobeUni from "../../../assets/top universities/USA/10019.png";
import tasmaniaUni from "../../../assets/top universities/USA/10020.png";
import backgroundimg from "../../../assets/Ellipse-10.png"
const universities = [
  { name: "Harvard University", image: anUniversity, link: "/usa-topuniversity/harvard-university" },
  { name: "Stanford University", image: melbourneUni, link: "/usa-topuniversity/stanford-university" },
  { name: "Massachusetts Institute of Technology", image: sydneyUni, link: "/usa-topuniversity/massachusetts-institute-of-technology" },
  { name: "California Institute of Technology", image: queenslandUni, link: "/usa-topuniversity/california-institute-of-technology" },
  { name: "University of Chicago", image: nswUni, link: "/usa-topuniversity/university-of-chicago" },
  { name: "Princeton University", image: monashUni, link: "/usa-topuniversity/princeton-university" },
  { name: "Columbia University", image: westernAusUni, link: "/usa-topuniversity/columbia-university" },
  { name: "University of Pennsylvania", image: adelaideUni, link: "/usa-topuniversity/university-of-pennsylvania" },
  { name: "Yale University", image: utsUni, link: "/usa-topuniversity/yale-university" },
  { name: "University of California, Berkeley", image: canberraUni, link: "/usa-topuniversity/university-of-california-berkeley" },
  { name: "University of California, Los Angeles", image: macquarieUni, link: "/usa-topuniversity/university-of-california-los-angeles" },
  { name: "University of Michigan, Ann Arbor", image: qutUni, link: "/usa-topuniversity/university-of-michigan-ann-arbor" },
  { name: "Johns Hopkins University", image: rmitUni, link: "/usa-topuniversity/johns-hopkins-university" },
  { name: "Northwestern University", image: wollongongUni, link: "/usa-topuniversity/northwestern-university" },
  { name: "Duke University", image: curtinUni, link: "/usa-topuniversity/duke-university" },
  { name: "Cornell University", image: deakinUni, link: "/usa-topuniversity/cornell-university" },
  { name: "New York University", image: newcastleUni, link: "/usa-topuniversity/new-york-university" },
  { name: "University of Southern California", image: griffithUni, link: "/usa-topuniversity/university-of-southern-california" },
  { name: "Carnegie Mellon University", image: laTrobeUni, link: "/usa-topuniversity/carnegie-mellon-university" },
  { name: "University of Washington, Seattle", image: tasmaniaUni, link: "/usa-topuniversity/university-of-washington-seattle" }
]
export default function USA() {
  return (
    <div className="font-sans">
   <div className="py-20  h-[470px] pt-[139px]  flex items-center z-50   justify-center" style={{
      backgroundImage: `url(${backgroundimg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      <div className=" mx-auto px-4 flex justify-center text-center  ">
        <h1 className="text-white text-[60px]  font-regular font-adramalech">Top USA Universities</h1>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 "
      />
    </div>
      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="text-center max-w-7xl mx-auto mb-8 text-gray-700 font-regular text-2xl font-roboto">
          <p>
          USA is home to some of the world’s most prestigious universities, offering a diverse range of programs and world-class education. At Edulinks, we provide expert guidance to help you navigate through USA’s top 20 universities, ensuring you find the perfect match for your academic and career goals. Whether you’re seeking research excellence, strong industry connections, or an enriching campus life, Edulinks is here to support you at every step as you work toward achieving your study abroad aspirations in USA.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="bg-white rounded-none overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-1 font-serif"
            >
              <img src={uni.image} alt={uni.name} className="w-full h-[400px] object-cover" />
              <div className="p-6 text-center">
                <h3 className="mb-4 text-gray-800">{uni.name}</h3>
                <a
                  href={uni.link || "#"}
                  className="inline-block pt-[0px] pr-[10px] pb-[0px] pl-[15px] border border-[#00b4d8] text-[#37d7d9] rounded-sm text-[24px]  transition-colors duration-300"
                >
                  Know More &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>    
    </div>
  )
}


