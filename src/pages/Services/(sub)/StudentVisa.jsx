import React from 'react'
import Hero from "../../../components/Services/Hero.jsx"
import HeroImg from "../../../assets/services/StudyHero.svg"
import Service1 from "../../../assets/services/Service1.svg"
import Advantages from '../../../components/Services/Advantanges.jsx'
function StudentVisa() {
  return (
    <div>
      
    <Hero Image={HeroImg}/>
    <Advantages Image={Service1}/>
    </div>
  )
}

export default StudentVisa
