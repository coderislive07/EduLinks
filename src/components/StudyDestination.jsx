import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function StudyDestinations() {
  const destinations = [
    {
      country: "GERMANY",
      image:
        "",
      alt: "Berlin skyline illustration with Brandenburg Gate",
    },
    {
      country: "CANADA",
      image:
        "",
      alt: "Toronto skyline illustration with CN Tower",
    },
    {
      country: "USA",
      image:
        "",
      alt: "American landmarks illustration with Statue of Liberty",
    },
    {
      country: "AUSTRALIA",
      image:
        "",
      alt: "Sydney landmarks illustration with Opera House",
    },
    {
      country: "NEW ZEALAND",
      image:
        "",
      alt: "New Zealand city skyline illustration",
    },
    {
      country: "UK",
      image:
        "",
      alt: "London landmarks illustration with Big Ben",
    },
  ]

  return (
    <div className="min-h-screen bg-[#40E0E7] px-4 py-8 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-medium mb-12 max-w-3xl mx-auto">
          We are here to help you with all the Services for the following Countries:
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.country} className="overflow-hidden rounded-3xl bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.image})` }}
                    aria-label={destination.alt}
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="font-bold text-lg mb-3">STUDY IN {destination.country}</h2>
                  <Button variant="secondary" className="bg-[#E6FBFC] text-black hover:bg-[#d0f5f7] transition-colors">
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

