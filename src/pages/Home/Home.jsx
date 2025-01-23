import React from "react"
export default function Home() {
  return (
    <main>

      <section
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/universitybackground-4RKQli29m4566lXOxt6ZGKMEsgFaXr.png')`,
        }}
        className="relative min-h-[600px] pt-20 pb-32 bg-center h-max bg-cover"
      >

        <div
          className="absolute bottom-0 left-0 w-full h-[35vh]"
          style={{
            background: `linear-gradient(180deg, 
        rgba(38, 185, 193, 0.2) 0%,
        rgba(38, 185, 193, 0.1) 50%,
        rgba(255, 255, 255, 0.95) 85%,
        rgba(255, 255, 255, 1) 100%
      )`,
          }}
        ></div>

        {/* Blur effect at the bottom */}
        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: "100px",
            backdropFilter: "blur(25px)",
            background: "rgba(255, 255, 255, 0.3)",
            maskImage: "linear-gradient(to bottom, transparent, white)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, white)",
          }}
        ></div>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-adramalech ">
                Connecting Students
                to Overseas Education
                Opportunities Using
                AI Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-xl">
              Our Ai-enabled solutions help International Students to choose the best global universities.
              </p>
              <button className="bg-white cursor-pointer text-black px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all">
                Try Now
              </button>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/university-eT9AESi8dQdL3uEkITEhSLX3SdOF5r.png"
                alt="AI Assistant with University"
                className="w-full max-w-[550px] mx-auto mt-[2vh] "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-6xl font-adramalech font-bold text-gray-800">Our Core </span>
            <span className="text-6xl font-adramalech font-bold text-[#26B9C1]">Strengths</span>
          </h2>
          <div className="grid md:grid-cols-3  gap-6">
            <div className="bg-[#E6FBFC] border border-[#37d7d9] rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#26B9C1] mb-2">800+</div>
              <div className="text-gray-600">Global University Tie-Ups</div>
            </div>
            <div className="bg-[#E6FBFC] border border-[#37d7d9] rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#26B9C1] mb-2">10K+</div>
              <div className="text-gray-600">Dreams Fulfilled</div>
            </div>
            <div className="bg-[#E6FBFC] rounded-lg border border-[#37d7d9] p-6 text-center">
              <div className="text-4xl font-bold text-[#26B9C1] mb-2">20+</div>
              <div className="text-gray-600">Years of Industry Presence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
      <div className="text-center">
               <h2 className="text-3xl  font-bold">
                <p className="text-[#26B9C1] text-6xl font-adramalech">Edulinks Services <span className="text-black">For Universities </span> </p> 

              </h2>
              </div>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
          
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boygirl-VQ8Ok9yTg8ofh3vqzoWcsDngYdZHfm.png"
                alt="Students"
                className="w-full max-w-[500px] mx-auto"
              />
            </div>
            <div className="space-y-6">
          
              <h3 className="text-2xl font-adramalech font-semibold">How Edulinks can help Universities</h3>
              <p className="text-gray-600 font-roboto">
                Maximize your reach across geographies and watch your student recruitment gain without compromising in
                quality.
              </p>
              <p className="font-adramalech text-xl">Offerings</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#26B9C1]"></div>
                  <span>Global Student Flow Database Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#26B9C1]"></div>
                  <span>Student Trust and Recruitment Network</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#26B9C1]"></div>
                  <span>Enhanced Brand Visibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E6FBFC]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                <span className="text-[#26B9C1]">Edulinks Multi Country Advantage</span>
                <br />
                For Students
              </h2>
              <p className="text-gray-600">Study anywhere throughout the Globe with Edulinks!</p>
              <p className="text-gray-600">
                Apply to your Choice University in USA, Canada, UK, Australia and many more Countries. The choices are
                opportunities are limitless.
              </p>
              <button className="text-[#26B9C1] font-semibold hover:underline">Explore More »</button>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abroads-2YKO4gzVKtXMPgbuqYaB8ClE0gOGv2.png"
                alt="Study Destinations"
                className="w-full max-w-[500px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Platform Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-3xl font-bold text-[#26B9C1]">Edulinks technology based platform</span>
            <br />
            <span className="text-xl text-[#26B9C1]">makes it easier for you to study abroad</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personstudy-YOtdi9pho7WWkDhNb10ZROpTRAqpiq.png"
                alt="Technology Platform"
                className="w-full max-w-[500px] mx-auto"
              />
            </div>
            <div className="space-y-4 text-gray-600">
              <p>• Track all files digitally in global campus</p>
              <p>• One application multiple courses & universities</p>
              <p>• Track your university application status</p>
              <p>• Submit & manage multiple applications</p>
              <p>• Reduce mistakes through technology solutions</p>
              <button className="text-[#26B9C1] font-semibold hover:underline">Discover AI Assistant »</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-3xl font-bold text-[#26B9C1]">Edulinks</span>
            <span className="text-3xl font-bold text-gray-800"> Study Partners</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/autt-0OTbVPfIagfULmguQRAl7OVXASmrfm.png"
              alt="AUT"
              className="h-12"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/witt-vgUfmXjkIp5F8DYERZx0fTH1RfwQjX.png"
              alt="WITT"
              className="h-12"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otago-AAEq24Zo9OH2GFQX9ZgA08NXT4v93H.png"
              alt="OTAGO"
              className="h-12"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wintec-lfszNfWflG3BxpZhLd7lswKykIJ1N2.png"
              alt="Wintec"
              className="h-12"
            />
          </div>
        </div>
      </section>

      {/* Background Decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[400px] bg-cover bg- opacity-10"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/universitybackground-4RKQli29m4566lXOxt6ZGKMEsgFaXr.png')`,
        }}
      ></div>
    </main>
  )
}

