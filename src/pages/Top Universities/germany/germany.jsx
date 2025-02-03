import React from "react";

import anUniversity from "../../../assets/top universities/germany/10000.png";
import melbourneUni from "../../../assets/top universities/germany/10001.png";
import sydneyUni from "../../../assets/top universities/germany/10002.png";
import queenslandUni from "../../../assets/top universities/germany/10003.png";
import nswUni from "../../../assets/top universities/germany/10004.png";
import monashUni from "../../../assets/top universities/germany/10005.png";
import westernAusUni from "../../../assets/top universities/germany/10006.png";
import adelaideUni from "../../../assets/top universities/germany/10007.png";
import utsUni from "../../../assets/top universities/germany/10008.png";
import canberraUni from "../../../assets/top universities/germany/10009.png";
import macquarieUni from "../../../assets/top universities/germany/10010.png";
import qutUni from "../../../assets/top universities/germany/10011.png";
import rmitUni from "../../../assets/top universities/germany/10012.png";
import wollongongUni from "../../../assets/top universities/germany/10013.png";
import curtinUni from "../../../assets/top universities/germany/10014.png";
import deakinUni from "../../../assets/top universities/germany/10015.png";
import newcastleUni from "../../../assets/top universities/germany/10016.png";
import griffithUni from "../../../assets/top universities/germany/10017.png";
import laTrobeUni from "../../../assets/top universities/germany/10018.png";
import tasmaniaUni from "../../../assets/top universities/germany/10019.png";

import backgroundimg from "../../../assets/Ellipse-10.png"

const universities =[
  { 
    name: "Technische Universität München", 
    image: anUniversity,
    link: "/germany-topuniversity/technische-universitat-munchen",
  },
  { 
    name: "Ludwig Maximilians Universität München", 
    image: melbourneUni,
    link: "/germany-topuniversity/ludwig-maximilians-universitat-munchen",
  },
  { 
    name: "Ruprecht Karls Universität Heidelberg", 
    image: sydneyUni,
    link: "/germany-topuniversity/ruprecht-karls-universitat-heidelberg",
  },
  { 
    name: "Humboldt-Universität zu Berlin", 
    image: queenslandUni,
    link: "/germany-topuniversity/humboldt-universitat-zu-berlin",
  },
  { 
    name: "Freie Universität Berlin", 
    image: nswUni,
    link: "/germany-topuniversity/freie-universitat-berlin",
  },
  { 
    name: "Universität Freiburg", 
    image: monashUni,
    link: "/germany-topuniversity/universitat-freiburg",
  },
  { 
    name: "Universität Tübingen", 
    image: westernAusUni,
    link: "/germany-topuniversity/universtat-tubingen",
  },
  { 
    name: "Rheinische Friedrich-Wilhelms-Universität Bonn", 
    image: adelaideUni,
    link: "/germany-topuniversity/rheinische-friedrich-wilhelms-universtat-bonn",
  },
  { 
    name: "Universität Hamburg", 
    image: utsUni,
    link: "/germany-topuniversity/universtat-hamburg",
  },
  { 
    name: "Universität Göttingen", 
    image: canberraUni,
    link: "/germany-topuniversity/universtat-gottingen",
  },
  { 
    name: "Universität Mannheim", 
    image: macquarieUni,
    link: "/germany-topuniversity/universtat-mannheim",
  },
  { 
    name: "RWTH Aachen University", 
    image: qutUni,
    link: "/germany-topuniversity/rwth-aachen-university",
  },
  { 
    name: "Universität Stuttgart", 
    image: rmitUni,
    link: "/germany-topuniversity/universitat-stuttgart",
  },
  { 
    name: "Universität Erlangen-Nürnberg", 
    image: wollongongUni,
    link: "/germany-topuniversity/Universität-Erlangen-Nürnberg",
  },
  { 
    name: "Universität Ulm", 
    image: curtinUni,
    link: "/germany-topuniversity/Universität-Ulm",
  },
  { 
    name: "Universität-Leipzig", 
    image: deakinUni,
    link: "/germany-topuniversity/universitat-leipzig",
  },
  { 
    name: "Universität Düsseldorf", 
    image: newcastleUni,
    link: "/germany-topuniversity/technische-universitat-darmstadt",
  },
  { 
    name: "Universität Konstanz", 
    image: griffithUni,
    link: "/germany-topuniversity/universtat-konstanz",
  },
  { 
    name: "Universität Karlsruhe", 
    image: laTrobeUni,
    link: "/germany-topuniversity/universitat-karlsruhe",
  },
  { 
    name: "Technische Universität Dresden", 
    image: tasmaniaUni,
    link: "/germany-topuniversity/technische-universtat-dresden",
  },
]
export default function Germany() {
  return (
    <div className="font-sans">
  
   <div className="py-20  h-[470px] pt-[139px]  flex items-center z-50   justify-center" style={{
      backgroundImage: `url(${backgroundimg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      <div className=" mx-auto px-4 flex justify-center text-center  ">
        <h1 className="text-white text-[60px]  font-regular font-adramalech">Top Germany Universities</h1>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 "
      />
    </div>

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="text-center max-w-7xl mx-auto mb-8 text-gray-700 font-regular text-2xl font-roboto">
          <p>
          Germany is renowned for its world-class universities, offering a strong focus on research, innovation, and academic excellence. At Edulinks, we guide you through Germany’s top 20 universities, helping you find the perfect institution to match your academic and career ambitions. Whether you’re seeking cutting-edge research, industry partnerships, or a rich cultural experience, Edulinks is here to support you every step of the way as you pursue your study abroad goals in Germany.

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


