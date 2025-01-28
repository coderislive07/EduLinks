import React from "react";

// Import images
import oxford from "../../../assets/top universities/UK/10001.png";
import cambridge from "../../../assets/top universities/UK/10002.png";
import imperial from "../../../assets/top universities/UK/10003.png";
import LSEPC from "../../../assets/top universities/UK/10004.png";
import UCL from "../../../assets/top universities/UK/10005.png";
import Edinburgh from "../../../assets/top universities/UK/10006.png";
import manchester from "../../../assets/top universities/UK/10007.png";
import king from "../../../assets/top universities/UK/10008.png";
import warwick from "../../../assets/top universities/UK/10009.png";
import Bristol from "../../../assets/top universities/UK/10010.png";
import Glasgow from "../../../assets/top universities/UK/10011.png";
import Birmingham from "../../../assets/top universities/UK/10012.png";
import sheffield from "../../../assets/top universities/UK/10013.png";
import southampton from "../../../assets/top universities/UK/10014.png";
import Leeds from "../../../assets/top universities/UK/10015.png";
import York from "../../../assets/top universities/UK/10016.png";
import Exeter from "../../../assets/top universities/UK/10017.png";
import stAndrews from "../../../assets/top universities/UK/10018.png";

import backgroundimg from "../../assets/Ellipse-10.png";

const universities = [
  {
    name: "University of Oxford",
    image: oxford,
    link: "/uk-topuniversity/university-of-oxford",
  },
  {
    name: "University of Cambridge",
    image: cambridge,
    link: "/uk-topuniversity/university-of-cambridge",
  },
  {
    name: "Imperial College London",
    image: imperial,
    link: "/uk-topuniversity/imperial-college-london",
  },
  {
    name: "London School of Economics and Political Science",
    image: LSEPC,
    link: "/uk-topuniversity/london-school-of-economics-and-political-science",
  },
  {
    name: "University College London",
    image: UCL,
    link: "/uk-topuniversity/university-college-london",
  },
  {
    name: "University of Edinburgh",
    image: Edinburgh,
    link: "/uk-topuniversity/university-of-edinburgh",
  },
  {
    name: "University of Manchester",
    image: manchester,
    link: "/uk-topuniversity/university-of-manchester",
  },
  {
    name: "King's College London",
    image: king,
    link: "/uk-topuniversity/kings-college-london",
  },
  {
    name: "University of Warwick",
    image: warwick,
    link: "/uk-topuniversity/university-of-warwick",
  },
  {
    name: "University of Bristol",
    image: Bristol,
    link: "/uk-topuniversity/university-of-bristol",
  },
  {
    name: "University of Glasgow",
    image: Glasgow,
    link: "/uk-topuniversity/university-of-glasgow",
  },
  {
    name: "University of Birmingham",
    image: Birmingham,
    link: "/uk-topuniversity/university-of-birmingham",
  },
  {
    name: "University of Sheffield",
    image: sheffield,
    link: "/uk-topuniversity/university-of-sheffield",
  },
  {
    name: "University of Southampton",
    image: southampton,
    link: "/uk-topuniversity/university-of-southampton",
  },
  {
    name: "University of Leeds",
    image: Leeds,
    link: "/uk-topuniversity/university-of-leeds",
  },
  {
    name: "University of York",
    image: York,
    link: "/uk-topuniversity/university-of-york",
  },
  {
    name: "University of Exeter",
    image: Exeter,
    link: "/uk-topuniversity/university-of-exeter",
  },
  {
    name: "University of St Andrews",
    image: stAndrews,
    link: "/uk-topuniversity/university-of-st-andrews",
  },
];
export default function Uk() {
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
            Top UK Universities
          </h1>
        </div>
        <div className="absolute inset-0 bg-cover bg-center opacity-50 " />
      </div>

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="text-center max-w-7xl mx-auto mb-8 text-gray-700 font-regular text-2xl font-roboto">
          <p>
            The UK is home to some of the world’s most prestigious universities,
            known for their academic excellence, research impact, and rich
            history. At Edulinks, we help you explore the top 20 universities in
            the UK, ensuring you find the ideal fit for your academic and
            professional aspirations. Whether you aim for research leadership,
            industry connections, or an inspiring campus experience, Edulinks is
            here to support you every step of the way in achieving your study
            abroad goals in the UK.
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
  );
}
