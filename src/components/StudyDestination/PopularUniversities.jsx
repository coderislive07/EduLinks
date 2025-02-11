import { ChevronRight } from "lucide-react"
import { useLocation,useNavigate } from "react-router-dom"

export default function PopularUniversities({ universities }) {
  const location = useLocation();
  const navigate= useNavigate();
  const pathSegments = location.pathname.split("/");
  const country = pathSegments[pathSegments.length - 1]; // Get the last segment
  const topUniversityPath = `${country}-topuniversity`; // Create dynamic path
  return (
    <div className="bg-[#37D7D9]/30 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-[48px] text-center mb-8"></h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6 cursor-pointer">
        {universities.map((university) => {
        const formattedName = university.name
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/[^a-z0-9-]/g, ""); // Remove special characters

        return (
          <div
            key={university.name}
            onClick={() => navigate(`/${topUniversityPath}/${formattedName}`)}
            className="bg-white rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition-shadow"
          >
            <div className="w-[96px] h-[85px] flex-shrink-0">
              <img
                src={university.logoUrl || "/placeholder.svg"}
                alt={`${university.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-gray-900 font-medium md:text-[20px]">
              {university.name}
            </span>
          </div>
        );
      })}

        </div>

        <div className="text-center">
          <button className="inline-flex items-center font-roboto1 font-bold text-[24px] hover:text-gray-700 transition-colors">
            Explore 
            <ChevronRight className="w-4 h-4 ml-1 font-bold" />
          </button>
        </div>
      </div>
    </div>
  )
}
