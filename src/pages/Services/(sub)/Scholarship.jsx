import Hero from "../../../components/Services/Hero.jsx"
import Advantages from '../../../components/Services/Advantanges.jsx'
import Specialisation from "../../../components/Services/Specialisation.jsx"
import WhyChooseUs from "../../../components/Services/WhyChooseUs.jsx"
import WhatMakesUsBest from "../../../components/Services/WhatMkaesUsBest.jsx"
import Principals from "../../../components/Services/Principals.jsx"
import React from 'react'
import Service3 from "../../../assets/services/3.svg"
import Scholar from "../../../assets/services/Scholar.svg"
import one from "../../../assets/services/icons3/3.1.svg"
import two from "../../../assets/services/icons3/3.2.svg"
import three from "../../../assets/services/icons3/3.3.svg"
import four from "../../../assets/services/icons3/3.4.svg"
import five from "../../../assets/services/icons3/3.5.svg"

function Scholarship() {
    const scholarshipAssessmentData = {
        title: "Why Choose Us for Your Scholarship Assessment?",
        introduction: "Students should choose Edulinks for their scholarship assessment needs because we offer unparalleled expertise and personalized support throughout the entire process. Our key strengths include:",
        features: [
          {
            title: "Personalised Eligibility Evaluation",
            description: "Conducting thorough assessments to identify scholarships that match individual profiles and needs.",
            details: "Our expert team analyzes your academic background, extracurricular activities, and career goals to find the most suitable scholarship opportunities."
          },
          {
            title: "Strategic Application Planning",
            description: "Creating a personalized timeline and strategy to meet all scholarship deadlines.",
            details: "We develop a comprehensive plan to ensure you submit strong applications for multiple scholarships, maximizing your chances of success."
          },
          {
            title: "Expert Essay Guidance",
            description: "Providing professional support in crafting compelling scholarship essays that stand out.",
            details: "Our experienced writers offer guidance on structure, content, and style to help you create impactful essays that resonate with scholarship committees."
          },
          {
            title: "Document Review",
            description: "Ensuring all application documents are thoroughly reviewed for accuracy and impact.",
            details: "We meticulously check every detail of your application, from personal statements to recommendation letters, to present the strongest possible case for your candidacy."
          },
          {
            title: "Interview Preparation",
            description: "Offering coaching to enhance performance and confidence in scholarship interviews.",
            details: "Our interview prep sessions cover common questions, body language, and strategies to effectively communicate your strengths and aspirations."
          },
          {
            title: "Continuous Support",
            description: "Offering continuous support and updates on new scholarship opportunities.",
            details: "We provide ongoing assistance throughout your academic journey, keeping you informed about new scholarships and helping you maintain your funding."
          }
        ]
      };
    
      const Heading = `Scholarship Assessment`
      const Paragraph= `Edulinks offers comprehensive Scholarship Assessment services designed to streamline the process for students seeking financial aid for their education. Our expert team provides personalized guidance, from identifying suitable scholarships to preparing and submitting applications. We ensure that all documents are meticulously reviewed, offering assistance with essay writing, recommendation letters, and interview preparation to maximize success. Our services include the latest information on available scholarships, eligibility criteria, and application deadlines, tailored to the unique needs of each student. With Edulinks, students can confidently pursue scholarship opportunities, turning their academic aspirations into reality.`

      const features = [
        {
          title: "What Makes Edulinks Best For Scholarship Assessment",
          isHeading: true,
        },
        {
          icon:one,
          title: "Eligibility Analysis",
          description: "Analyze your profile to match with the most suitable scholarships.",
        },
        {
          icon: two,
          title: "Application Tips",
          description: "Enhance your applications with tailored advice.",
        },
        {
          icon: three,
          title: "Expert Essay Writing Help",
          description: "Offer professional guidance to craft standout scholarship essays.",
        },
        {
          icon: four,
          title: "Document Check",
          description: "Verify and ensure error-free documents.",
        },
        {
          icon: five,
          title: "Proactive Monitoring",
          description: "Stay on schedule with proactive reminders.",
        },
      ];
      
      
      



      
  return (
    <div>
        <Hero Image={Scholar} Text2={"Scholarship Assement"} Text3={"In Ease With Us"}/>
    <Specialisation Heading={Heading} Paragraph={Paragraph} num={3}/>
      <WhyChooseUs VisaJourney={scholarshipAssessmentData}/>
      <Advantages Image={Service3}/>
      <WhatMakesUsBest features={features} />
      <Principals/>

    </div>
  )
}

export default Scholarship
