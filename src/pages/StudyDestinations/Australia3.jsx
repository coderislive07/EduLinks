import React from 'react'
import one from "../../assets/studyDestination/University3/3.1.svg"
import two from "../../assets/studyDestination/University3/3.2.svg"
import three from "../../assets/studyDestination/University3/3.3.svg"
import four from "../../assets/studyDestination/University3/3.4.svg"
import five from "../../assets/studyDestination/University3/3.5.svg"
import six from "../../assets/studyDestination/University3/3.6.svg"
import seven from "../../assets/studyDestination/University3/3.7.svg"
import eight from "../../assets/studyDestination/University3/3.8.svg"
import nine from "../../assets/studyDestination/University3/3.9.svg"
import ten from "../../assets/studyDestination/University3/3.10.svg"
import PopluarUniversities from "../../components/StudyDestination/PopularUniversities"
import Hero from "../../components/StudyDestination/Hero"
import Cost from "../../components/StudyDestination/Cost"
import PopularCourses from "../../components/StudyDestination/PopularCourses"
import Testimonals from '@/components/StudyDestination/Testimonals'
import WhyStudyIn from '@/components/StudyDestination/whyStudyIn'
import Imp3 from "@/assets/studyDestination/imp3.svg"
import Course3 from "@/assets/studyDestination/course3.svg"
import hero1 from "@/assets/studyDestination/hero3.1.svg"
import hero2 from "@/assets/studyDestination/hero3.2.svg"
import career3 from "@/assets/studyDestination/career3.svg"

export default function Australia() {
  const universities = [ 
    {
      name: "Australian National University",
      logoUrl: one,
      link:"/australia-topuniversity/australian-national-university"
    },
    {
      name: "University of Sydney",
      logoUrl: two,
      link:"/australia-topuniversity/university-of-sydney"
    },
    {
      name: "University of New South Wales",
      logoUrl: three,
      link:"/australia-topuniversity/university-of-new-south-wales"
    },
    {
      name: "University of Western Australia",
      logoUrl: four,
      link:"/australia-topuniversity/university-of-western-australia"
    },
    {
      name: "University of Technology Sydney",
      logoUrl: five,
            link:"/australia-topuniversity/australian-national-university"
    },
    {
      name: "University of Melbourne",
      logoUrl: six,
            link:"/australia-topuniversity/australian-national-university"
    },
    {
      name: "University of Queensland",
      logoUrl: seven,
            link:"/australia-topuniversity/australian-national-university"
    },
    {
      name: "Monash University",
      logoUrl: eight,
            link:"/australia-topuniversity/australian-national-university"
    },
    {
      name: "University of Adelaide",
      logoUrl: nine,
            link:"/australia-topuniversity/australian-national-university"
    },
    {
      name: "University of Canberra",
      logoUrl: ten,
            link:"/australia-topuniversity/australian-national-university"
    },
  ];

  const importantLinks = [
    { title: "MBA in Australia", href: "#" },
    { title: "Masters in Australia", href: "#" },
    { title: "Cost to study in Australia", href: "#" },
    { title: "Scholarship to study in Australia", href: "#" },
  ];
  
  const popularCourses = [
    { name: "Environmental Science", href: "#" },
    { name: "Business & Commerce", href: "#" },
    { name: "Information Technology & Cybersecurity", href: "#" },
    { name: "Engineering & Technology", href: "#" },
    { name: "Health Sciences & Public Health", href: "#" },
  ];
  
  const educationData = {
    country: "AUSTRALIA",
    costs: [
      {
        type: "Tuition Fees for one-year (Indicative)*",
        amount: 20000,
      },
      {
        type: "Living and Accommodation",
        amount: 10000,
      },
      {
        type: "Airfare from India to USA",
        amount: 800,
      },
      {
        type: "Visa Fees (Student Visa)",
        amount: 620,
      },
    ],
    totalExpenses: 32420,
    careerInsights: {
      title: "Careers & Industry Insights",
      description:
        "Australia stands as a beacon of technological advancement and economic growth within the Asia-Pacific region. Its dynamic economy is fueled by sectors such as Mining, Agriculture, Education, Tourism, and Technology. Key career opportunities for graduates in Australia include roles in Resource Management, Environmental Science, Agribusiness, and Information Technology. Australia's living standards are among the highest globally, with competitive wages, comprehensive healthcare, and a focus on environmental sustainability. This nation excels in providing a balanced lifestyle with ample opportunities for career advancement, making it a top choice for skilled professionals.",
      images: [
        {
          url: career3,  // Replace with actual image variable or URL
          alt: "Australian university campus with modern buildings and vibrant student life",
        },
      ],
    },
  };
  

  const destinationData = {
    country: "Australia",
    images: [
      {
        url: hero1,  // Replace with actual image variable or URL
        alt: "A picturesque Australian university campus surrounded by nature",
      },
      {
        url: hero2,  // Replace with actual image variable or URL
        alt: "Vibrant Australian city with multicultural atmosphere and academic institutions",
      },
    ],
    description:
      "Australia is a prominent player in global education, known for its innovative teaching methods and research-driven universities. It offers top-ranked institutions, recognized for strong programs in Environmental Science, Engineering, and Medicine. With a vibrant multicultural atmosphere and scenic landscapes, Australia enriches the experience for international students.",
  };
  
  const studyInfo = {
    title: "Why Study in Australia?",
    description:
      "Australia offers a high-calibre education system, renowned for its research and innovative teaching methodologies. Students can access advanced technology and a wide array of study options across diverse fields such as Environmental Sciences, Medicine, and Engineering. The education system is flexible, allowing students from around the world to find courses suited to their academic and career ambitions. Studying in Australia provides a unique blend of top-tier education and a high standard of living, which equips students with the skills necessary for success in the global workforce.",
    quickFacts: [
      "Australia hosts nearly 700,000 international students.",
      "7 of the world's top 100 universities are located in Australia.",
      "Post-study work rights extend up to 4 years based on qualification and location.",
      "Work up to 40 hours per fortnight during semesters.",
      "Numerous scholarships are available specifically for international students.",
      "Over 1,100 institutions offer a wide range of programs.",
      "Australian cities frequently rank among the best in the world for student livability.",
      "Excellent opportunities for research and development across various disciplines.",
    ],
  };
  
  return (
    <div>
      <Hero destination={destinationData} />
               <WhyStudyIn studyInfo={studyInfo}/>
               <Cost educationData={educationData}/>
            <PopluarUniversities universities={universities} />
            <PopularCourses Image1={Course3} Image2={Imp3} importantLinks={importantLinks} popularCourses={popularCourses} />
            <Testimonals/>
    </div>
  )
}
