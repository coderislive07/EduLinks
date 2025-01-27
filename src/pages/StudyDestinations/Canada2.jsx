import React from 'react'
import one from "../../assets/studyDestination/University2/2.1.svg"
import two from "../../assets/studyDestination/University2/2.2.svg"
import three from "../../assets/studyDestination/University2/2.3.svg"
import four from "../../assets/studyDestination/University2/2.4.svg"
import five from "../../assets/studyDestination/University2/2.5.svg"
import six from "../../assets/studyDestination/University2/2.6.svg"
import seven from "../../assets/studyDestination/University2/2.7.svg"
import eight from "../../assets/studyDestination/University2/2.8.svg"
import nine from "../../assets/studyDestination/University2/2.9.svg"
import ten from "../../assets/studyDestination/University2/2.10.svg"
import PopluarUniversities from "../../components/StudyDestination/PopularUniversities"
import Hero from "../../components/StudyDestination/Hero"
import Cost from "../../components/StudyDestination/Cost"
import PopularCourses from "../../components/StudyDestination/PopularCourses"
import Testimonals from '@/components/StudyDestination/Testimonals'
import WhyStudyIn from '@/components/StudyDestination/whyStudyIn'
import Imp2 from "@/assets/studyDestination/imp2.svg"
import Course2 from "@/assets/studyDestination/course2.svg"
import hero1 from "@/assets/studyDestination/hero2.1.svg"
import hero2 from "@/assets/studyDestination/hero2.2.svg"
import career2 from "@/assets/studyDestination/career2.svg"

function Canada2() {
    const universities = [ 
        {
          name: "University of Toronto",
          logoUrl: one,
        },
        {
          name: "McGill University",
          logoUrl: two,
        },
        {
          name: "University of Montreal",
          logoUrl: three,
        },
        {
          name: "University of Waterloo",
          logoUrl: four,
        },
        {
          name: "Queen’s University",
          logoUrl: five,
        },
        {
          name: "University of British Columbia",
          logoUrl: six,
        },
        {
          name: "University of Alberta",
          logoUrl: seven,
        },
        {
          name: "McMaster University",
          logoUrl: eight,
        },
        {
          name: "University of Western Ontario",
          logoUrl: nine,
        },
        {
          name: "University of Calgary",
          logoUrl: ten,
        },
      ];
      const importantLinks = [
        { title: "MBA in Canada", href: "#" },
        { title: "Masters in Canada", href: "#" },
        { title: "Cost to study in Canada", href: "#" },
        { title: "Scholarship to study in Canada", href: "#" },
      ];
      
      const popularCourses = [
        { name: "Environmental Science & Renewable Energy", href: "#" },
        { name: "Business & Commerce", href: "#" },
        { name: "Computer Science & AI Technology", href: "#" },
        { name: "Engineering & Industrial Technologies", href: "#" },
        { name: "Health Sciences & Public Health Management", href: "#" },
      ];

      const educationData = {
        country: "CANADA",
        costs: [
          {
            type: "Tuition Fees for one-year (Indicative)*",
            amount: 20000,
          },
          {
            type: "Living and Accommodation",
            amount: 12000,
          },
          {
            type: "Airfare from India to USA",
            amount: 1200,
          },
          {
            type: "Visa Fees (Study Permit)",
            amount: 150,
          },
        ],
        totalExpenses: 33350,
        careerInsights: {
          title: "Careers & Industry Insights",
          description:
            "Canada stands out as a technologically advanced and stable nation with a diverse and robust economy. Key sectors driving Canada's economy include Energy, Technology, Healthcare, Environmental Science, and Finance. Prominent career paths for international students in Canada span Technology Management, Environmental Engineering, Healthcare, Financial Services, and Energy Solutions. The standard of living in Canada is ranked among the world's best, with competitive income levels, outstanding healthcare, a high degree of safety, and a commitment to environmental sustainability. Additionally, Canada offers a welcoming and inclusive environment for people from all backgrounds.",
          images: [
            {
              url: career2,  // Replace with actual image variable or URL
              alt: "Modern Canadian university campus with students and scenic background",
            },
          ],
        },
      };
      
      const destinationData = {
        country: "CANADA",
        images: [
          {
            url: hero1,  // Replace with actual image variable or URL
            alt: "Canadian university campus surrounded by nature and city skyline",
          },
          {
            url: hero2,  // Replace with actual image variable or URL
            alt: "A vibrant Canadian city with top-ranked universities and diverse academic programs",
          },
        ],
        description:
          "Canada is renowned for its commitment to quality education and is home to several of the world's top universities. Its institutions are recognized for their innovative research and diverse academic environments, making it a prime destination for international students. Canada offers a wealth of opportunities and a welcoming atmosphere for scholars worldwide.",
      };

      const studyInfo = {
        title: "Why Study in Canada?",
        description:
          "Study at some of the world’s most respected institutions where academic rigor meets a rich variety of degree programs. Canada's educational system offers innovative research opportunities and a broad mix of interdisciplinary and specialized programs, fostering a dynamic learning environment. Enjoy a multicultural and inclusive study experience, with degrees recognized globally, preparing you for a successful career in an increasingly connected world.",
        quickFacts: [
          "Canada is home to hundreds of thousands of international students.",
          "4 Canadian universities rank in the top 100 worldwide.",
          "Post-graduation work permits allow up to 3 years for gaining work experience.",
          "Co-op programs integrate study with full-time work placements.",
          "Availability of both merit-based and need-based scholarships.",
          "Over 200 higher education institutions to choose from.",
          "5 Canadian cities rank among the top 100 QS Best Student Cities 2023.",
          "Ample research and high post-study employment opportunities.",
        ],
      };
      
      
  return (
    <div>
               <Hero destination={destinationData} />
                           <WhyStudyIn studyInfo={studyInfo}/>
                           <Cost educationData={educationData}/>
                        <PopluarUniversities universities={universities} />
                        <PopularCourses Image1={Course2} Image2={Imp2} importantLinks={importantLinks} popularCourses={popularCourses} />
      
    </div>
  )
}

export default Canada2
