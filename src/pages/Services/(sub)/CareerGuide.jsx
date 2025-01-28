import React from 'react'
import Hero from "../../../components/Services/Hero.jsx"
import HeroImg from "../../../assets/services/StudyHero.svg"
import Service2 from "../../../assets/services/2.svg"
import Advantages from '../../../components/Services/Advantanges.jsx'
import Specialisation from "../../../components/Services/Specialisation.jsx"
import WhyChooseUs from "../../../components/Services/WhyChooseUs.jsx"
import WhatMakesUsBest from "../../../components/Services/WhatMkaesUsBest.jsx"
import Principals from "../../../components/Services/Principals.jsx"
import Career from "../../../assets/services/Personalised.svg"

import one from "../../../assets/services/icons2/1.png"
import two from "../../../assets/services/icons2/2.png"
import three from "../../../assets/services/icons2/3.png"
import four from "../../../assets/services/icons2/4.png"
import five from "../../../assets/services/icons2/5.png"

function CareerGuide() {
    const careerGuidanceData = {
        title: "Why Choose Us for Your Career Guidance?",
        introduction: "Students should choose Edulinks for their personalized career guidance because we offer unparalleled expertise and individualized support throughout the entire process. Our key strengths include:",
        features: [
          {
            title: "Personalised Assessment",
            description: "Conducting in-depth evaluations to identify individual strengths, interests, and career aspirations.",
            details: "Our comprehensive assessment tools help uncover your unique talents and align them with potential career paths."
          },
          {
            title: "Strategic Career Roadmap",
            description: "Developing a customized career plan with clear milestones and actionable steps.",
            details: "We create a tailored roadmap that guides you through each stage of your career journey, ensuring you stay on track to achieve your goals."
          },
          {
            title: "Expert Interview Coaching",
            description: "Providing professional coaching to enhance interview skills and boost confidence.",
            details: "Our experienced coaches prepare you for various interview scenarios, helping you present your best self to potential employers."
          },
          {
            title: "Insightful Industry Analysis",
            description: "Offering detailed insights into various industries and emerging career trends.",
            details: "Stay ahead of the curve with our up-to-date industry reports and analysis of future job market trends."
          },
          {
            title: "Resume And Cover Letter Crafting",
            description: "Creating compelling resumes and cover letters that highlight unique skills and experiences.",
            details: "Our expert writers help you craft standout application materials that effectively communicate your value to employers."
          },
          {
            title: "Networking Opportunities",
            description: "Connecting students with industry professionals and potential employers for valuable networking.",
            details: "Gain access to our extensive network of alumni and industry partners, opening doors to potential career opportunities."
          }
        ]
      };
      const Paragraph = `Edulinks offers comprehensive Personalized Career Guidance designed to simplify the decision-making process for students planning their future careers. Our expert team provides individualized support, from career exploration to selecting the right educational and professional opportunities. We ensure that all career plans are carefully crafted, offering assistance with resume building, interview preparation, and job search strategies to maximize success. Our services include the latest information on industry trends, educational requirements, and job market insights, tailored to the unique aspirations of each student. With Edulinks, students can confidently navigate their career journeys, turning their ambitions into reality.`

      const Heading = `Personalised Career Guidance`

      const careerGuidanceFeatures = [
        {
          title: "What Makes Edulinks Best For Personalized Career Guidance",
          isHeading: true,
        },
        {
          title: "Expert Insights",
          icon: one,
          isHeading: false,
          description: "Deep understanding of various career paths and industry trends.",
        },
        {
          title: "Tailored Advice",
          icon:two,
          isHeading: false,
          description: "Personalized career strategies for your unique journey.",
        },
        {
          title: "Comprehensive Review",
          icon: three,
          isHeading: false,
          description: "Thorough assessment of your skills and career plans.",
        },
        {
          title: "Proven Success",
          icon: four,
          isHeading: false,
          description: "Track record of helping clients achieve their career goals.",
        },
        {
          title: "Ongoing Support",
          icon: five,
          isHeading: false,
          description: "Continuous guidance from career planning to job placement.",
        },
      ];
      const data = [
        {
            title: "Career Assessment & Skill Development",
            description: "Receive expert evaluations to identify strengths and personalized advice to enhance skills.",
        },
        {
            title: "Job Search & Resume Enhancement",
            description: "Learn effective job search strategies and get professional help crafting a standout resume.",
        },
        {
            title: "Interview Coaching",
            description: "Boost your confidence and performance with expert interview tips and coaching.",
        },
        {
            title: "Career Transition & Ongoing Support",
            description: "Access support for smooth transitions and continuous guidance for long-term success.",
        },
        {
            title: "Stress-Free Planning",
            description: "Enjoy a seamless career planning process with our dedicated team's guidance.",
        },
    ];
    
  return (
    <div>
      <Hero Image={Career} Text1={"Personalised"} Text2={"Career Guidance"} Text3={"With Us"} />
      <Specialisation Heading={Heading} Paragraph={Paragraph} num={1}/>
      <WhyChooseUs VisaJourney={careerGuidanceData}/>
      <Advantages heading="Unlock Your Career Potential with Edulinks"
            Image={Service2}
            advantages={data}/>
      <WhatMakesUsBest features={careerGuidanceFeatures}/>
      <Principals/>

    </div>
  )
}

export default CareerGuide
