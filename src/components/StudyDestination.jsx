"use client"

import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Germany, USA, Canada, Australia, NewZealand, UK } from "../assets/index"

export default function StudyDestinations() {
  const destinations = [
    {
      country: "GERMANY",
      image: Germany,
      alt: "Berlin skyline illustration with Brandenburg Gate",
    },
    {
      country: "CANADA",
      image: Canada,
      alt: "Toronto skyline illustration with CN Tower",
    },
    {
      country: "USA",
      image: USA,
      alt: "American landmarks illustration with Statue of Liberty",
    },
    {
      country: "AUSTRALIA",
      image: Australia,
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
    <div className="min-h-screen max-w-7xl px-4 py-8 md:px-6 lg:px-8 mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card
              key={destination.country}
              className="overflow-hidden rounded-[2rem] bg-white shadow-lg  hover:shadow-2xl transition-shadow font-roboto"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative">
                  <div
                    className="w-full h-full lg:w-[382px] lg:h-[242px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.image})` }}
                    aria-label={destination.alt}
                  />
                </div>
                <div className="p-4 lg:mb-8 text-center">
                  <h2 className="font-extrabold text-xl lg:text-[24px] mb-3">STUDY IN {destination.country}</h2>
                  <Button
      className="
        relative
        px-6 py-3
        text-lg  bg-[#37D7D957] text-[#37D7D9]
        rounded-lg
        shadow-[4px_4px_10px_0px_#00000040]
        before:content-['']
        before:absolute
        before:inset-0
        before:bg-white
        before:opacity-10
        before:rounded-lg
        before:shadow-[inset_12px_12px_4px_0px_#00000040]
        hover:shadow-[6px_6px_12px_0px_#00000040]
        active:shadow-[2px_2px_6px_0px_#00000040]
        transition-all duration-200 ease-in-out
        font-roboto
        font-bold
      "
      
    >
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

