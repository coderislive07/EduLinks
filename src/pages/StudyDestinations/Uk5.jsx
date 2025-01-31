import React from 'react'
import one from "../../assets/studyDestination/University5/5.1.svg"
import two from "../../assets/studyDestination/University5/5.2.svg"
import three from "../../assets/studyDestination/University5/5.3.svg"
import four from "../../assets/studyDestination/University5/5.4.svg"
import five from "../../assets/studyDestination/University5/5.5.svg"
import six from "../../assets/studyDestination/University5/5.6.svg"
import seven from "../../assets/studyDestination/University5/5.7.svg"
import eight from "../../assets/studyDestination/University5/5.8.svg"
import nine from "../../assets/studyDestination/University5/5.9.svg"
import ten from "../../assets/studyDestination/University5/5.10.svg"
import PopluarUniversities from "../../components/StudyDestination/PopularUniversities"
import Hero from "../../components/StudyDestination/Hero"
import Cost from "../../components/StudyDestination/Cost"
import PopularCourses from "../../components/StudyDestination/PopularCourses"
import Testimonals from '@/components/StudyDestination/Testimonals'
import WhyStudyIn from '@/components/StudyDestination/whyStudyIn'
import Imp5 from "@/assets/studyDestination/imp5.svg"
import Course5 from "@/assets/studyDestination/course5.svg"
import hero1 from "@/assets/studyDestination/hero5.1.svg"
import hero2 from "@/assets/studyDestination/hero5.2.svg"
import career5 from "@/assets/studyDestination/career5.svg"
function Uk5() {
    const universities = [ 
        {
          name: "University of Oxford",
          logoUrl: one,
        },
        {
          name: "Imperial College London",
          logoUrl: two,
        },
        {
          name: "University of Edinburgh",
          logoUrl: three,
        },
        {
          name: "King's College London",
          logoUrl: four,
        },
        {
          name: "University of Bristol",
          logoUrl: five,
        },
        {
          name: "University of Cambridge",
          logoUrl: six,
        },
        {
          name: "University College London",
          logoUrl: seven,
        },
        {
          name: "University of Manchester",
          logoUrl: eight,
        },
        {
          name: "University of Warwick",
          logoUrl: nine,
        },
        {
          name: "University of Glasgow",
          logoUrl: ten,
        },
      ];
      
      const importantLinks = [
        { title: "MBA in UK", href: "#" },
        { title: "Masters in UK", href: "#" },
        { title: "Cost to study in UK", href: "#" },
        { title: "Scholarship to study in UK", href: "#" },
      ];
      
      const popularCourses = [
        { name: "Social Sciences & Humanities", href: "#" },
        { name: "Business & Finance", href: "#" },
        { name: "Computer Science & Artificial Intelligence", href: "#" },
        { name: "Engineering & Applied Sciences", href: "#" },
        { name: "Medical Sciences & Public Health", href: "#" },
      ];

      const educationData = {
        country: "GERMANY",
        costs: [
          {
            type: "Tuition Fees for one-year (Indicative)*",
            amount: 12000,
          },
          {
            type: "Living and Accommodation",
            amount: 11000,
          },
          {
            type: "Airfare from India to USA",
            amount: 700,
          },
          {
            type: "Visa Fees (Student Visa)",
            amount: 75,
          },
        ],
        totalExpenses: 23775,
        careerInsights: {
          title: "Careers & Industry Insights",
          description:
            "Germany, a hub of innovation and industry, stands as one of the world's leading economies. Key sectors driving Germany's robust economy include Engineering, Automotive, Healthcare, Technology, and Environmental Sciences. Top career opportunities for graduates include roles in Mechanical Engineering, Biotechnology, Information Technology, Renewable Energy, and Finance. Germany is noted for its high standard of living, substantial per capita income, and comprehensive healthcare system. The nation excels in academic and professional training, providing graduates with essential skills for a successful career in a globally connected world.",
          images: [
            {
              url: career5,  // Replace with actual image variable or URL
              alt: "German university building with innovation-driven atmosphere",
            },
          ],
        },
      };
      
      const destinationData = {
        country: "UNITED KINGDOM",
        images: [
          {
            url: hero1,  // Add the appropriate URL for the image
            alt: "Historic UK campus with traditional architecture and students walking",
          },
          {
            url: hero2,  // Add the appropriate URL for the image
            alt: "Aerial view of a vibrant UK city with prestigious universities",
          },
        ],
        description:
          "The United Kingdom is an academic powerhouse with a storied tradition in higher education. Home to some of the world's oldest and most prestigious universities, it consistently ranks high globally. The UK offers diverse, rigorous academic programs and is renowned for research excellence and teaching quality, preparing students for successful global careers.",
      };
      const studyInfo = {
        title: "Why Study in UK?",
        description:
          "Study in one of the world's foremost academic environments, where centuries of scholarly tradition meet modern research and innovation. The UK's educational system offers a wide range of top-tier universities known for their rigorous academics and extensive subject offerings. Students can choose from a variety of disciplines and engage in high-quality research and development, enhancing their career prospects globally. The unique education system provides tailored learning experiences designed to cultivate critical thinking and professional skills.",
        quickFacts: [
          "The UK hosts over 500,000 international students annually.",
          "18 of the world’s top 100 universities are in the UK.",
          "Post-study work visas allow up to 2 years' stay.",
          "Internship opportunities are integrated within many university courses.",
          "Numerous scholarships and financial aid options are available for international students.",
          "Over 160 universities offer diverse programs.",
          "4 of the top 10 QS Best Student Cities for 2023 are in the UK.",
          "Exceptional research, teaching, and professional development opportunities.",
        ],
      };
      
      
  return (
    <div>
       <Hero destination={destinationData} />
               <WhyStudyIn studyInfo={studyInfo}/>
               <Cost educationData={educationData}/>
            <PopluarUniversities universities={universities} />
            <PopularCourses Image1={Course5} Image2={Imp5} importantLinks={importantLinks} popularCourses={popularCourses} />
                        <Testimonals/>
            
    </div>
  )
}

export default Uk5
