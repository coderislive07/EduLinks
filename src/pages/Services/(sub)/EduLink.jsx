import React from 'react'
import Hero from "../../../components/Services/Hero.jsx"
import Ai from "../../../assets/services/Ai.svg"
import Service6 from "../../../assets/services/6.svg"
import Advantages from '../../../components/Services/Advantanges.jsx'
import Specialisation from "../../../components/Services/Specialisation.jsx"
import WhyChooseUs from "../../../components/Services/WhyChooseUs.jsx"
import WhatMakesUsBest from "../../../components/Services/WhatMkaesUsBest.jsx"
import Principals from "../../../components/Services/Principals.jsx"
import one from "../../../assets/services/icons6/6.1.svg"
import two from "../../../assets/services/icons6/6.2.png"
import three from "../../../assets/services/icons6/6.3.svg"
import four from "../../../assets/services/icons6/6.4.svg"
import five from "../../../assets/services/icons6/6.5.svg"


function EduLink() {
    const edulinksAIAssistantData = {
        title: "Why Choose Edulinks AI Assistant?",
        introduction: "Students should choose Edulinks AI Assistant for its personalized, data-driven insights and expert support throughout their study abroad journey. Our key strengths include:",
        features: [
          {
            title: "Personalized Career Guidance",
            description: "Tailored career paths based on your interests and psychometry results.",
            details: "Our AI analyzes your unique profile to suggest career paths that align with your passions and strengths."
          },
          {
            title: "University Shortlisting",
            description: "AI-powered recommendations for universities best suited to your profile and goals.",
            details: "Leverage our extensive database and intelligent algorithms to find your ideal academic destinations."
          },
          {
            title: "Scholarship Assistance",
            description: "Guidance on finding and applying for scholarships in your chosen country.",
            details: "Our AI scans thousands of scholarship opportunities to match you with the most relevant and attainable options."
          },
          {
            title: "Visa Process Support",
            description: "Step-by-step help with understanding and navigating visa requirements.",
            details: "Simplify complex visa procedures with our AI-guided assistance, ensuring you meet all necessary criteria."
          },
          {
            title: "Psychometry Tests",
            description: "Assessments to discover careers aligned with your strengths and personality.",
            details: "Take advantage of our advanced psychometric tools to gain deep insights into your potential career fits."
          },
          {
            title: "Instant Query Resolution",
            description: "Get real-time answers to all your study abroad questions.",
            details: "Our AI assistant is available 24/7 to provide immediate, accurate responses to your queries."
          }
        ]
      };

  
      const features = [
          {
            title: "What Makes Edulinks AI Assistant Best for You?",
            isHeading: true,
          },
          {
            icon: one,
            heading: "Personalized Career Paths",
            description: "AI-driven insights tailored to your strengths and goals.",
          },
          {
            icon: two,
            heading: "University Matching",
            description: "University recommendations aligned with your profile.",
          },
          {
            icon: three,
            heading: "Scholarship Guidance",
            description: "Help finding scholarships based on eligibility and study destination.",
          },
          {
            icon: four,
            heading: "Psychometric Testing",
            description: "Career assessments to discover your ideal path.",
          },
          {
            icon: five,
            heading: "Visa Process Assistance",
            description: "Step-by-step support for visa applications and procedures.",
          },
        ]
        const data = [
          {
              title: "Personalized Study Plan",
              description: "Get a customized academic roadmap based on your profile and career goals.",
          },
          {
              title: "University Shortlisting",
              description: "Receive tailored recommendations for top universities that match your aspirations.",
          },
          {
              title: "Scholarship Guidance",
              description: "Access advice on available scholarships and how to apply for them.",
          },
          {
              title: "Visa Assistance",
              description: "Step-by-step help with visa processes for your chosen country.",
          },
          {
              title: "Psychometry Tests",
              description: "Take assessments to identify the best career options aligned with your strengths.",
          },
      ];
      
      
      
      const Heading = `Edulinks AI Assistant`
      const Paragraph = `Edulinks AI Assistant offers personalized support for students navigating their education journey abroad. With tailored advice based on your profile, the AI helps you discover the best career paths, recommends universities, and provides insights into scholarships and visa processes for countries like the UK, USA, Canada, Germany, Australia, and New Zealand. Whether you need guidance on selecting the right course, psychometry tests for career matching, or answers to questions about studying overseas, the AI ensures you're well-prepared every step of the way. With instant access to expert advice, you can confidently make informed decisions for your future. Edulinks AI Assistant makes your global education dreams easy and stress-free.`
  return (
    <div>
      <Hero Image={Ai}  Text2={"Edulinks AI:"} Text3={"Your Global Education Guide"}/>
      <Specialisation Heading={Heading} Paragraph={Paragraph} num={2}/>
      <WhyChooseUs VisaJourney={edulinksAIAssistantData}/>
      <Advantages heading="Start Your Global Education with Edulinks AI"
            Image={Service6}
            advantages={data}/> 
       <WhatMakesUsBest features={features}/>
       <Principals/>
    </div>
  )
}

export default EduLink
