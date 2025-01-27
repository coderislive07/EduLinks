import React from 'react'
import Hero from "../../../components/Services/Hero.jsx"
import HeroImg from "../../../assets/services/StudyHero.svg"
import Service1 from "../../../assets/services/Service1.svg"
import Advantages from '../../../components/Services/Advantanges.jsx'
import Specialisation from "../../../components/Services/Specialisation.jsx"
import WhyChooseUs from "../../../components/Services/WhyChooseUs.jsx"
import WhatMakesUsBest from "../../../components/Services/WhatMkaesUsBest.jsx"
import Principals from "../../../components/Services/Principals.jsx"
import one from "../../../assets/services/icons1/1.1.svg"
import two from "../../../assets/services/icons1/1.2.svg"
import three from "../../../assets/services/icons1/1.3.svg"
import four from "../../../assets/services/icons1/1.4.svg"
import five from "../../../assets/services/icons1/1.5.svg"
function StudentVisa() {
    const Heading = "Study Visa"
    const Paragraph = `Edulinks offers comprehensive Study Visa services designed to streamline the process for students aspiring
            to study abroad. Our expert team provides personalized guidance, from selecting the right institution to
            preparing and submitting visa applications. We ensure that all documentation is meticulously reviewed, and
            we offer support in preparing for visa interviews, maximizing the chances of approval. Our services include
            up-to-date information on visa requirements, regulations, and changes, tailored to the specific needs of
            each student. With Edulinks, students can navigate the complexities of the visa process with confidence and
            ease, making their dream of international education a reality.`

        const visaJourneyData = {
                title: "Why Choose Us for Your Study Visa Journey?",
                introduction: "Students should choose Edulink for their study visa needs because we offer unparalleled expertise and personalized support throughout the entire process. Our key strengths include:",
                features: [
                  {
                    title: "Comprehensive Guidance",
                    description: "From selecting the right Institution to preparing for visa interviews.",
                    details: "We provide end-to-end support, guiding you through every step of your study visa journey."
                  },
                  {
                    title: "Expert Documentation Review",
                    description: "Ensuring all paperwork is meticulously checked for accuracy.",
                    details: "Our experienced team thoroughly reviews all your documents to minimize errors and increase approval chances."
                  },
                  {
                    title: "Up-to-date Information",
                    description: "Providing the latest updates on visa requirements and regulations.",
                    details: "We stay current with all visa-related changes to ensure your application meets the most recent criteria."
                  },
                  {
                    title: "High Success Rate",
                    description: "Our experienced team maximizes your chances of visa approval.",
                    details: "With our expertise, we've helped numerous students successfully obtain their study visas."
                  },
                  {
                    title: "Tailored Support",
                    description: "Customized assistance to meet each student's unique needs.",
                    details: "We understand that every student's situation is different, and we adapt our support accordingly."
                  },
                  {
                    title: "Confidence and Ease",
                    description: "Students can navigate the complexities of the visa process with confidence and ease.",
                    details: "Our support system ensures you feel assured and relaxed throughout your visa application journey."
                  }
                ]
              };

            
                
                const features= [
                    {
                        title: "What Makes Edulinks Best For Study Visa",
                        isHeading: true,
                    },
                  {
                    icon: one,
                    title : "Expert Knowledge",
                    description: "Extensive understanding of international visa requirements.",
                    
                  },
                  {
                    icon: two,
                    title: "Personalized Guidance",
                    description: "Tailored advice for your unique journey.",
                  },
                  {
                    icon: three,
                    title: "Meticulous Review",
                    description: "Thorough document checks to ensure accuracy.",
                  },
                  {
                    icon: four,
                    title: "High Success Rates",
                    description: "Proven track record of successful visa approvals.",
                  },
                  {
                    icon:five,
                    title: "Continuous Support",
                    description: "From consultation to post-visa services, we've got you covered.",
                  },
                ]

           
  return (
    <div>
      
    <Hero Image={HeroImg}/>
    <Specialisation Heading={Heading} Paragraph={Paragraph} num={0}/>
    <WhyChooseUs VisaJourney={visaJourneyData}/>
    <Advantages Image={Service1}/>
    <WhatMakesUsBest features={features}/>
    <Principals/>
    </div>
  )
}

export default StudentVisa
