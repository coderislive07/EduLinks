import React from 'react'
import Hero from "../../../components/Services/Hero.jsx"
import Service4 from "../../../assets/services/4.svg"
import Loan1 from "../../../assets/services/Loan.svg"
import Advantages from '../../../components/Services/Advantanges.jsx'
import Specialisation from "../../../components/Services/Specialisation.jsx"
import WhyChooseUs from "../../../components/Services/WhyChooseUs.jsx"
import WhatMakesUsBest from "../../../components/Services/WhatMkaesUsBest.jsx"
import Principals from "../../../components/Services/Principals.jsx"
import one from "../../../assets/services/icons4/4.1.svg"
import two from "../../../assets/services/icons4/4.2.svg"
import three from "../../../assets/services/icons4/4.3.svg"
import four from "../../../assets/services/icons4/4.4.svg"
import five from "../../../assets/services/icons4/4.5.svg"


function Loan() {
    const loanGuidanceData = {
        title: "Why Choose Us for Your Loan Guidance?",
        introduction: "Students should choose Edulinks for their loan guidance needs because we offer unparalleled expertise and personalized support throughout the entire loan process. Our key strengths include:",
        features: [
          {
            title: "Personalised Loan Matching",
            description: "Thoroughly assessing and matching loans to individual financial needs.",
            details: "Our experts analyze your financial situation and educational goals to find the most suitable loan options, ensuring you get the best terms possible."
          },
          {
            title: "Strategic Loan Planning",
            description: "Personalized repayment plans for manageable and timely settlements.",
            details: "We help you create a strategic plan for loan repayment, considering your future income potential and career path to ensure financial stability."
          },
          {
            title: "Documentation Assistance",
            description: "Expert assistance in preparing essential loan documentation.",
            details: "Our team guides you through every step of the documentation process, ensuring all paperwork is accurate, complete, and submitted on time."
          },
          {
            title: "Negotiation Support",
            description: "Offering professional support in negotiating favorable loan terms and conditions.",
            details: "We leverage our expertise and relationships with lenders to help you secure the most favorable interest rates and repayment terms."
          },
          {
            title: "Credit Score Enhancement",
            description: "Guiding clients on improving their credit scores to increase their chances of loan approval.",
            details: "We provide strategies and advice to help you build or improve your credit score, enhancing your loan eligibility and terms."
          },
          {
            title: "Continuous Financial Support",
            description: "Offering ongoing assistance and updates on new loan opportunities and financial tips.",
            details: "Our support doesn't end with loan approval. We continue to provide guidance on financial management and keep you informed about refinancing opportunities."
          }
        ]
      };

      const Heading = `Loan Guidance`

      const Paragraph = `Edulinks offers comprehensive Loan Guidance services designed to simplify the loan application process for individuals seeking financial assistance for their educational needs. Our expert team provides personalized support, from identifying the best loan options to navigating through the application and approval stages. We ensure that all paperwork is meticulously prepared, offering assistance with credit score improvement, documentation, and negotiation to secure the best terms. Our services include the latest information on interest rates, eligibility criteria, and repayment options, tailored to the unique financial circumstances of each client. With Edulinks, you can confidently manage your educational finances, turning your academic dreams into reality with ease.`

      const features = [
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
      const data = [
        {
            title: "Loan Eligibility Analysis",
            description: "Assess your financial status to determine the best loan options available.",
        },
        {
            title: "Interest Rate Optimization",
            description: "Strategize to secure the most favorable interest rates for your loan.",
        },
        {
            title: "Loan Application Streamlining",
            description: "Simplify and expedite the loan application process with expert guidance.",
        },
        {
            title: "Debt Consolidation Advice",
            description: "Receive tailored advice on managing and consolidating multiple loans effectively.",
        },
        {
            title: "Comprehensive Loan Support",
            description: "Receive guidance from pre-approval to post-approval, ensuring a smooth and efficient loan process from start to finish.",
        },
    ];
  return (
    <div>
      <Hero Image={Loan1} Text2={"Loan Guidance"} Text3={" Made Easy With Our Expertise"}/>
      <Specialisation Heading={Heading} Paragraph={Paragraph} num={4}/>
      <WhyChooseUs VisaJourney={loanGuidanceData}/>
      <Advantages    heading="Simplify Your Loans with Edulinks Experts"
            Image={Service4}
            advantages={data}/>
      <WhatMakesUsBest features={features} />
      <Principals/>

    </div>
  )
}

export default Loan
