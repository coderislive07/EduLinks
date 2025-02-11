import image from '../../../../../assets/careers/1008.png'
import rarrow from '../../../../../assets/rarrow.png'
function CareerGrid() {
  const careers = [
    {
      title: "Engineering & Technology",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10002-UvnOHRszpU0JptzrJeHt4ZD0CTr8BE.png",
      href:   "/usa-engineering-technology"
    },
    {
      title: "Health Sciences",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10003-Efep6DdB5fT1PrI8qabQdCrSaE8h19.png",
      href: "/usa-health-science"
    },
    {
      title: "Natural Sciences",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10004-XNSMCMxh2bS6786mvy4OAD1HeSFUaO.png",
      href: "/usa-natural-sciences"
    },
    {
      title: "Information Technology",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10005-vNsPQiXplFHBoDNVvIsTHyn6gYCMQg.png",
      href: "/usa-information-technology"
    },
    {
      title: "Environmental Science",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10006-Sv3lWz5QXwGbRl4Xw5Hpi78w452EXM.png",
      href: "/usa-environmental-science"
    },
    {
      title: "Biotechnology",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10007.jpg-2uKzWjrBCWImVXZghKxG45ZtHpCUDz.jpeg",
      href: "/usa-biotechnology"
    },
    {
      title: "Mathematics & Statistics",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10008-JHb7N51T1omhavo8jjSDpS6hcv86kW.png",
      href: "/usa-mathematics-statistics"
    },
    {
      title: "Business & Economics",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9owq2LJkezZynDLXoOeflBqGTxkatU.png",
      href: "/usa-business-economics",
    },
    {
      title: "Education",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dz0MLhDSHABXGpvVKL5BtBpipNkiYi.png",
      href: "/usa-education",
    },
    {
      title: "Psychology and Neuroscience",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FdgkN9HjT6HHHPKhIjtoFRrAdpODdT.png",
      href: "/usa-psychology-neuroscience",
    },
    {
      title: "Marketing",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TaqvVMXwZGkUVRjCHrRmh0iwPrrUwd.png",
      href: "/usa-marketing",
    },
    {
      title: "Data Science",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hx6yjMkxmTcGVpYclaTItxEY8Yj6LJ.png",
      href: "/usa-data-science",
    },
    {
      title: "Artificial Intelligence",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mV4Sl6QR1sJ0cjcg90yEu4sp7d6eal.png",
      href: "/usa-artificial-intelligence",
    },
    {
      title: "Graphic Design and Media",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VnfE22M3AIVGRzRKF8b8EoNsOppub0.png",
      href: "/usa-graphic-design-media",
    },
    {
      title: "Law and Policy",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ckZUmPuuSRWqoHsAf5AO6geOhFy3sZ.png",
      href: "/usa-law-policy",
    },
  ]
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mt-[42px] max-w-6xl mx-auto px-4">
        {careers.map((career, index) => (
            <div
                id=""

                key={index}
                className="bg-white overflow-hidden border-b-4 border-r-4 shadow-lg border-[#40E0D0] group"
                style={{ boxShadow: "4px 0 10px rgba(0, 0, 0, 0.25)" }}

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
                <h3 className="text-[20px] font-bold text-[#232323] font-gilroybold leading-[37.2px] mt-8">
                  {career.title}
                </h3>
                <div className="leading-[37.2px] flex justify-center">
                  <a href={career.href}>
                    <button className="mt-8  px-6 flex py-2 text-[24px] font-gilroyregular border-2 border-[#40E0D0] text-[#40E0D0] transition-all duration-300 rounded">
                      Learn More
                      <svg class="w-5 h-5 mt-[1.2vh] text-[#37d7d9] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#37d7d9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"></path></svg>
                    </button>
                  </a>
                </div>

              </div>
            </div>
        ))}
      </div>
  )
}

export default CareerGrid

