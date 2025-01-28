import React from "react";

// Import images
import auckland from "../../../assets/top universities/NZ/10001.png";
import otago from "../../../assets/top universities/NZ/10002.png";
import wellingtom from "../../../assets/top universities/NZ/10003.png";
import canterbury from "../../../assets/top universities/NZ/10004.png";
import massey from "../../../assets/top universities/NZ/10005.png";
import waikato from "../../../assets/top universities/NZ/10006.png";
import lincoln from "../../../assets/top universities/NZ/10007.png";
import AUT from "../../../assets/top universities/NZ/10008.png";

import backgroundimg from "../../../assets/Ellipse-10.png";

const universities = [
  {
    name: "University of Auckland",
    image: auckland,
    link: "/nz-topuniversity/university-of-auckland",
  },
  {
    name: "University of Otago",
    image: otago,
    link: "/nz-topuniversity/university-of-otago",
  },
  {
    name: "Victoria University of Wellington",
    image: wellingtom,
    link: "/nz-topuniversity/victoria-university-of-wellington",
  },
  {
    name: "University of Canterbury",
    image: canterbury,
    link: "/nz-topuniversity/university-of-canterbury",
  },
  {
    name: "Massey University",
    image: massey,
    link: "/nz-topuniversity/massey-university",
  },
  {
    name: "University of Waikato",
    image: waikato,
    link: "/nz-topuniversity/university-of-waikato",
  },
  {
    name: "Lincoln University",
    image: lincoln,
    link: "/nz-topuniversity/lincoln-university",
  },
  {
    name: "Auckland University of Technology",
    image: AUT,
    link: "/nz-topuniversity/auckland-university-of-technology",
  },
];
export default function Nz() {
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
            Top New Zealand Universities
          </h1>
        </div>
        <div className="absolute inset-0 bg-cover bg-center opacity-50 " />
      </div>

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="text-center max-w-7xl mx-auto mb-8 text-gray-700 font-regular text-2xl font-roboto">
          <p>
            New Zealand is known for its exceptional universities, combining
            academic excellence with innovative programs in a stunning natural
            environment. At Edulinks, we guide you through New Zealand’s top
            universities, helping you find the best fit for your academic and
            professional aspirations. Whether you seek cutting-edge research,
            global industry connections, or an adventurous campus life, Edulinks
            is here to support you every step of the way as you pursue your
            study abroad goals in New Zealand.
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
                  href={uni.link}
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
  );
}
