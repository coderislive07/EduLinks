import React from "react";

import anUniversity from "../../../assets/top universities/Aust/australian nation university.jpg";
import melbourneUni from "../../../assets/top universities/Aust/university of melbourne.png";
import sydneyUni from "../../../assets/top universities/Aust/university of sydney.png";
import queenslandUni from "../../../assets/top universities/Aust/uni of queen.jpg";
import nswUni from "../../../assets/top universities/Aust/university of new south wales.png";
import monashUni from "../../../assets/top universities/Aust/monash university.png";
import westernAusUni from "../../../assets/top universities/Aust/university of western aus.png";
import adelaideUni from "../../../assets/top universities/Aust/university of adelaide.png";
import utsUni from "../../../assets/top universities/Aust/university of tech sydney.png";
import canberraUni from "../../../assets/top universities/Aust/university of canberra.png";
import macquarieUni from "../../../assets/top universities/Aust/macquarie university.png";
import qutUni from "../../../assets/top universities/Aust/queensland university of tech.png";
import rmitUni from "../../../assets/top universities/Aust/RMIT university.png";
import wollongongUni from "../../../assets/top universities/Aust/university of wollongong.png";
import curtinUni from "../../../assets/top universities/Aust/curtin univ.png";
import deakinUni from "../../../assets/top universities/Aust/deakin univ.png";
import newcastleUni from "../../../assets/top universities/Aust/uni of newcastle.png";
import griffithUni from "../../../assets/top universities/Aust/griffith uni.png";
import laTrobeUni from "../../../assets/top universities/Aust/la trobe university.png";
import tasmaniaUni from "../../../assets/top universities/Aust/uni of tasmania.png";
import backgroundimg from "../../../assets/Ellipse-10.png";

const universities = [
  {
    name: "Australian National University",
    image: anUniversity,
    link: "/australia-topuniversity/australian-national-university",
  },
  {
    name: "University of Melbourne",
    image: melbourneUni,
    link: "/australia-topuniversity/university-of-melbourne",
  },
  {
    name: "University of Sydney",
    image: sydneyUni,
    link: "/australia-topuniversity/university-of-sydney",
  },
  {
    name: "University of Queensland",
    image: queenslandUni,
    link: "/australia-topuniversity/university-of-queensland",
  },
  {
    name: "University of New South Wales",
    image: nswUni,
    link: "/australia-topuniversity/university-of-new-south-wales",
  },
  {
    name: "Monash University",
    image: monashUni,
    link: "/australia-topuniversity/monash-university",
  },
  {
    name: "University of Western Australia",
    image: westernAusUni,
    link: "/australia-topuniversity/university-of-western-australia",
  },
  {
    name: "University of Adelaide",
    image: adelaideUni,
    link: "/australia-topuniversity/university-of-adelaide",
  },
  {
    name: "University of Technology Sydney",
    image: utsUni,
    link: "/australia-topuniversity/university-of-technology-sydney",
  },
  {
    name: "University of Canberra",
    image: canberraUni,
    link: "/australia-topuniversity/university-of-canberra",
  },
  {
    name: "Macquarie University",
    image: macquarieUni,
    link: "/australia-topuniversity/macquarie-university",
  },
  {
    name: "Queensland University of Technology",
    image: qutUni,
    link: "/australia-topuniversity/queensland-university-of-technology",
  },
  {
    name: "RMIT University",
    image: rmitUni,
    link: "/australia-topuniversity/rmit",
  },
  {
    name: "University of Wollongong",
    image: wollongongUni,
    link: "/australia-topuniversity/university-of-wollongong",
  },
  {
    name: "Curtin University",
    image: curtinUni,
    link: "/australia-topuniversity/curtin-university",
  },
  {
    name: "Deakin University",
    image: deakinUni,
    link: "/australia-topuniversity/deakin-university",
  },
  {
    name: "University of Newcastle",
    image: newcastleUni,
    link: "/australia-topuniversity/university-of-newcastle",
  },
  {
    name: "Griffith University",
    image: griffithUni,
    link: "/australia-topuniversity/griffith-university",
  },
  {
    name: "La Trobe University",
    image: laTrobeUni,
    link: "/australia-topuniversity/la-trobe-university",
  },
  {
    name: "University of Tasmania",
    image: tasmaniaUni,
    link: "/australia-topuniversity/university-of-tasmania",
  },
];
export default function Aus() {
  return (
    <div className="font-sans">


      <div
        className="py-20  h-[470px] pt-[139px]  flex items-center z-50   justify-center"
        style={{
          backgroundImage: `url(${backgroundimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" mx-auto px-4 flex justify-center text-center  ">
          <h1 className="text-white text-[60px]  font-regular font-adramalech">
            Top Australian Universities
          </h1>
        </div>
        <div className="absolute inset-0 bg-cover bg-center opacity-50 " />
      </div>

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="text-center max-w-7xl mx-auto mb-8 text-gray-700 font-regular text-2xl font-roboto">
          <p>
            Australia is home to some of the world's leading universities,
            offering a diverse range of programs and cutting-edge research
            opportunities. At Edulinks, we guide you through Australia's top 20
            universities, ensuring you find the perfect match for your academic
            aspirations. Whether you're looking for world-class research
            facilities, innovative programs, international career opportunities,
            or a vibrant student life, Edulinks is here to support you every
            step of the way towards achieving your study abroad dreams in
            Australia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="bg-white rounded-none overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-1 font-serif"
            >
              <img
                src={uni.image}
                alt={uni.name}
                className="w-full h-[400px] object-cover"
              />
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
  );
}
