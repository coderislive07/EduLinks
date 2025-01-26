const universities = [
    {
      name: "University of Melbourne",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "University of Sydney",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Australian National University (ANU)",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "University of New South Wales (UNSW)",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "University of Queensland",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]
  
  export default function UniversitySection() {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Top Engineering & Technology Universities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={university.image || "/placeholder.svg"}
                  alt={university.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-center">{university.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  