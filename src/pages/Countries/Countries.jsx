import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Countries } from "../../assets"
import StudyDestinations from "@/components/StudyDestination"

export default function EducationServices() {
  return (
    <main className="relative min-h-screen top-20 pt-7 lg:top-0 lg:pt-0">
      {/* Hero Background */}
      <div
        className="absolute inset-0 w-full h-[550px] md:h-[650px] lg:h-[750px]"
        style={{
          backgroundImage: `url(${Countries})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Text */}
        <div className="container mx-auto px-4 md:py-16 lg:py-[11rem]">
          <div className="flex justify-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-black font-extrabold font-roboto border-4  border-[#37D7D9] flex flex-col md:flex-row justify-center items-center gap-4">
              <span className="text-black pl-2">DISCOVER </span>
              <span className="bg-[#37D7D9] text-white px-4 h-full flex justify-center items-center">
                ENDLESS OPPORTUNITIES
              </span>
            </h2>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="bg-[#37D7D9] px-4 py-12 md:px-6 lg:px-8 h-auto md:h-[300px] text-[24px]">
          <div className="mx-auto max-w-7xl">
            <p className="mb-12 text-center text-white text-[24px] font-roboto">
              At Edulinks, we are dedicated to guiding you on a successful journey to your dream study destination.
              Whether you aspire to study in Canada, Germany, Australia, the UK, the USA, or New Zealand, our
              comprehensive services are designed to make your transition smooth and hassle-free.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
              <Card className="bg-white shadow-lg h-[235px] w-full md:w-[322px] rounded-none flex flex-col justify-center items-center mx-auto">
                <CardHeader className="p-0">
                  <CardTitle className="text-center">End-to-End Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-[20px] text-gray-600 font-roboto">
                  Comprehensive services from visa processing to post-landing assistance.
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg h-[235px] w-full md:w-[322px] rounded-none flex flex-col justify-center items-center mx-auto">
                <CardHeader className="p-0">
                  <CardTitle className="text-center">Tailored Guidance</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-[20px] text-gray-600 font-roboto">
                  Personalized career advice and customized services like Edulinks AI Jackpot
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg h-[235px] w-full md:w-[322px] rounded-none flex flex-col justify-center items-center mx-auto">
                <CardHeader className="p-0">
                  <CardTitle className="text-center">Global Success</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-[20px] text-gray-600 font-roboto">
                  Proven track record in securing visas, scholarships, and more across top study destinations.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[27rem] lg:pt-44" >

      <StudyDestinations />
      </div>
      <p className="mb-12 text-center text-[24px] font-roboto text-black max-w-7xl mx-auto">
        At Edulinks, we are dedicated to guiding you on a successful journey to your dream study destination. Whether
        you aspire to study in Canada, Germany, Australia, the UK, the USA, or New Zealand, our comprehensive services
        are designed to make your transition smooth and hassle-free.
      </p>
    </main>
  )
}

