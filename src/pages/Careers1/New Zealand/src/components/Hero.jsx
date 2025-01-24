import React from "react"
import newzealandbg from '../../../../../assets/careers/newzealandbg.png'


function Hero() {
    return (
      <div className="py-20  h-[350px] pt-[139px]  flex items-center    justify-center"    style={{
        backgroundImage: `url(${newzealandbg})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
        >
      <div className=" mx-auto px-4 flex justify-center text-center  ">
        <h1 className="text-white text-[60px] underline font-regular font-adramalech">New Zealand</h1>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 "
        
       
      />
      </div>
    )
  }
  
  export default Hero
  
  