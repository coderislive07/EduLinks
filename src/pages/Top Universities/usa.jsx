import React from "react";

// Import images
import anUniversity from "../../assets/top universities/USA/10001.png";
import melbourneUni from "../../assets/top universities/USA/10002.png";
import sydneyUni from "../../assets/top universities/USA/10003.png";
import queenslandUni from "../../assets/top universities/USA/10004.png";
import nswUni from "../../assets/top universities/USA/10005.png";
import monashUni from "../../assets/top universities/USA/10006.png";
import westernAusUni from "../../assets/top universities/USA/10007.png";
import adelaideUni from "../../assets/top universities/USA/10008.png";
import utsUni from "../../assets/top universities/USA/10009.png";
import canberraUni from "../../assets/top universities/USA/10010.png";
import macquarieUni from "../../assets/top universities/USA/10011.png";
import qutUni from "../../assets/top universities/USA/10012.png";
import rmitUni from "../../assets/top universities/USA/10013.png";
import wollongongUni from "../../assets/top universities/USA/10014.png";
import curtinUni from "../../assets/top universities/USA/10015.png";
import deakinUni from "../../assets/top universities/USA/10016.png";
import newcastleUni from "../../assets/top universities/USA/10017.png";
import griffithUni from "../../assets/top universities/USA/10018.png";
import laTrobeUni from "../../assets/top universities/USA/10019.png";
import tasmaniaUni from "../../assets/top universities/USA/10020.png";
import backgroundimg from "../../assets/Ellipse-10.png"

const universities = [
  { name: "Harvard University", image: anUniversity },
  { name: "Stanford University", image: melbourneUni },
  { name: "Massachusetts Institute of Technology", image: sydneyUni },
  { name: "California Institute of Technology", image: queenslandUni },
  { name: "University of Chicago", image: nswUni },
  { name: "Princeton University", image: monashUni },
  { name: "Columbia University", image: westernAusUni },
  { name: "University of Pennsylvania", image: adelaideUni },
  { name: "Yale University", image: utsUni },
  { name: "University of California,Berkeley", image:canberraUni },
  { name: "University of California,Los Angeles", image: macquarieUni },
  { name: "University of Michigan,Ann Arbor", image: qutUni },
  { name: "Johns Hopkins University​", image: rmitUni },
  { name: "Northwestern University​", image: wollongongUni },
  { name: "Duke University​", image: curtinUni },
  { name: "Cornell University​", image: deakinUni },
  { name: "New York University ​", image: newcastleUni },
  { name: "University of Southern California​", image: griffithUni },
  { name: "Carnegie Mellon University ​​", image: laTrobeUni },
  { name: "University ofWashington, Seattle​", image: tasmaniaUni },
];
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

      
    </div>
  )
}


