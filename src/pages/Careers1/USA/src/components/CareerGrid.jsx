import image from '../../../../../assets/careers/1008.png'
function CareerGrid() {
  const careers = [
    {
      title: "Engineering & Technology",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10002-UvnOHRszpU0JptzrJeHt4ZD0CTr8BE.png",
    },
    {
      title: "Health Sciences",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10003-Efep6DdB5fT1PrI8qabQdCrSaE8h19.png",
    },
    {
      title: "Natural Sciences",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10004-XNSMCMxh2bS6786mvy4OAD1HeSFUaO.png",
    },
    {
      title: "Information Technology",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10005-vNsPQiXplFHBoDNVvIsTHyn6gYCMQg.png",
    },
    {
      title: "Environmental Science",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10006-Sv3lWz5QXwGbRl4Xw5Hpi78w452EXM.png",
    },
    {
      title: "Biotechnology",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10007.jpg-2uKzWjrBCWImVXZghKxG45ZtHpCUDz.jpeg",
    },
    {
      title: "Mathematics & Statistics",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10008-JHb7N51T1omhavo8jjSDpS6hcv86kW.png",
    },
    {
      title: "Business & Economics",
      image: "https://edulinks.io/wp-content/uploads/2024/10/image-3-1.png",
    },
    {
      title: "Education",
      image: "https://edulinks.io/wp-content/uploads/2024/10/Rectangle-580-2.png",
    },
    {
      title: "Psychology and Neuroscience",
      image: "https://edulinks.io/wp-content/uploads/2024/10/Rectangle-496-3.png",
    },
    {
      title: "Marketing",
      image: "https://edulinks.io/wp-content/uploads/2024/10/image-4.png",
    },
    {
      title: "Data Science",
      image: "https://edulinks.io/wp-content/uploads/2024/10/Rectangle-580-3.png",
    },
    {
      title: "Artificial Intelligence",
      image: "https://edulinks.io/wp-content/uploads/2024/10/Rectangle-496-4.png",
    },
    {
      title: "Graphic Design and Media",
      image: "https://edulinks.io/wp-content/uploads/2024/10/image-5-1.png",
    },
    {
      title: "Law and Policy",
      image: "https://edulinks.io/wp-content/uploads/2024/10/Rectangle-580-4.png",
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[95px] max-w-6xl mx-auto px-4">
      {careers.map((career, index) => (
        <div
          key={index}
          className={`bg-white overflow-hidden border-b-4  border-[#40E0D0] border-r-4 group`}
        >
          <div className="relative">
            <div className="absolute inset-0 z-10" />
            <img
              src={career.image || "/placeholder.svg"}
              alt={career.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikiLz48L3N2Zz4=')] opacity-30 z-20" />
          </div>
          <div className="p-6 text-center bg-white">
            <h3 className="text-[20px] font-bold text-[#232323] font-['Roboto_Condensed'] leading-[37.2px] mt-8">
              {career.title}
            </h3>
            <button className="mt-8 px-8 py-2 text-xl border-2 border-[#40E0D0] text-[#40E0D0] hover:bg-[#40E0D0] hover:text-white transition-all duration-300 rounded">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CareerGrid

