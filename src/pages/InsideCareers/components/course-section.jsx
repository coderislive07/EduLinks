const courses = [
    {
      title: "Aerospace Engineering",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10002-g54wEC4sWaVDaD8vDysdwedJEOEKKA.png",
      description:
        "Aerospace Engineering is Australia's gateway to the design, development, and maintenance of aircraft and spacecraft. With companies like Boeing Australia and Airbus Australia Pacific leading the way, aerospace engineers play a critical role in advancing aviation technology and space exploration initiatives.",
    },
    {
      title: "Biomedical Engineering",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10004-C49wMNZbMOUBaWeK8x5x0CcAaE17gD.png",
      description:
        "Biomedical Engineering in Australia merges healthcare and engineering, creating technologies that improve patient outcomes and revolutionize medical treatments. Biomedical engineers work on developing medical devices, prosthetics, and imaging systems, contributing to breakthroughs in research institutions and hospitals across the country.",
    },
    {
      title: "Software Engineering",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10003-2ekNPtBKOiTvgAcnuZuvwS7RXKOOIo.png",
      description:
        "Australia's growing tech industry offers abundant opportunities for Software Engineers. From startups to established tech giants, software engineers in Australia are crucial in developing and maintaining software applications across various industries, including fintech, healthcare, and cloud computing.",
    },
    {
      title: "Robotics and Automation Engineering",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10001-gVtWYim75BK6hRQiyWAcmghvDsdne1.png",
      description:
        "Robotics and Automation Engineering in Australia is booming, particularly in manufacturing, mining, and agriculture sectors. Engineers in this field design and implement automated systems that improve efficiency, safety, and productivity.",
    },
  ]
  
  export default function CourseSection() {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {courses.map((course, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  