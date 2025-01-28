

import architecture from "../../../assets/architecture.png"
import arts from "../../../assets/arts.png"
import physical from "../../../assets/physical.png"
import science from "../../../assets/science.png"
import commerce from "../../../assets/commerce.png"
import management from "../../../assets/management.png"

 const data={
  "university-of-toronto": {
    country: "Canada",
    university: "University of Toronto",
    heroImg: toronto,
    overview:
      "Established in 1827, the University of Toronto is a global leader in research and teaching, located in Toronto, Canada. Recognized for its commitment to innovative teaching and research, the University of Toronto offers a wide range of undergraduate and postgraduate programs across various disciplines, fostering a vibrant academic community.",
    fees: {
      tagline:
        "The University of Toronto is dedicated to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 32500",
          img: architecture,
        },
        {
          branch: "Art & Science",
          fees: "CAD 34000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 31000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 37,500​",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 39,500​",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 36500",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Toronto consistently ranks among the top universities globally, recognized for its strong emphasis on research and teaching quality. With over 90,000 students, including a substantial number of international students, the University of Toronto is a leader in higher education. According to QS World University Rankings 2024, it ranks #21 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, the University of Toronto is ranked #21 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Toronto 18th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Toronto is ranked 16th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 1st in Canada for Medicine, 2nd in Engineering, and 3rd in Computer Science.",
      "U.S. News and World Report: Ranked 2nd in Canada for Clinical Medicine and 1st in Psychology.",
    ],
    employmentRanking:
      "The University of Toronto ranks 21st in the QS Graduate Employability Ranking for 2022. Graduates benefit from strong job prospects, with an average starting salary of CAD 65,000.",
    admission:
      "The admission process at the University of Toronto is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "The University of Toronto accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Toronto include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Toronto, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 75% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "university-of-british-columbia": {
    country: "Canada",
    university: "University of British Columbia",
    heroImg: britishcolumbia,
    overview:
      "Founded in 1908, the University of British Columbia (UBC) is a prestigious public research university located in Vancouver and Kelowna, Canada. Known for its academic strength and diverse range of programs, UBC fosters a collaborative environment for students and researchers from around the globe, encouraging innovative thinking and real-world solutions.",
    fees: {
      tagline:
        "The University of British Columbia is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 35,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 37,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 32,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 40,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 42,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 39,000",
          img: management,
        },
      ],
    },
    ranking:
      "The University of British Columbia consistently ranks among the top universities globally, recognized for its academic excellence and research output. With a student body of over 65,000, including a large number of international students, UBC is a leader in education. According to QS World University Rankings 2024, it ranks #34 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, the University of British Columbia is ranked #34 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of British Columbia 40th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer:
          "The University of British Columbia is ranked 35th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 1st in Canada for Geography, 2nd in Environmental Sciences, and 3rd in Psychology.",
      "U.S. News and World Report: Ranked 2nd in Canada for Plant and Animal Science and 3rd in Environment/Ecology.",
    ],
    employmentRanking:
      "UBC ranks 41st in the QS Graduate Employability Ranking for 2022. Graduates enjoy strong job prospects, with an average starting salary of CAD 60,000.",
    admission:
      "The admission process at the University of British Columbia is competitive, focusing on academic achievement and personal attributes. This section outlines the university's admission requirements and application tips.",
    test: "UBC accepts standardized test scores like the SAT or ACT and may have additional requirements depending on the program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into UBC include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at UBC, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 80% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "mcgill-university": {
    country: "Canada",
    university: "McGill University",
    heroImg: mcgill,
    overview:
      "Founded in 1821, McGill University is a prestigious public research university located in Montreal, Canada. Renowned for its academic excellence and research contributions, McGill offers a wide range of undergraduate and postgraduate programs, fostering a vibrant academic community that encourages innovation and leadership.",
    fees: {
      tagline:
        "McGill University is dedicated to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 36,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 38,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 33,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 42,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 44,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 40,000",
          img: management,
        },
      ],
    },
    ranking:
      "McGill University consistently ranks among the top universities in Canada and globally, known for its research output and teaching quality. With over 40,000 students, including a significant number of international students, McGill is a leader in education. According to QS World University Rankings 2024, it ranks #30 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, McGill University is ranked #30 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks McGill University 46th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "McGill University is ranked 49th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 1st in Canada for Medicine, 2nd in Law, and 3rd in Engineering.",
      "U.S. News and World Report: Ranked 1st in Canada for Neuroscience and Behavior and 2nd in Psychiatry/Psychology.",
    ],
    employmentRanking:
      "McGill ranks 42nd in the QS Graduate Employability Ranking for 2022. Graduates benefit from strong job prospects, with an average starting salary of CAD 62,000.",
    admission:
      "The admission process at McGill University is competitive, emphasizing academic achievement and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "McGill University accepts standardized test scores like the SAT or ACT and may require additional assessments depending on the program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into McGill University include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at McGill University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 85% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "university-of-alberta": {
    country: "Canada",
    university: "University of Alberta",
    heroImg: alberta,
    overview:
      "Founded in 1908, the University of Alberta is a public research university located in Edmonton, Canada. Known for its excellence in research and teaching, the university offers a wide range of undergraduate and postgraduate programs across various disciplines, fostering a dynamic and innovative learning environment.",
    fees: {
      tagline:
        "The University of Alberta is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 31,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 33,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 29,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 38,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 40,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 37,000",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Alberta consistently ranks among the top universities globally, recognized for its research output and academic programs. With over 40,000 students, including a significant number of international students, the University of Alberta is a leader in higher education. According to QS World University Rankings 2024, it ranks #110 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, the University of Alberta is ranked #110 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Alberta 118th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Alberta is ranked 135th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 3rd in Canada for Nursing, 4th in Education, and 5th in Engineering.",
      "U.S. News and World Report: Ranked 4th in Canada for Environment/Ecology and 5th in Plant and Animal Science.",
    ],
    employmentRanking:
      "The University of Alberta ranks 87th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 58,000.",
    admission:
      "The admission process at the University of Alberta is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "The University of Alberta accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Alberta include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Alberta, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 70% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "university-of-montreal": {
    country: "Canada",
    university: "University of Montreal",
    heroImg: montreal,
    overview:
      "Founded in 1878, the University of Montreal is a French-language public research university located in Montreal, Canada. Known for its strong emphasis on research and innovation, the university offers a wide range of undergraduate and postgraduate programs across various disciplines, fostering a vibrant and diverse academic community.",
    fees: {
      tagline:
        "The University of Montreal is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 30,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 32,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 37,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 39,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 36,000",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Montreal consistently ranks among the top universities globally, recognized for its research output and academic programs. With over 67,000 students, including a significant number of international students, the University of Montreal is a leader in higher education. According to QS World University Rankings 2024, it ranks #116 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, the University of Montreal is ranked #116 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Montreal 88th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Montreal is ranked 140th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 2nd in Canada for Pharmacy & Pharmacology, 3rd in Linguistics, and 4th in Computer Science.",
      "U.S. News and World Report: Ranked 3rd in Canada for Microbiology and 4th in Molecular Biology and Genetics.",
    ],
    employmentRanking:
      "The University of Montreal ranks 151-160 in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 55,000.",
    admission:
      "The admission process at the University of Montreal is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "The University of Montreal accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Montreal include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English or French language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Montreal, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 75% or equivalent.",
        "French language proficiency (as most programs are taught in French).",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "mcmaster-university": {
    country: "Canada",
    university: "McMaster University",
    heroImg: mcmaster,
    overview:
      "Founded in 1887, McMaster University is a public research university located in Hamilton, Ontario, Canada. Known for its innovative approach to teaching and research, McMaster offers a wide range of undergraduate and postgraduate programs across various disciplines, fostering a collaborative and interdisciplinary learning environment.",
    fees: {
      tagline:
        "McMaster University is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 33,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 35,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 30,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 39,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 41,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 38,000",
          img: management,
        },
      ],
    },
    ranking:
      "McMaster University consistently ranks among the top universities globally, recognized for its research output and innovative teaching methods. With over 33,000 students, including a significant number of international students, McMaster is a leader in higher education. According to QS World University Rankings 2024, it ranks #152 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, McMaster University is ranked #152 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks McMaster University 85th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "McMaster University is ranked 133rd in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 2nd in Canada for Nursing, 4th in Medicine, and 5th in Engineering.",
      "U.S. News and World Report: Ranked 3rd in Canada for Clinical Medicine and 4th in Public Health.",
    ],
    employmentRanking:
      "McMaster ranks 81st in the QS Graduate Employability Ranking for 2022. Graduates enjoy strong job prospects, with an average starting salary of CAD 59,000.",
    admission:
      "The admission process at McMaster University is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "McMaster University accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into McMaster University include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at McMaster University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 80% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "university-of-waterloo": {
    country: "Canada",
    university: "University of Waterloo",
    heroImg: waterloo,
    overview:
      "Founded in 1957, the University of Waterloo is a public research university located in Waterloo, Ontario, Canada. Known for its strong focus on innovation, cooperative education, and entrepreneurship, Waterloo offers a wide range of undergraduate and postgraduate programs across various disciplines, fostering a culture of innovation and practical learning.",
    fees: {
      tagline:
        "The University of Waterloo is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 34,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 36,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 31,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 41,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 43,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 40,000",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Waterloo consistently ranks among the top universities globally, recognized for its research output and innovative programs. With over 40,000 students, including a significant number of international students, Waterloo is a leader in higher education. According to QS World University Rankings 2024, it ranks #154 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, the University of Waterloo is ranked #154 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Waterloo 201-250th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Waterloo is ranked 189th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 1st in Canada for Computer Science, 2nd in Mathematics, and 3rd in Engineering.",
      "U.S. News and World Report: Ranked 2nd in Canada for Computer Science and 3rd in Engineering.",
    ],
    employmentRanking:
      "The University of Waterloo ranks 25th in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of CAD 68,000.",
    admission:
      "The admission process at the University of Waterloo is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "The University of Waterloo accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Waterloo include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Waterloo, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 80% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "university-of-western-ontario": {
    country: "Canada",
    university: "University of Western Ontario",
    heroImg: westernontario,
    overview:
      "Founded in 1878, the University of Western Ontario, commonly referred to as Western University, is a public research university located in London, Ontario, Canada. Known for its beautiful campus and strong academic programs, Western offers a wide range of undergraduate and postgraduate programs across various disciplines, fostering a vibrant and diverse learning environment.",
    fees: {
      tagline:
        "The University of Western Ontario is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 33,500",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 35,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 30,500",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 40,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 42,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 39,000",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Western Ontario consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 30,000 students, including a significant number of international students, Western is a leader in higher education. According to QS World University Rankings 2024, it ranks #172 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, the University of Western Ontario is ranked #172 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Western Ontario 201-250th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Western Ontario is ranked 301st in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 4th in Canada for Psychology, 5th in Business & Management, and 6th in Medicine.",
      "U.S. News and World Report: Ranked 5th in Canada for Clinical Medicine and 6th in Biology and Biochemistry.",
    ],
    employmentRanking:
      "The University of Western Ontario ranks 121-130th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 57,000.",
    admission:
      "The admission process at the University of Western Ontario is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "The University of Western Ontario accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Western Ontario include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Western Ontario, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 80% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "queens-university": {
    country: "Canada",
    university: "Queen's University",
    heroImg: queens,
    overview:
      "Founded in 1841, Queen's University is a public research university located in Kingston, Ontario, Canada. Known for its rich history, strong academic reputation, and beautiful campus, Queen's offers a wide range of undergraduate and postgraduate programs across various disciplines, fostering a close-knit and collaborative learning environment.",
    fees: {
      tagline:
        "Queen's University is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 34,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 36,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 31,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 41,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 43,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 40,000",
          img: management,
        },
      ],
    },
    ranking:
      "Queen's University consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 24,000 students, including a significant number of international students, Queen's is a leader in higher education. According to QS World University Rankings 2024, it ranks #210 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, Queen's University is ranked #210 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Queen's University 251-300th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Queen's University is ranked 442nd in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 3rd in Canada for Mining Engineering, 5th in Nursing, and 6th in Law.",
      "U.S. News and World Report: Ranked 6th in Canada for Public Health and 7th in Psychology.",
    ],
    employmentRanking:
      "Queen's University ranks 101-110th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 58,000.",
    admission:
      "The admission process at Queen's University is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "Queen's University accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into Queen's University include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Queen's University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 80% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "university-of-calgary": {
    country: "Canada",
    university: "University of Calgary",
    heroImg: calgary,
    overview:
      "Founded in 1966, the University of Calgary is a public research university located in Calgary, Alberta, Canada. Known for its innovative approach to education and research, the University of Calgary offers a wide range of undergraduate and postgraduate programs across various disciplines, fostering a dynamic and entrepreneurial learning environment.",
    fees: {
      tagline:
        "The University of Calgary is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 32,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 34,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 29,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 39,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 41,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 38,000",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Calgary consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 33,000 students, including a significant number of international students, the University of Calgary is a leader in higher education. According to QS World University Rankings 2024, it ranks #242 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, the University of Calgary is ranked #242 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Calgary 201-250th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Calgary is ranked 186th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 3rd in Canada for Petroleum Engineering, 5th in Veterinary Science, and 7th in Environmental Sciences.",
      "U.S. News and World Report: Ranked 4th in Canada for Geosciences and 6th in Environment/Ecology.",
    ],
    employmentRanking:
      "The University of Calgary ranks 141-150th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 56,000.",
    admission:
      "The admission process at the University of Calgary is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "The University of Calgary accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Calgary include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Calgary, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 75% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "dalhousie-university": {
    country: "Canada",
    university: "Dalhousie University",
    heroImg: dalhousie,
    overview:
      "Founded in 1818, Dalhousie University is a public research university located in Halifax, Nova Scotia, Canada. Known for its strong academic programs and research initiatives, Dalhousie offers a wide range of undergraduate and postgraduate programs across various disciplines, fostering a collaborative and innovative learning environment.",
    fees: {
      tagline:
        "Dalhousie University is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 31,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 33,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 38,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 40,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 37,000",
          img: management,
        },
      ],
    },
    ranking:
      "Dalhousie University consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 20,000 students, including a significant number of international students, Dalhousie is a leader in higher education. According to QS World University Rankings 2024, it ranks #308 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, Dalhousie University is ranked #308 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Dalhousie University 251-300th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Dalhousie University is ranked 308th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 5th in Canada for Oceanography, 7th in Earth & Marine Sciences, and 8th in Pharmacy & Pharmacology.",
      "U.S. News and World Report: Ranked 5th in Canada for Environment/Ecology and 7th in Plant and Animal Science.",
    ],
    employmentRanking:
      "Dalhousie University ranks 301-500th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 54,000.",
    admission:
      "The admission process at Dalhousie University is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "Dalhousie University accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into Dalhousie University include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Dalhousie University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 75% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "university-of-ottawa": {
    country: "Canada",
    university: "University of Ottawa",
    heroImg: ottawa,
    overview:
      "Founded in 1848, the University of Ottawa is a bilingual public research university located in Ottawa, Ontario, Canada. Known for its strong programs in law, medicine, and social sciences, the University of Ottawa offers a wide range of undergraduate and postgraduate programs in both English and French, fostering a diverse and inclusive learning environment.",
    fees: {
      tagline:
        "The University of Ottawa is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 32,500",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 34,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 29,500",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 39,500",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 41,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 38,500",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Ottawa consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 40,000 students, including a significant number of international students, the University of Ottawa is a leader in higher education. According to QS World University Rankings 2024, it ranks #237 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, the University of Ottawa is ranked #237 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Ottawa 201-250th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Ottawa is ranked 192nd in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 4th in Canada for Law, 6th in Education, and 7th in Modern Languages.",
      "U.S. News and World Report: Ranked 5th in Canada for Clinical Medicine and 6th in Public Health.",
    ],
    employmentRanking:
      "The University of Ottawa ranks 301-500th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 57,000.",
    admission:
      "The admission process at the University of Ottawa is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "The University of Ottawa accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Ottawa include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English or French language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Ottawa, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 75% or equivalent.",
        "Proficiency in English or French, depending on the program of study.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "university-of-victoria": {
    country: "Canada",
    university: "University of Victoria",
    heroImg: victoria,
    overview:
      "Founded in 1963, the University of Victoria is a public research university located in Victoria, British Columbia, Canada. Known for its strong programs in environmental studies, ocean sciences, and fine arts, the University of Victoria offers a wide range of undergraduate and postgraduate programs, fostering a collaborative and innovative learning environment.",
    fees: {
      tagline:
        "The University of Victoria is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 31,500",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 33,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 28,500",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 38,500",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 40,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 37,500",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Victoria consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 22,000 students, including a significant number of international students, the University of Victoria is a leader in higher education. According to QS World University Rankings 2024, it ranks #334 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, the University of Victoria is ranked #334 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Victoria 301-350th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Victoria is ranked 308th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 6th in Canada for Earth & Marine Sciences, 7th in Environmental Sciences, and 8th in Physics & Astronomy.",
      "U.S. News and World Report: Ranked 6th in Canada for Environment/Ecology and 7th in Geosciences.",
    ],
    employmentRanking:
      "The University of Victoria ranks 301-500th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 55,000.",
    admission:
      "The admission process at the University of Victoria is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "The University of Victoria accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Victoria include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Victoria, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 75% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "simon-fraser-university": {
    country: "Canada",
    university: "Simon Fraser University",
    heroImg: simonfraser,
    overview:
      "Founded in 1965, Simon Fraser University is a public research university with campuses in Burnaby, Surrey, and Vancouver, British Columbia, Canada. Known for its innovative approach to education and strong programs in business, communication, and interactive arts and technology, Simon Fraser University offers a wide range of undergraduate and postgraduate programs, fostering a dynamic and interdisciplinary learning environment.",
    fees: {
      tagline:
        "Simon Fraser University is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 32,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 34,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 29,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 39,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 41,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 38,000",
          img: management,
        },
      ],
    },
    ranking:
      "Simon Fraser University consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 30,000 students, including a significant number of international students, Simon Fraser University is a leader in higher education. According to QS World University Rankings 2024, it ranks #298 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, Simon Fraser University is ranked #298 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Simon Fraser University 201-250th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Simon Fraser University is ranked 328th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 5th in Canada for Communication & Media Studies, 7th in Computer Science, and 8th in Business & Management.",
      "U.S. News and World Report: Ranked 7th in Canada for Computer Science and 8th in Mathematics.",
    ],
    employmentRanking:
      "Simon Fraser University ranks 301-500th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 56,000.",
    admission:
      "The admission process at Simon Fraser University is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "Simon Fraser University accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into Simon Fraser University include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Simon Fraser University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 75% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  "universite-laval": {
    country: "Canada",
    university: "Université Laval",
    heroImg: laval,
    overview:
      "Founded in 1852, Université Laval is a public research university located in Quebec City, Quebec, Canada. It is the oldest centre of higher education in Canada and was the first institution in North America to offer higher education in French. Known for its strong programs in social sciences, arts, and sciences, Université Laval offers a wide range of undergraduate and postgraduate programs, fostering a dynamic and multicultural learning environment.",
    fees: {
      tagline:
        "Université Laval is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 30,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 32,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 37,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 39,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 36,000",
          img: management,
        },
      ],
    },
    ranking:
      "Université Laval consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 43,000 students, including a significant number of international students, Université Laval is a leader in higher education. According to QS World University Rankings 2024, it ranks #451-460 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, Université Laval is ranked #451-460 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Université Laval 401-500th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Université Laval is ranked 291st in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 6th in Canada for Agriculture & Forestry, 8th in Law, and 9th in Linguistics.",
      "U.S. News and World Report: Ranked 6th in Canada for Agricultural Sciences and 9th in Plant and Animal Science.",
    ],
    employmentRanking:
      "Université Laval ranks 301-500th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 54,000.",
    admission:
      "The admission process at Université Laval is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "Université Laval accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into Université Laval include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English or French language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Université Laval, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 75% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },

"york-university": {
    country: "Canada",
    university: "York University",
    heroImg: york,
    overview:
      "Founded in 1959, York University is a public research university in Toronto, Ontario, Canada. It is Canada's third-largest university, known for its interdisciplinary approach to learning and research. York offers a wide range of undergraduate and graduate programs across various fields, including liberal arts, business, law, science, and fine arts.",
    fees: {
      tagline:
        "York University is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 33,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 35,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 30,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 40,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 42,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 39,000",
          img: management,
        },
      ],
    },
    ranking:
      "York University consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 55,000 students, including a significant number of international students, York University is a leader in higher education. According to QS World University Rankings 2024, it ranks #456 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, York University is ranked #456 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks York University 401-500th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "York University is ranked 439th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 7th in Canada for Social Policy & Administration, 8th in Development Studies, and 9th in Psychology.",
      "U.S. News and World Report: Ranked 8th in Canada for Psychology and 10th in Social Sciences and Public Health.",
    ],
    employmentRanking:
      "York University ranks 301-500th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 55,000.",
    admission:
      "The admission process at York University is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "York University accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into York University include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at York University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 75% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },

"university-of-saskatchewan": {
    country: "Canada",
    university: "University of Saskatchewan",
    heroImg: saskatchewan,
    overview:
      "Founded in 1907, the University of Saskatchewan is a public research university located in Saskatoon, Saskatchewan, Canada. Known for its strong programs in agriculture, engineering, and health sciences, the University of Saskatchewan offers a wide range of undergraduate and postgraduate programs, fostering a dynamic and innovative learning environment.",
    fees: {
      tagline:
        "The University of Saskatchewan is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 31,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 33,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 38,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 40,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 37,000",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Saskatchewan consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 25,000 students, including a significant number of international students, the University of Saskatchewan is a leader in higher education. According to QS World University Rankings 2024, it ranks #501-510 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, the University of Saskatchewan is ranked #501-510 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Saskatchewan 501-600th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Saskatchewan is ranked 473rd in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 6th in Canada for Agriculture & Forestry, 9th in Veterinary Science, and 10th in Environmental Sciences.",
      "U.S. News and World Report: Ranked 7th in Canada for Agricultural Sciences and 9th in Plant and Animal Science.",
    ],
    employmentRanking:
      "The University of Saskatchewan ranks 301-500th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 53,000.",
    admission:
      "The admission process at the University of Saskatchewan is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "The University of Saskatchewan accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Saskatchewan include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Saskatchewan, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 70% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },

"carleton-university": {
    country: "Canada",
    university: "Carleton University",
    heroImg: carleton,
    overview:
      "Founded in 1942, Carleton University is a public comprehensive university located in Ottawa, Ontario, Canada. Known for its strong programs in public affairs, engineering, and journalism, Carleton University offers a wide range of undergraduate and postgraduate programs, fostering a dynamic and innovative learning environment in Canada's capital city.",
    fees: {
      tagline:
        "Carleton University is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 32,500",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 34,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 29,500",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 39,500",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 41,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 38,500",
          img: management,
        },
      ],
    },
    ranking:
      "Carleton University consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 31,000 students, including a significant number of international students, Carleton University is a leader in higher education. According to QS World University Rankings 2024, it ranks #601-650 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, Carleton University is ranked #601-650 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Carleton University 601-800th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Carleton University is ranked 558th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 8th in Canada for Politics & International Studies, 9th in Communication & Media Studies, and 10th in Computer Science & Information Systems.",
      "U.S. News and World Report: Ranked 9th in Canada for Computer Science and 11th in Engineering.",
    ],
    employmentRanking:
      "Carleton University ranks 301-500th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 54,500.",
    admission:
      "The admission process at Carleton University isCAD 54,500.",
    admission:
      "The admission process at Carleton University is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "Carleton University accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into Carleton University include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Carleton University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 70% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },

"university-of-guelph": {
    country: "Canada",
    university: "University of Guelph",
    heroImg: guelph,
    overview:
      "Founded in 1964, the University of Guelph is a comprehensive public research university in Guelph, Ontario, Canada. Known for its strong programs in agriculture, veterinary medicine, and environmental sciences, the University of Guelph offers a wide range of undergraduate and postgraduate programs, fostering a dynamic and innovative learning environment.",
    fees: {
      tagline:
        "The University of Guelph is committed to providing high-quality education while ensuring accessibility. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 31,500",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 33,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 28,500",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 38,500",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 40,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 37,500",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Guelph consistently ranks among the top universities in Canada and globally, recognized for its research output and academic programs. With over 29,000 students, including a significant number of international students, the University of Guelph is a leader in higher education. According to QS World University Rankings 2024, it ranks #571-580 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, the University of Guelph is ranked #571-580 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Guelph 401-500th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Guelph is ranked 437th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 4th in Canada for Veterinary Science, 6th in Agriculture & Forestry, and 8th in Environmental Sciences.",
      "U.S. News and World Report: Ranked 5th in Canada for Agricultural Sciences and 7th in Plant and Animal Science.",
    ],
    employmentRanking:
      "The University of Guelph ranks 301-500th in the QS Graduate Employability Ranking for 2022. Graduates enjoy good job prospects, with an average starting salary of CAD 54,000.",
    admission:
      "The admission process at the University of Guelph is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "The University of Guelph accepts standardized test scores like the SAT or ACT, and specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Guelph include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "English language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Guelph, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 75% or equivalent.",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },

"universite-de-sherbrooke": {
    country: "Canada",
    university: "Université de Sherbrooke",
    heroImg: sherbrooke,
    overview:
      "Founded in 1954, Université de Sherbrooke is a distinguished public research university located in Sherbrooke, Quebec, Canada. Renowned for its innovative programs and research initiatives, Sherbrooke offers a variety of undergraduate and graduate programs across multiple faculties. The university fosters a vibrant academic community, attracting students and researchers dedicated to advancing knowledge and societal well-being.",
    fees: {
      tagline:
        "Université de Sherbrooke is committed to accessibility and provides various financial aid options. Below are the annual tuition fees for selected programs (all in CAD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "CAD 32,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "CAD 34,000",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "CAD 29,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "CAD 39,000",
          img: science,
        },
        {
          branch: "Commerce or Business Administration",
          fees: "CAD 41,000",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "CAD 38,000",
          img: management,
        },
      ],
    },
    ranking:
      "Université de Sherbrooke consistently ranks among the top universities in Canada, recognized for its research output and academic programs. With over 31,000 students, including a significant number of international students, Université de Sherbrooke is a leader in higher education. According to QS World University Rankings 2024, it ranks #701-750 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer:
          "According to the QS 2024 rankings, Université de Sherbrooke is ranked #701-750 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Université de Sherbrooke 601-800th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Université de Sherbrooke is ranked 775th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 9th in Canada for Environmental Sciences, 11th in Engineering & Technology, and 12th in Life Sciences & Medicine.",
      "U.S. News and World Report: Ranked 10th in Canada for Engineering and 12th in Biology and Biochemistry.",
    ],
    employmentRanking:
      "Université de Sherbrooke is known for its strong ties to industry and cooperative education programs. While not specifically ranked in the QS Graduate Employability Ranking, graduates enjoy good job prospects, with an average starting salary of approximately CAD 53,000.",
    admission:
      "The admission process at Université de Sherbrooke is competitive, focusing on academic performance and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "Université de Sherbrooke generally does not require standardized test scores like the SAT or ACT for admission, but specific requirements may vary by program.",
    evaluation:
      "The admissions team evaluates academic performance, personal statements, and recommendations, focusing on the applicant's fit for their chosen program.",
    tips: [
      "Start your application early and stay organized.",
      "Engage in advanced courses relevant to your intended major.",
      "Participate in extracurricular activities that demonstrate leadership.",
      "Write a personal statement reflecting your passion for your chosen field.",
      "Obtain strong letters of recommendation from teachers familiar with your work.",
    ],
    documents: {
      tag: "The documents required for admission into Université de Sherbrooke include:",
      req: [
        "Secondary school transcript",
        "Personal statement",
        "Two letters of recommendation (if applicable)",
        "French language proficiency test scores (if applicable)",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Université de Sherbrooke, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "A minimum average of 75% or equivalent.",
        "Proficiency in French (as most programs are taught in French).",
        "Some programs may have additional requirements, such as portfolios or interviews.",
      ],
    },
  },
  
}
export default data;

