import React from 'react'
import one from "../../assets/studyDestination/University1/1.1.svg"
import two from "../../assets/studyDestination/University1/1.2.svg"
import three from "../../assets/studyDestination/University1/1.3.svg"
import four from "../../assets/studyDestination/University1/1.4.svg"
import five from "../../assets/studyDestination/University1/1.5.svg"
import six from "../../assets/studyDestination/University1/1.6.svg"
import seven from "../../assets/studyDestination/University1/1.7.svg"
import eight from "../../assets/studyDestination/University1/1.8.svg"
import nine from "../../assets/studyDestination/University1/1.9.svg"
import ten from "../../assets/studyDestination/University1/1.10.svg"
import PopluarUniversities from "../../components/StudyDestination/PopularUniversities"
import Hero from "../../components/StudyDestination/Hero"
import Cost from "../../components/StudyDestination/Cost"
import PopularCourses from "../../components/StudyDestination/PopularCourses"
import Testimonals from '@/components/StudyDestination/Testimonals'
import WhyStudyIn from '@/components/StudyDestination/whyStudyIn'
import Imp1 from "@/assets/studyDestination/imp1.svg"
import Course1 from "@/assets/studyDestination/course1.svg"
import career1 from "@/assets/studyDestination/career1.svg"
import hero1 from "@/assets/studyDestination/hero1.1.svg"
import hero2 from "@/assets/studyDestination/hero1.2.svg"

function USA1() {

    const universities = [
        {
          name: "Harvard University",
          logoUrl: one,
        },
        {
          name: "Stanford University",
          logoUrl: two,
        },
        {
          name: "Massachusetts Institute of Technology",
          logoUrl: three,
        },
        {
          name: "California Institute of Technology",
          logoUrl: four,
        },
        {
          name: "University of Chicago",
          logoUrl: five,
        },
        {
          name: "Princeton University",
          logoUrl: six,
        },
        {
          name: "Columbia University",
          logoUrl: seven,
        },
        {
          name: "University of Pennsylvania",
          logoUrl: eight,
        },
        {
          name: "Yale University",
          logoUrl: nine,
        },
        {
          name: "University of California, Berkeley",
          logoUrl: ten,
        },
      ]
      const importantLinks = [
        { title: "MBA in Germany", href: "#" },
        { title: "Masters in Germany", href: "#" },
        { title: "Cost to study in Germany", href: "#" },
        { title: "Scholarship to study in Germany", href: "#" },
      ]
    
      const popularCourses= [
        { name: "Engineering & Technology", href: "#" },
        { name: "Business & Management", href: "#" },
        { name: "Computer Science & Information Technology", href: "#" },
        { name: "Natural Sciences & Mathematics", href: "#" },
        { name: "Medicine & Healthcare", href: "#" },
      ]

      const educationData = {
        country: "UNITED STATES",
        costs: [
          {
            type: "Tuition Fees for one-year (Indicative)*",
            amount: 25000,
          },
          {
            type: "Living and Accommodation",
            amount: 15000,
          },
          {
            type: "Airfare from India to USA",
            amount: 1000,
          },
          {
            type: "Visa Fees (Visa & SEVIS)",
            amount: 435,
          },
        ],
        totalExpenses: 41535,
        careerInsights: {
          title: "Careers & Industry Insights",
          description:
            "One of the most technologically powerful and dynamic countries, the USA is the largest & most dominant economy globally. Sectors that empower this world’s most productive economy include Healthcare, Technology, Construction, Retail, Manufacturing, Finance & Insurance, and Real Estate. Top jobs with high remuneration prospects for international students include Medicine, Computer & Information Systems Managers, Architectural & Engineering Managers, and Marketing & Financial Managers. The standard of living in the USA is among the highest in the world with high per capita income. This nation performs very well in many measures of well-being such as income & wealth, health status, jobs and earnings, education & skills, and environmental quality.",
          images: [
            {
              url: career1,  // Replace with actual image variable or URL
              alt: "Iconic American university campus with students and US flag",
            },
          ],
        },
      };
      
      const studyInfo = {
        title: "Why Study in USA?",
        description:
          "Study in one of the most prestigious higher education systems globally and access some high-end technology and cutting-edge research for an immersive, engaging, and collaborative study experience. Choose from an extensive range of schools, numerous study disciplines, and niche qualifications that are difficult to find in other parts of the world. Experience a uniquely flexible education system allowing you to apply to a variety of programs suiting your academic and career goals. Graduate with a truly global outlook and real-world skills for the future.",
        quickFacts: [
          "USA hosts more than a million international students.",
          "Over 25% of the world’s top 100 universities are in the USA.",
          "Post-study stay back visas (OPT) up to 3 years for STEM programs.",
          "Internships (CPT) up to 12 months while studying.",
          "Merit-Based & Need-Based Scholarships.",
          "Over 4500 accredited universities & institutions to choose from.",
          "12 of the best student cities in the world (QS Best Student Cities 2023).",
          "Opportunities for Research, Teaching & Graduate Assistantships.",
        ],
      };
      
      const destinationData = {
        country: "UNITED STATES",
        images: [
          {
            url: hero1,  // Replace with actual image variable or URL
            alt: "Prestigious American university campus with modern architecture and students",
          },
          {
            url: hero2,  // Replace with actual image variable or URL
            alt: "Aerial view of a bustling US city with top-ranked academic institutions",
          },
        ],
        description:
          "The United States of America has been a global leader in the field of education and boasts of a lion’s share of top-ranked universities according to all major international rankings. Few countries offer as many high-ranked universities and Nobel laureate academia as the USA does.",
      };
      
  return (
    <div>
      <Hero destination={destinationData} />
         <WhyStudyIn studyInfo={studyInfo}/>
         <Cost educationData={educationData}/>
      <PopluarUniversities universities={universities} />
      <PopularCourses Image1={Course1} Image2={Imp1} importantLinks={importantLinks} popularCourses={popularCourses} />
                  <Testimonals/>
      
             
    </div>
  )
}

export default USA1
