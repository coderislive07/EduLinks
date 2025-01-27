import { Link } from "lucide-react"

export default function CoursesAndLinks({ importantLinks, popularCourses , Image1, Image2 }) {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="relative">
            {/* <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-[#00e5ff]/20 rounded-lg" /> */}
            <img
              src={`${Image1}`}
              alt="Student studying"
              className="w-full rounded-lg relative z-10"
            />
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-6">Important Links</h2>
            <div className="space-y-3">
              {importantLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <Link className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-900">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif mb-6">Popular Courses</h2>
            <div className="space-y-3">
              {popularCourses.map((course) => (
                <a
                  key={course.name}
                  href={course.href}
                  className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <Link className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-900">{course.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative mt-8">
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4  rounded-lg" />
            <img
              src={`${Image2}`}
              alt="Researcher using microscope"
              className="w-full rounded-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

