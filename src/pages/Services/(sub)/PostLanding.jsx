import React from 'react'
import Hero from "../../../components/Services/Hero.jsx"
import HeroImg from "../../../assets/services/StudyHero.svg"
import Service5 from "../../../assets/services/5.svg"
import Advantages from '../../../components/Services/Advantanges.jsx'
import Specialisation from "../../../components/Services/Specialisation.jsx"
import WhyChooseUs from "../../../components/Services/WhyChooseUs.jsx"
import WhatMakesUsBest from "../../../components/Services/WhatMkaesUsBest.jsx"
import Principals from "../../../components/Services/Principals.jsx"
import PostLanding1 from "../../../assets/services/postLanding.svg"
import one from "../../../assets/services/icons5/5.1.svg"
import two from "../../../assets/services/icons5/5.2.svg"
import three from "../../../assets/services/icons5/5.3.svg"
import four from "../../../assets/services/icons5/5.4.svg"
import five from "../../../assets/services/icons5/5.5.svg"

// import

function PostLanding() {
    const postLandingServicesData = {
        title: "Why Choose Us for Your Post Landing Services?",
        introduction: "Students should choose Edulinks for their post landing needs because we offer unparalleled expertise and personalized support throughout the entire settlement process. Our key strengths include:",
        features: [
          {
            title: "Tailored Settlement Plans",
            description: "Personalized strategies to help you settle quickly and comfortably.",
            details: "We create custom plans that address your specific needs, ensuring a smooth transition to your new environment."
          },
          {
            title: "Essential Service Setup",
            description: "Guidance on setting up banking, healthcare, and utilities.",
            details: "Our team assists you in navigating local systems, helping you establish essential services efficiently."
          },
          {
            title: "Housing Assistance",
            description: "Support in finding both temporary and permanent accommodation.",
            details: "We provide resources and guidance to help you secure safe and suitable housing that meets your needs and budget."
          },
          {
            title: "Local Orientation",
            description: "Familiarization with local transportation, culture, and community resources.",
            details: "Our orientation services help you quickly adapt to your new surroundings and feel at home in your new community."
          },
          {
            title: "Employment Support",
            description: "Assistance with job search strategies and networking opportunities.",
            details: "We offer guidance on local job markets, resume tailoring, and connecting with potential employers or internships."
          },
          {
            title: "Ongoing Settlement Help",
            description: "Continuous support for any challenges during your transition.",
            details: "Our team remains available to address any issues or questions that arise as you settle into your new life."
          }
        ]
      };


      
      
      const Heading = `Post Landing Services`
      
      const Paragraph = `Edulinks offers comprehensive Post-Landing services to help individuals transition smoothly into their new life abroad. Our expert team provides personalized support, from airport pickup and temporary accommodation to assistance with setting up essential services like banking, healthcare, and registrations. We ensure all aspects of your settlement are meticulously handled, offering guidance on finding permanent housing, navigating local transportation, and understanding cultural nuances. Our services include the latest information on job search strategies, community resources, and educational opportunities tailored to your needs. With Edulinks, you can confidently start your new journey, making your relocation seamless and stress-free.`
      const scholarshipFeatures = [
        {
          title: "What Makes Edulinks Best For Scholarship Assessment",
          isHeading: true,
        },
        {
          icon: one,
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
      
      const loanGuidanceFeatures = [
        {
          title: "What Makes Edulinks Best For Loan Guidance",
          isHeading: true,
        },
        {
          icon: one,
          title: "Tailored Loan Solutions",
          description: "Find loans that align perfectly with your financial needs.",
        },
        {
          icon: two,
          title: "Expert Guidance",
          description: "Strengthen your loan application with professional insights.",
        },
        {
          icon: three,
          title: "Accurate Documentation",
          description: "Ensure all loan documents are correctly prepared for approval.",
        },
        {
          icon: four,
          title: "End-to-End Support",
          description: "Receive help from initial consultation to loan management.",
        },
        {
          icon: five,
          title: "Financial Alerts",
          description: "Stay informed with timely updates and reminders.",
        },
      ];
      
      const features = [
        {
          title: "What Makes Us Best For Your Post-Landing Services",
          isHeading: true,
        },
        {
          icon: one,
          title: "Custom Settlement Plans",
          description: "Tailored support for a smooth transition.",
        },
        {
          icon: two,
          title: "Housing Assistance",
          description: "Help with temporary and permanent accommodation.",
        },
        {
          icon: three,
          title: "Documentation Setup",
          description: "Assistance with local paperwork and essential services.",
        },
        {
          icon: four,
          title: "Cultural Integration",
          description: "Guidance on customs and community connections.",
        },
        {
          icon: five,
          title: "Continuous Support",
          description: "Ongoing help for a comfortable adjustment.",
        },
      ];

 

  return (
    <div>
      <Hero Image={PostLanding1} Text1={"We Offer"} Text2={"Post Landing"} Text3={"Services Too"}/>
      <Specialisation Heading={Heading} Paragraph={Paragraph} num={5}/>
      <WhyChooseUs VisaJourney={postLandingServicesData}/>
      <Advantages Image={Service5}/>
      <WhatMakesUsBest features={features}/>
      <Principals/>

    </div>
  )
}

export default PostLanding
