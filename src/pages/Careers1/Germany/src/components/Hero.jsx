import React from "react"
import germanybg from '../../../../../assets/careers/germanybg.png'
function Hero() {
    return (
        <div className="py-20 relative h-[48dvh]  flex items-center justify-center"    style={{
          backgroundImage: `url(${germanybg})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
          >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-white text-5xl underline font-bold font-adramalech">Germany</h1>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 "
        
          
       
      />
      </div>
    )
  }
  
  export default Hero
  
  