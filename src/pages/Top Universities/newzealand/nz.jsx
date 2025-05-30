import React from "react";

// Import images
import backgroundimg from "../../../assets/Ellipse-10.png";

const universities = [
  {
    name: "University of Auckland",
    image: "https://edulinks.io/wp-content/uploads/2024/10/image-40-1.png",
    link: "/nz-topuniversity/university-of-auckland",
  },
  {
    name: "University of Otago",
    image: "https://edulinks.io/wp-content/uploads/2024/10/image-41-1.png",
    link: "/nz-topuniversity/university-of-otago",
  },
  {
    name: "Victoria University of Wellington",
    image: "https://edulinks.io/wp-content/uploads/2024/10/image-42-1.png",
    link: "/nz-topuniversity/victoria-university-of-wellington",
  },
  {
    name: "University of Canterbury",
    image: "https://edulinks.io/wp-content/uploads/2024/10/image-43-1.png",
    link: "/nz-topuniversity/university-of-canterbury",
  },
  {
    name: "Massey University",
    image: "https://edulinks.io/wp-content/uploads/2024/10/image-44-1.png",
    link: "/nz-topuniversity/massey-university",
  },
  {
    name: "University of Waikato",
    image: "https://edulinks.io/wp-content/uploads/2024/10/image-45-1.png",
    link: "/nz-topuniversity/university-of-waikato",
  },
  {
    name: "Lincoln University",
    image: "https://edulinks.io/wp-content/uploads/2024/10/image-46-1.png",
    link: "/nz-topuniversity/lincoln-university",
  },
  {
    name: "Auckland University of Technology",
    image: "https://edulinks.io/wp-content/uploads/2024/10/image-47-1.png",
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
