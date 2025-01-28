import React from "react"
import aubsg from '../../../../../assets/careers/ausbg.png'


function Hero() {
  return (
    <div className="py-20  h-[350px] pt-[139px]  flex items-center    justify-center" style={{
      backgroundImage: `url(${aubsg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      <div className=" mx-auto px-4 flex justify-center text-center  ">
        <h1 className="text-white text-[60px] underline font-regular font-adramalech">Australia</h1>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 "


      />
    </div>
  )
}

export default Hero

