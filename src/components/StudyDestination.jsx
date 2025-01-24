import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Germany, USA , Canada, Australia, NewZealand, UK} from "../assets/index"

export default function StudyDestinations() {
  const destinations = [
    {
      country: "GERMANY",
      image: Germany  ,
      alt: "Berlin skyline illustration with Brandenburg Gate",
    },
    {
      country: "CANADA",
      image:
        Canada,
      alt: "Toronto skyline illustration with CN Tower",
    },
    {
      country: "USA",
      image:USA
      ,
      alt: "American landmarks illustration with Statue of Liberty",
    },
    {
      country: "AUSTRALIA",
      image:
        Australia,
      alt: "Sydney landmarks illustration with Opera House",
    },
    {
      country: "NEW ZEALAND",
      image: NewZealand,
      alt: "New Zealand city skyline illustration",
    },
    {
      country: "UK",
      image: UK,
      alt: "London landmarks illustration with Big Ben",
    },
  ]

  return (
    <div className="min-h-screen  px-4 py-8 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-medium mb-12 max-w-3xl mx-auto">
          We are here to help you with all the Services for the following Countries:
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.country} className="overflow-hidden rounded-[2rem] bg-white shadow-lg h-[402px] w-[382px] hover:shadow-2xl transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative">
                  <div
                    className="w-[382px] h-[242px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.image})` }}
                    aria-label={destination.alt}
                  />
                </div>
                <div className=" pb-4 text-center">
                  <h2 className="font-bold text-[24px] mb-3">STUDY IN {destination.country}</h2>
                  <Button variant="secondary" className="relative w-[112px] h-[35px]  bg-[#37D7D957] text-[#37D7D9] text-lg font-sans transition-all duration-300
        before:absolute before:inset-0  before:shadow-[inset_-8px_-8px_12px_rgba(0,0,0,0.1),inset_8px_8px_12px_rgba(255,255,255,0.1)]
        after:absolute after:inset-0  after:shadow-[8px_8px_12px_rgba(0,0,0,0.15)]
        hover:before:shadow-[inset_-10px_-10px_15px_rgba(0,0,0,0.12),inset_10px_10px_15px_rgba(255,255,255,0.12)]
        hover:after:shadow-[10px_10px_15px_rgba(0,0,0,0.17)]">
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

