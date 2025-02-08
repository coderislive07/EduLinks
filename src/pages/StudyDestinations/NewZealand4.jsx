import React from 'react'
import one from "../../assets/studyDestination/University4/4.1.svg"
import two from "../../assets/studyDestination/University4/4.2.svg"
import three from "../../assets/studyDestination/University4/4.3.svg"
import four from "../../assets/studyDestination/University4/4.4.svg"
import five from "../../assets/studyDestination/University4/4.5.svg"
import six from "../../assets/studyDestination/University4/4.6.svg"
import seven from "../../assets/studyDestination/University4/4.7.svg"
import eight from "../../assets/studyDestination/University4/4.8.svg"
import PopluarUniversities from "../../components/StudyDestination/PopularUniversities"
import Hero from "../../components/StudyDestination/Hero"
import Cost from "../../components/StudyDestination/Cost"
import PopularCourses from "../../components/StudyDestination/PopularCourses"
import Testimonals from '@/components/StudyDestination/Testimonals'
import WhyStudyIn from '@/components/StudyDestination/whyStudyIn'
import Imp4 from "@/assets/studyDestination/imp4.svg"
import Course4 from "@/assets/studyDestination/course4.svg"
import hero1 from "@/assets/studyDestination/hero4.1.svg"
import hero2 from "@/assets/studyDestination/hero4.2.svg"
import career4 from "@/assets/studyDestination/career4.svg"

function NewZealand4() {
    const universities = [ 
        {
          name: "University of Auckland",
          logoUrl: one,
        },
        {
          name: "Victoria University of Wellington",
          logoUrl: two,
        },
        {
          name: "Massey University",
          logoUrl: three,
        },
        {
          name: "Lincoln University",
          logoUrl: four,
        },
        {
          name: "University of Otago",
          logoUrl: five,
        },
        {
          name: "University of Canterbury",
          logoUrl: six,
        },
        {
          name: "University of Waikato",
          logoUrl: seven,
        },
        {
          name:"Auckland University of Technology",
          logoUrl : eight,
        }
      ];
      const importantLinks = [
        { title: "MBA in New Zealand", href: "#" },
        { title: "Masters in New Zealand", href: "#" },
        { title: "Cost to study in New Zealand", href: "#" },
        { title: "Scholarship to study in New Zealand", href: "#" },
      ];
      
      const popularCourses = [
        { name: "Environmental Science", href: "#" },
        { name: "Business & Management", href: "#" },
        { name: "Computer Science & Information Technology", href: "#" },
        { name: "Engineering & Technology", href: "#" },
        { name: "Health Sciences & Nursing", href: "#" },
      ];
      
      const educationData = {
        country: "New Zealand",
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
            type: "Visa Fees (Student Visa)",
            amount: 400,
          },
        ],
        totalExpenses: 33600,
        careerInsights: {
          title: "Careers & Industry Insights",
          description:
            "New Zealand is known for its high quality of life and a strong economy driven by various key sectors. Major industries include Agriculture, Tourism, Education, and Technology. New Zealand's economy is characterized by its innovation and global competitiveness. Top jobs for international students with high earning potential include Software Engineers, Accountants, Civil Engineers, Healthcare Professionals, and Marketing Managers. The standard of living in New Zealand is excellent, with high levels of well-being, safety, and environmental quality. The country offers a balanced lifestyle with a strong emphasis on work-life balance, making it an attractive destination for students and professionals alike.",
          images: [
            {
              url: career4,  // Replace with actual image variable or URL
              alt: "New Zealand university campus with scenic mountains and active student life",
            },
          ],
        },
      };
      
      const destinationData = {
        country: "NEW ZEALAND",
        images: [
          {
            url: hero1,  // Replace with actual image variable or URL
            alt: "Scenic New Zealand university campus with mountains in the background",
          },
          {
            url: hero2,  // Replace with actual image variable or URL
            alt: "Aerial view of a New Zealand city with stunning landscapes and academic buildings",
          },
        ],
        description:
          "New Zealand is renowned for its excellent education system and stunning landscapes, offering a unique backdrop for academic growth. Its universities rank high globally and excel in Environmental Science, Agriculture, and Engineering. New Zealand prepares students with critical skills for the global market in a supportive, community-focused environment.",
      };
      const studyInfo = {
        title: "Why Study in New Zealand?",
        description:
          "Study in New Zealand and experience one of the most innovative and learning-centered education systems in the world. This nation offers access to cutting-edge research facilities and a wide range of study options across various disciplines, fostering an engaging and cooperative educational environment. New Zealand's universities are known for their approachability and high standards, offering qualifications that are well-regarded globally. Enjoy a flexible education system that caters to your academic and career aspirations in a country renowned for its beautiful landscapes and high quality of life.",
        quickFacts: [
          "New Zealand hosts tens of thousands of international students each year.",
          "Several of New Zealand's universities rank in the top 3% globally.",
          "New Zealand has 8 universities offering diverse subjects.",
          "Extensive scholarships available for international students.",
          "Outstanding research in agriculture and geology.",
          "Internship and part-time work opportunities.",
          "Post-study work visas available for up to 3 years, encouraging in-country employment after graduation.",
        ],
      };
      
  return (
    <div>
         <Hero destination={destinationData} />
                     <WhyStudyIn studyInfo={studyInfo}/>
                     <Cost educationData={educationData}/>
                  <PopluarUniversities universities={universities} />
                  <PopularCourses Image1={Course4} Image2={Imp4} importantLinks={importantLinks} popularCourses={popularCourses} />
                              <Testimonals/>
                  
    </div>
  )
}

export default NewZealand4
