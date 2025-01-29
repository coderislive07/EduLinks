import React from "react"
import Hero from "../components/Hero"
import CareerGrid from "../components/CareerGrid"
import Text from "../components/Text"

export default function CareersNewZealand() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <main className="container mx-auto mt-6 px-4 py-8">  
        <Text/>
        <CareerGrid />
      </main>
    </div>
  )
}



