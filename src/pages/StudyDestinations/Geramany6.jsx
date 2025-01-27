import React from 'react'
import one from "../../assets/studyDestination/University6/6.1.svg"
import two from "../../assets/studyDestination/University6/6.2.svg"
import three from "../../assets/studyDestination/University6/6.3.svg"
import four from "../../assets/studyDestination/University6/6.4.svg"
import five from "../../assets/studyDestination/University6/6.5.svg"
import six from "../../assets/studyDestination/University6/6.6.svg"
import seven from "../../assets/studyDestination/University6/6.7.svg"
import eight from "../../assets/studyDestination/University6/6.8.svg"
import nine from "../../assets/studyDestination/University6/6.9.svg"
import ten from "../../assets/studyDestination/University6/6.10.svg"
import PopluarUniversities from "../../components/StudyDestination/PopularUniversities"
import Hero from "../../components/StudyDestination/Hero"
import Cost from "../../components/StudyDestination/Cost"
import PopularCourses from "../../components/StudyDestination/PopularCourses"
import Testimonals from '@/components/StudyDestination/Testimonals'
import WhyStudyIn from '@/components/StudyDestination/whyStudyIn'
import Imp6 from "@/assets/studyDestination/imp6.svg"
import Course6 from "@/assets/studyDestination/courses6.svg"
import career6 from "@/assets/studyDestination/career6.svg"
import hero1 from "@/assets/studyDestination/hero6.1.svg"
import hero2 from "@/assets/studyDestination/hero6.2.svg"
function Geramany6() {
    const universities = [ 
        {
          name: "Technische Universität München",
          logoUrl: one,
        },
        {
          name: "Ruprecht-Karls-Universität Heidelberg",
          logoUrl: two,
        },
        {
          name: "Freie Universität Berlin",
          logoUrl: three,
        },
        {
          name: "Universität Tübingen",
          logoUrl: four,
        },
        {
          name: "Universität Göttingen",
          logoUrl: five,
        },
        {
          name: "Ludwig-Maximilians-Universität München",
          logoUrl: six,
        },
        {
          name: "Humboldt-Universität zu Berlin",
          logoUrl: seven,
        },
        {
          name: "Universität Freiburg",
          logoUrl: eight,
        },
        {
          name: "Universität Hamburg",
          logoUrl: nine,
        },
        {
          name: "Universität Mannheim",
          logoUrl: ten,
        },
      ];
      const importantLinks = [
        { title: "MBA in Germany", href: "#" },
        { title: "Masters in Germany", href: "#" },
        { title: "Cost to study in Germany", href: "#" },
        { title: "Scholarship to study in Germany", href: "#" },
      ];
      
      const popularCourses = [
        { name: "Engineering & Technology", href: "#" },
        { name: "Business & Management", href: "#" },
        { name: "Computer Science & Information Technology", href: "#" },
        { name: "Natural Sciences & Mathematics", href: "#" },
        { name: "Medicine & Healthcare", href: "#" },
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
          url: career6,
          alt: "German university building with flag",
        }
      ],
    },
  }

  const studyInfo = {
    title: "Why Study in Germany?",
    description:
      "Study in one of the world's foremost academic environments, where a tradition of scholarly excellence meets modern research and innovation. Germany's educational system offers a wide range of top-tier universities known for their rigorous academics and extensive subject offerings. Students can choose from a variety of disciplines and engage in high-quality research and development, enhancing their career prospects globally. The unique education system provides tailored learning experiences designed to cultivate critical thinking and professional skills.",
    quickFacts: [
      "Germany hosts over 300,000 international students annually.",
      "12 of the world's top 100 universities are in Germany.",
      "Post-study work visas allow up to 18 months' stay.",
      "Internship opportunities are integrated within many university courses.",
      "Numerous scholarships and financial aid options are available for international students.",
      "Over 400 universities offer diverse programs.",
      "3 of the top 10 QS Best Student Cities for 2023 are in Germany.",
      "Exceptional research, teaching, and professional development opportunities.",
    ],
  }

  const destinationData = {
    country: "GERMANY",
    images: [
      {
        url: hero1,
        alt: "Historic German waterfront with traditional architecture and river boat",
      },
      {
        url: hero2,
        alt: "Aerial view of German city center with historic architecture",
      },
    ],
    description:
      "Germany is a leading academic hub with a rich tradition in higher education. Home to some of the world's most esteemed universities, it consistently ranks high globally. Germany offers diverse, rigorous academic programs and is renowned for research excellence and teaching quality, preparing students for successful global careers.",
  }

      
  return (
    <div>
        <Hero destination={destinationData} />
        <WhyStudyIn studyInfo={studyInfo}/>
      <Cost educationData={educationData}/>
      <PopluarUniversities universities={universities} />
        <PopularCourses Image1={Course6} Image2={Imp6} importantLinks={importantLinks} popularCourses={popularCourses} />
    </div>
  )
}

export default Geramany6
