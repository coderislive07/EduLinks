import anUniversity from "../../../assets/top universities/USA/10001.png"
import melbourneUni from "../../../assets/top universities/USA/10002.png"
import sydneyUni from "../../../assets/top universities/USA/10003.png"
import queenslandUni from "../../../assets/top universities/USA/10004.png"
import nswUni from "../../../assets/top universities/USA/10005.png"
import monashUni from "../../../assets/top universities/USA/10006.png"
import westernAusUni from "../../../assets/top universities/USA/10007.png"
import adelaideUni from "../../../assets/top universities/USA/10008.png"
import utsUni from "../../../assets/top universities/USA/10009.png"
import canberraUni from "../../../assets/top universities/USA/10010.png"
import macquarieUni from "../../../assets/top universities/USA/10011.png"
import qutUni from "../../../assets/top universities/USA/10012.png"
import rmitUni from "../../../assets/top universities/USA/10013.png"
import wollongongUni from "../../../assets/top universities/USA/10014.png"
import curtinUni from "../../../assets/top universities/USA/10015.png"
import deakinUni from "../../../assets/top universities/USA/10016.png"
import newcastleUni from "../../../assets/top universities/USA/10017.png"
import griffithUni from "../../../assets/top universities/USA/10018.png"
import laTrobeUni from "../../../assets/top universities/USA/10019.png"
import tasmaniaUni from "../../../assets/top universities/USA/10020.png"
import backgroundimg from "../../../assets/Ellipse-10.png"

import architecture from "../../../assets/architecture.png";
import arts from "../../../assets/arts.png";
import physical from "../../../assets/physical.png";
import science from "../../../assets/science.png";
import commerce from "../../../assets/commerce.png";
import management from "../../../assets/management.png";

const data = {
  "harvard-university": {
    country: "United States",
    university: "Harvard University",
    heroImg: anUniversity,
    overview:
      "Founded in 1636, Harvard University is one of the oldest and most prestigious universities in the United States. Located in Cambridge, Massachusetts, Harvard offers a wide range of undergraduate and graduate programs across various disciplines. Known for its academic excellence and research contributions, Harvard fosters a vibrant intellectual community.",
    fees: {
      tagline:
        "Harvard University is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "Harvard University consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #5 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, Harvard University is ranked #5 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Harvard University 2nd in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Harvard University is ranked 1st in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 1st in Life Sciences & Medicine, 1st in Arts & Humanities, and 2nd in Social Sciences & Management.",
      "U.S. News and World Report: Ranked 1st in Economics and Business and 1st in Biology and Biochemistry.",
    ],
    employmentRanking:
      "Harvard ranks 3rd in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $70,000.",
    admission:
      "The admission process at Harvard University is highly competitive, focusing on academic excellence and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "Harvard requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential and fit for Harvard.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities and leadership roles.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into Harvard University include:",
      req: [
        "Common Application or Coalition Application",
        "Harvard College Questions for the Common Application or Coalition Application",
        "High school transcript",
        "Two teacher evaluations",
        "Secondary School Report",
        "Mid-Year School Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Harvard University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "stanford-university": {
    country: "United States",
    university: "Stanford University",
    heroImg: melbourneUni,
    overview:
      "Founded in 1885, Stanford University is a world-renowned private research university located in Stanford, California. Known for its entrepreneurial spirit and strong ties to Silicon Valley, Stanford offers a wide range of undergraduate and graduate programs across various disciplines, fostering innovation and interdisciplinary collaboration.",
    fees: {
      tagline:
        "Stanford University is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "Stanford University consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #3 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, Stanford University is ranked #3 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Stanford University 3rd in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Stanford University is ranked 3rd in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 1st in Engineering & Technology, 2nd in Natural Sciences, and 3rd in Social Sciences & Management.",
      "U.S. News and World Report: Ranked 1st in Computer Science and 2nd in Engineering.",
    ],
    employmentRanking:
      "Stanford ranks 1st in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $75,000.",
    admission:
      "The admission process at Stanford University is highly competitive, focusing on academic excellence, innovation, and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "Stanford requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential for innovation and leadership.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities, especially those demonstrating leadership and innovation.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who can speak to your abilities and potential.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into Stanford University include:",
      req: [
        "Common Application or Coalition Application",
        "Stanford Questions",
        "High school transcript",
        "Two teacher evaluations",
        "School Report",
        "Mid-Year Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Stanford University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership, innovation, and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "massachusetts-institute-of-technology": {
    country: "United States",
    university: "Massachusetts Institute of Technology",
    heroImg: sydneyUni,
    overview:
      "Founded in 1861, the Massachusetts Institute of Technology (MIT) is a world-leading private research university located in Cambridge, Massachusetts. Renowned for its focus on science, technology, engineering, and mathematics (STEM), MIT offers a wide range of undergraduate and graduate programs, fostering innovation and interdisciplinary collaboration.",
    fees: {
      tagline:
        "MIT is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "MIT consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #1 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, MIT is ranked #1 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks MIT 4th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "MIT is ranked 2nd in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 1st in Engineering & Technology, 1st in Natural Sciences, and 2nd in Computer Science.",
      "U.S. News and World Report: Ranked 1st in Engineering and 1st in Computer Science.",
    ],
    employmentRanking:
      "MIT ranks 2nd in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $80,000.",
    admission:
      "The admission process at MIT is highly competitive, focusing on academic excellence, innovation, and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "MIT requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential for innovation and problem-solving.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses, especially in STEM fields, and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities, especially those demonstrating innovation and problem-solving skills.",
      "Write compelling essays that reflect your passion for science and technology.",
      "Obtain strong letters of recommendation from teachers who can speak to your abilities in STEM fields.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into MIT include:",
      req: [
        "MIT Application",
        "High school transcript",
        "Two teacher evaluations",
        "Secondary School Report",
        "Mid-Year Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at MIT, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework, especially in STEM fields.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated passion for science, technology, and innovation.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "california-institute-of-technology": {
    country: "United States",
    university: "California Institute of Technology",
    heroImg: queenslandUni,
    overview:
      "Founded in 1891, the California Institute of Technology (Caltech) is a world-renowned private research university located in Pasadena, California. Known for its strong focus on science and engineering, Caltech offers rigorous undergraduate and graduate programs, fostering groundbreaking research and innovation.",
    fees: {
      tagline:
        "Caltech is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "Caltech consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #6 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, Caltech is ranked #6 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Caltech 5th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Caltech is ranked 6th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 3rd in Engineering & Technology, 2nd in Natural Sciences, and 5th in Physical Sciences.",
      "U.S. News and World Report: Ranked 1st in Space Science and 2nd in Physics.",
    ],
    employmentRanking:
      "Caltech ranks 16th in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $84,000.",
    admission:
      "The admission process at Caltech is highly competitive, focusing on academic excellence in STEM fields and research potential. This section outlines the university's admission requirements and application tips.",
    test: "Caltech requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE.",
    evaluation:
      "The admissions team evaluates academic performance, research experience, essays, and recommendations, focusing on the applicant's potential for scientific innovation and research.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses, especially in STEM fields, and maintain an exceptional academic record.",
      "Engage in research projects or internships related to your field of interest.",
      "Write compelling essays that demonstrate your passion for science and research.",
      "Obtain strong letters of recommendation from teachers or mentors who can speak to your abilities in STEM fields.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into Caltech include:",
      req: [
        "Common Application or Coalition Application",
        "Caltech Questions",
        "High school transcript",
        "Two teacher evaluations (one in STEM, one in humanities)",
        "Secondary School Report",
        "Mid-Year Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Caltech, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Exceptional academic record with advanced coursework in mathematics and sciences.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated passion for scientific research and innovation.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "university-of-chicago": {
    country: "United States",
    university: "University of Chicago",
    heroImg: nswUni,
    overview:
      "Founded in 1890, the University of Chicago is a private research university located in Chicago, Illinois. Known for its rigorous academic programs and emphasis on critical thinking, UChicago offers a wide range of undergraduate and graduate programs across various disciplines, fostering intellectual curiosity and interdisciplinary research.",
    fees: {
      tagline:
        "The University of Chicago is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
     uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Chicago consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #10 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, University of Chicago is ranked #10 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks University of Chicago 9th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "University of Chicago is ranked 16th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 2nd in Economics, 4th in Philosophy, and 7th in Social Sciences & Management.",
      "U.S. News and World Report: Ranked 1st in Economics and Business and 3rd in Mathematics.",
    ],
    employmentRanking:
      "UChicago ranks 21st in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $68,000.",
    admission:
      "The admission process at the University of Chicago is highly competitive, focusing on academic excellence, intellectual curiosity, and critical thinking skills. This section outlines the university's admission requirements and application tips.",
    test: "UChicago requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's intellectual potential and fit for UChicago's rigorous academic environment.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in activities that demonstrate intellectual curiosity and critical thinking.",
      "Write compelling essays that showcase your unique perspectives and ideas.",
      "Obtain strong letters of recommendation from teachers who can speak to your intellectual abilities.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Chicago include:",
      req: [
        "Common Application, Coalition Application, or UChicago's own application",
        "UChicago Supplement",
        "High school transcript",
        "Two teacher evaluations",
        "Secondary School Report",
        "Mid-Year Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Chicago, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated intellectual curiosity and critical thinking skills.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "princeton-university": {
    country: "United States",
    university: "Princeton University",
    heroImg: monashUni,
    overview:
      "Founded in 1746, Princeton University is a private Ivy League research university located in Princeton, New Jersey. Known for its commitment to undergraduate education and world-class research, Princeton offers a wide range of programs across the humanities, social sciences, natural sciences, and engineering.",
    fees: {
      tagline:
        "Princeton University is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "Princeton University consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #16 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, Princeton University is ranked #16 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Princeton University 7th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Princeton University is ranked 9th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 1st in Mathematics, 4th in Physics & Astronomy, and 5th in Economics & Econometrics.",
      "U.S. News and World Report: Ranked 1st in Mathematics and 2nd in Physics.",
    ],
    employmentRanking:
      "Princeton ranks 9th in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $72,000.",
    admission:
      "The admission process at Princeton University is highly competitive, focusing on academic excellence, leadership potential, and personal qualities. This section outlines the university's admission requirements and application tips.",
    test: "Princeton requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential for academic and personal growth.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities that demonstrate leadership and impact.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into Princeton University include:",
      req: [
        "Common Application or Coalition Application",
        "Princeton Supplement",
        "High school transcript",
        "School Report",
        "Two teacher recommendations",
        "Mid-Year Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Princeton University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "columbia-university": {
    country: "United States",
    university: "Columbia University",
    heroImg: westernAusUni,
    overview:
      "Founded in 1754, Columbia University is a private Ivy League research university located in New York City. Known for its diverse and international student body, Columbia offers a wide range of undergraduate and graduate programs across various disciplines, fostering intellectual curiosity and global perspectives.",
    fees: {
      tagline:
        "Columbia University is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "Columbia University consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #22 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, Columbia University is ranked #22 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Columbia University 11th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Columbia University is ranked 6th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 5th in English Language & Literature, 7th in History, and 8th in Economics & Econometrics.",
      "U.S. News and World Report: Ranked 2nd in Public Health and 3rd in Psychiatry/Psychology.",
    ],
    employmentRanking:
      "Columbia ranks 16th in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $70,000.",
    admission:
      "The admission process at Columbia University is highly competitive, focusing on academic excellence, intellectual curiosity, and diverse perspectives. This section outlines the university's admission requirements and application tips.",
    test: "Columbia requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential for intellectual growth and contribution to the Columbia community.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities that demonstrate leadership and global awareness.",
      "Write compelling essays that reflect your unique experiences and perspectives.",
      "Obtain strong letters of recommendation from teachers who can speak to your intellectual abilities.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into Columbia University include:",
      req: [
        "Common Application or Coalition Application",
        "Columbia-Specific Application Questions",
        "High school transcript",
        "School Report",
        "Two teacher recommendations",
        "Mid-Year Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Columbia University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated intellectual curiosity and diverse interests.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "university-of-pennsylvania": {
    country: "United States",
    university: "University of Pennsylvania",
    heroImg: adelaideUni,
    overview:
      "Founded in 1740, the University of Pennsylvania is a private Ivy League research university located in Philadelphia, Pennsylvania. Known for its interdisciplinary approach and strong focus on innovation, Penn offers a wide range of undergraduate and graduate programs across various fields, fostering a culture of academic excellence and practical application.",
    fees: {
      tagline:
        "The University of Pennsylvania is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Pennsylvania consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #13 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, University of Pennsylvania is ranked #13 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks University of Pennsylvania 14th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "University of Pennsylvania is ranked 13th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 1st in Nursing, 3rd in Business & Management Studies, and 6th in Medicine.",
      "U.S. News and World Report: Ranked 1st in Finance and 2nd in Management.",
    ],
    employmentRanking:
      "Penn ranks 8th in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $72,000.",
    admission:
      "The admission process at the University of Pennsylvania is highly competitive, focusing on academic excellence, leadership potential, and diverse perspectives. This section outlines the university's admission requirements and application tips.",
    test: "Penn requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential for intellectual growth and contribution to the Penn community.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities that demonstrate leadership and impact.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Pennsylvania include:",
      req: [
        "Common Application or Coalition Application",
        "Penn-Specific Essays",
        "High school transcript",
        "School Report",
        "Two teacher recommendations",
        "Mid-Year Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Pennsylvania, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "yale-university": {
    country: "United States",
    university: "Yale University",
    heroImg: utsUni,
    overview:
      "Founded in 1701, Yale University is a private Ivy League research university located in New Haven, Connecticut. Known for its liberal arts curriculum and strong emphasis on undergraduate education, Yale offers a wide range of programs across various disciplines, fostering intellectual growth and leadership development.",
    fees: {
      tagline:
        "Yale University is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "Yale University consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #18 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, Yale University is ranked #18 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Yale University 9th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Yale University is ranked 11th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 3rd in Law, 5th in Arts & Humanities, and 7th in Social Sciences & Management.",
      "U.S. News and World Report: Ranked 1st in Law and 3rd in Economics and Business.",
    ],
    employmentRanking:
      "Yale ranks 12th in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $70,000.",
    admission:
      "The admission process at Yale University is highly competitive, focusing on academic excellence, leadership potential, and diverse perspectives. This section outlines the university's admission requirements and application tips.",
    test: "Yale requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential for intellectual growth and contribution to the Yale community.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities that demonstrate leadership and impact.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into Yale University include:",
      req: [
        "Common Application, Coalition Application, or QuestBridge Application",
        "Yale-Specific Questions",
        "High school transcript",
        "School Report",
        "Two teacher recommendations",
        "Mid-Year Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Yale University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "university-of-california-berkeley": {
    country: "United States",
    university: "University of California, Berkeley",
    heroImg: canberraUni,
    overview:
      "Founded in 1868, the University of California, Berkeley is a public research university located in Berkeley, California. Known for its academic excellence and pioneering research, Berkeley offers a wide range of undergraduate and graduate programs across various disciplines, fostering innovation and social responsibility.",
    fees: {
      tagline:
        "UC Berkeley is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "UC Berkeley consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #15 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, UC Berkeley is ranked #15 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks UC Berkeley 8th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "UC Berkeley is ranked 4th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 1st in Environmental Sciences, 3rd in Computer Science, and 4th in Engineering & Technology.",
      "U.S. News and World Report: Ranked 1st in Chemistry and 2nd in Economics and Business.",
    ],
    employmentRanking:
      "Berkeley ranks 4th in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $72,000.",
    admission:
      "The admission process at UC Berkeley is highly competitive, focusing on academic excellence, leadership potential, and diverse perspectives. This section outlines the university's admission requirements and application tips.",
    test: "Berkeley requires standardized test scores such as the SAT or ACT for undergraduate admissions. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, personal insight questions, and recommendations, focusing on the applicant's potential for intellectual growth and contribution to the Berkeley community.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities that demonstrate leadership and impact.",
      "Write compelling personal insight questions that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into UC Berkeley include:",
      req: [
        "UC Application",
        "High school transcript",
        "Standardized test scores (SAT or ACT)",
        "Personal insight questions",
        "Additional requirements for specific majors or programs",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at UC Berkeley, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "university-of-california-los-angeles": {
    country: "United States",
    university: "University of California, Los Angeles",
    heroImg: macquarieUni,
    overview:
      "Founded in 1919, the University of California, Los Angeles (UCLA) is a public research university located in Los Angeles, California. Known for its academic excellence, diverse student body, and strong research programs, UCLA offers a wide range of undergraduate and graduate programs across various disciplines, fostering innovation and creativity.",
    fees: {
      tagline:
        "UCLA is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
    uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "UCLA consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #33 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, UCLA is ranked #33 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks UCLA 20th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "UCLA is ranked 14th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 5th in Performing Arts, 7th in Psychology, and 9th in Life Sciences & Medicine.",
      "U.S. News and World Report: Ranked 1st in Clinical Psychology and 3rd in Psychiatry/Psychology.",
    ],
    employmentRanking:
      "UCLA ranks 13th in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $68,000.",
    admission:
      "The admission process at UCLA is highly competitive, focusing on academic excellence, leadership potential, and diverse perspectives. This section outlines the university's admission requirements and application tips.",
    test: "UCLA requires standardized test scores such as the SAT or ACT for undergraduate admissions. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, personal insight questions, and recommendations, focusing on the applicant's potential for intellectual growth and contribution to the UCLA community.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities that demonstrate leadership and impact.",
      "Write compelling personal insight questions that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into UCLA include:",
      req: [
        "UC Application",
        "High school transcript",
        "Standardized test scores (SAT or ACT)",
        "Personal insight questions",
        "Additional requirements for specific majors or programs",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at UCLA, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "university-of-michigan-ann-arbor": {
    country: "United States",
    university: "University of Michigan, Ann Arbor",
    heroImg: qutUni,
    overview:
      "Founded in 1817, the University of Michigan is a public research university located in Ann Arbor, Michigan. Known for its comprehensive academic programs and strong research focus, UMich offers a wide range of undergraduate and graduate programs across various disciplines, fostering innovation and interdisciplinary collaboration.",
    fees: {
      tagline:
        "The University of Michigan is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
   uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "The University of Michigan consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #25 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, University of Michigan is ranked #25 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks University of Michigan 23rd in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "University of Michigan is ranked 17th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 5th in Library & Information Management, 8th in Nursing, and 10th in Psychology.",
      "U.S. News and World Report: Ranked 1st in Social Sciences and Public Health and 2nd in Clinical Medicine.",
    ],
    employmentRanking:
      "UMich ranks 15th in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $65,000.",
    admission:
      "The admission process at the University of Michigan is highly competitive, focusing on academic excellence, leadership potential, and diverse perspectives. This section outlines the university's admission requirements and application tips.",
    test: "UMich requires standardized test scores such as the SAT or ACT for undergraduate admissions. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential for intellectual growth and contribution to the UMich community.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities that demonstrate leadership and impact.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Michigan include:",
      req: [
        "Common Application or Coalition Application",
        "High school transcript",
        "School Report",
        "One teacher evaluation",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Michigan, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "johns-hopkins-university": {
    country: "United States",
    university: "Johns Hopkins University",
    heroImg: rmitUni,
    overview:
      "Founded in 1876, Johns Hopkins University is a private research university located in Baltimore, Maryland. Known for its strong emphasis on research and innovation, particularly in medicine and public health, Johns Hopkins offers a wide range of undergraduate and graduate programs across various disciplines, fostering interdisciplinary collaboration and discovery.",
    fees: {
      tagline:
        "Johns Hopkins University is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "Johns Hopkins University consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #24 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, Johns Hopkins University is ranked #24 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Johns Hopkins University 13th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Johns Hopkins University is ranked 10th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 1st in Nursing, 2nd in Public Health, and 6th in Medicine.",
      "U.S. News and World Report: Ranked 1st in Public Health and 2nd in Immunology.",
    ],
    employmentRanking:
      "Johns Hopkins ranks 37th in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $68,000.",
    admission:
      "The admission process at Johns Hopkins University is highly competitive, focusing on academic excellence, research potential, and diverse perspectives. This section outlines the university's admission requirements and application tips.",
    test: "Johns Hopkins requires standardized test scores such as the SAT or ACT for undergraduate admissions. Some graduate programs may require additional tests like the GRE or MCAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential for intellectual growth and contribution to the Johns Hopkins community.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful research or extracurricular activities that demonstrate your passion and potential.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who can speak to your academic abilities and potential.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into Johns Hopkins University include:",
      req: [
        "Common Application or Coalition Application",
        "Johns Hopkins supplement",
        "High school transcript",
        "School Report",
        "Two teacher evaluations",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Johns Hopkins University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated research interest or extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "northwestern-university": {
    country: "United States",
    university: "Northwestern University",
    heroImg: wollongongUni,
    overview:
      "Founded in 1851, Northwestern University is a private research university located in Evanston, Illinois, with additional campuses in Chicago and Qatar. Known for its strong academic programs, interdisciplinary approach, and vibrant campus life, Northwestern offers a wide range of undergraduate and graduate programs across various disciplines, fostering innovation and creativity.",
    fees: {
      tagline:
        "Northwestern University is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Architectural Studies",
          fees: "£29,000",
          img: architecture,
        },
        {
          branch: "Arts & Science",
          fees: "£31,500",
          img: arts,
        },
        {
          branch: "Kinesiology & Physical Education",
          fees: "£28,000",
          img: physical,
        },
        {
          branch: "Applied Science & Engineering",
          fees: "£35,500",
          img: science,
        },
        {
          branch: "Business Administration",
          fees: "£37,500",
          img: commerce,
        },
        {
          branch: "Management",
          fees: "£34,000",
          img: management,
        },
      ],
    },
    ranking:
      "Northwestern University consistently ranks among the top universities globally. According to QS World University Rankings 2024, it ranks #32 globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, Northwestern University is ranked #32 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Northwestern University 24th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Northwestern University is ranked 24th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked 3rd in Communication & Media Studies, 9th in Economics, and 12th in Psychology.",
      "U.S. News and World Report: Ranked 1st in Marketing and 3rd in Chemistry.",
    ],
    employmentRanking:
      "Northwestern ranks 31st in the QS Graduate Employability Ranking for 2022. Graduates enjoy excellent job prospects, with an average starting salary of $68,000.",
    admission:
      "The admission process at Northwestern University is highly competitive, focusing on academic excellence, leadership potential, and diverse perspectives. This section outlines the university's admission requirements and application tips.",
    test: "Northwestern requires standardized test scores such as the SAT or ACT for undergraduate admissions. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential for intellectual growth and contribution to the Northwestern community.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities that demonstrate leadership and impact.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into Northwestern University include:",
      req: [
        "Common Application or Coalition Application",
        "Northwestern Writing Supplement",
        "High school transcript",
        "School Report",
        "Two teacher evaluations",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Northwestern University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "duke-university": {
    country: "United States",
    university: "Duke University",
    heroImg: curtinUni,
    overview:
      "Duke University, founded in 1838, is a private research university located in Durham, North Carolina. Known for its academic excellence and beautiful campus, Duke offers a wide range of undergraduate and graduate programs across various disciplines.",
    fees: {
      tagline:
        "Duke University is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Arts & Sciences",
          fees: "$60,000",
          img: arts,
        },
        {
          branch: "Engineering",
          fees: "$62,000",
          img: science,
        },
        {
          branch: "Nursing",
          fees: "$58,000",
          img: physical,
        },
        {
          branch: "Business",
          fees: "$65,000",
          img: commerce,
        },
        {
          branch: "Public Policy",
          fees: "$61,000",
          img: management,
        },
        {
          branch: "Law",
          fees: "$68,000",
          img: architecture,
        },
      ],
    },
    ranking:
      "Duke University consistently ranks among the top universities in the United States and globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, Duke University is ranked #24 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Duke University 18th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Duke University is ranked 22nd in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked highly in Medicine, Engineering, and Social Sciences.",
      "U.S. News and World Report: Ranked highly in various subjects including Clinical Medicine and Economics.",
    ],
    employmentRanking:
      "Duke ranks highly in graduate employability. Graduates enjoy excellent job prospects, with competitive starting salaries.",
    admission:
      "The admission process at Duke University is highly selective, focusing on academic excellence and personal qualities.",
    test: "Duke requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential and fit for Duke.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities and leadership roles.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into Duke University include:",
      req: [
        "Common Application or Coalition Application",
        "Duke Supplement",
        "High school transcript",
        "Two teacher evaluations",
        "School Report",
        "Mid-Year School Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Duke University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "cornell-university": {
    country: "United States",
    university: "Cornell University",
    heroImg: deakinUni,
    overview:
      "Cornell University, founded in 1865, is a private Ivy League research university located in Ithaca, New York. Known for its diverse colleges and schools, Cornell offers a wide range of undergraduate and graduate programs across various disciplines.",
    fees: {
      tagline:
        "Cornell University is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Arts & Sciences",
          fees: "$59,000",
          img: arts,
        },
        {
          branch: "Engineering",
          fees: "$61,000",
          img: science,
        },
        {
          branch: "Agriculture & Life Sciences",
          fees: "$57,000",
          img: physical,
        },
        {
          branch: "Business",
          fees: "$64,000",
          img: commerce,
        },
        {
          branch: "Human Ecology",
          fees: "$58,000",
          img: management,
        },
        {
          branch: "Architecture, Art & Planning",
          fees: "$60,000",
          img: architecture,
        },
      ],
    },
    ranking:
      "Cornell University consistently ranks among the top universities in the United States and globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, Cornell University is ranked #20 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Cornell University 22nd in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Cornell University is ranked 22nd in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked highly in Agriculture & Forestry, Hospitality & Leisure Management, and Engineering & Technology.",
      "U.S. News and World Report: Ranked highly in various subjects including Engineering and Computer Science.",
    ],
    employmentRanking:
      "Cornell ranks highly in graduate employability. Graduates enjoy excellent job prospects, with competitive starting salaries.",
    admission:
      "The admission process at Cornell University is highly selective, focusing on academic excellence and personal qualities.",
    test: "Cornell requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential and fit for Cornell.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities and leadership roles.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into Cornell University include:",
      req: [
        "Common Application or Coalition Application",
        "Cornell Questions and Writing Supplement",
        "High school transcript",
        "Two teacher evaluations",
        "School Report",
        "Mid-Year School Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Cornell University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "new-york-university": {
    country: "United States",
    university: "New York University",
    heroImg: newcastleUni,
    overview:
      "New York University (NYU), founded in 1831, is a private research university based in New York City. Known for its diverse student body and global presence, NYU offers a wide range of undergraduate and graduate programs across various disciplines.",
    fees: {
      tagline:
        "New York University is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Arts & Science",
          fees: "$54,000",
          img: arts,
        },
        {
          branch: "Engineering",
          fees: "$56,000",
          img: science,
        },
        {
          branch: "Nursing",
          fees: "$52,000",
          img: physical,
        },
        {
          branch: "Business",
          fees: "$58,000",
          img: commerce,
        },
        {
          branch: "Education",
          fees: "$53,000",
          img: management,
        },
        {
          branch: "Tisch School of the Arts",
          fees: "$60,000",
          img: architecture,
        },
      ],
    },
    ranking:
      "New York University consistently ranks among the top universities in the United States and globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, New York University is ranked #39 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks New York University 24th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "New York University is ranked 30th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked highly in Performing Arts, Philosophy, and Social Sciences & Management.",
      "U.S. News and World Report: Ranked highly in various subjects including Mathematics and Economics.",
    ],
    employmentRanking:
      "NYU ranks highly in graduate employability. Graduates enjoy excellent job prospects, with competitive starting salaries.",
    admission:
      "The admission process at New York University is highly selective, focusing on academic excellence and personal qualities.",
    test: "NYU requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential and fit for NYU.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities and leadership roles.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into New York University include:",
      req: [
        "Common Application",
        "NYU Supplement",
        "High school transcript",
        "One teacher evaluation",
        "School Report",
        "Mid-Year School Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at New York University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "university-of-southern-california": {
    country: "United States",
    university: "University of Southern California",
    heroImg: griffithUni,
    overview:
      "The University of Southern California (USC), founded in 1880, is a private research university located in Los Angeles, California. Known for its strong academic programs and vibrant campus life, USC offers a wide range of undergraduate and graduate programs across various disciplines.",
    fees: {
      tagline:
        "The University of Southern California is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Arts & Sciences",
          fees: "$59,000",
          img: arts,
        },
        {
          branch: "Engineering",
          fees: "$61,000",
          img: science,
        },
        {
          branch: "Cinematic Arts",
          fees: "$63,000",
          img: physical,
        },
        {
          branch: "Business",
          fees: "$62,000",
          img: commerce,
        },
        {
          branch: "Public Policy",
          fees: "$58,000",
          img: management,
        },
        {
          branch: "Architecture",
          fees: "$60,000",
          img: architecture,
        },
      ],
    },
    ranking:
      "The University of Southern California consistently ranks among the top universities in the United States and globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, the University of Southern California is ranked #134 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Southern California 63rd in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Southern California is ranked 73rd in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked highly in Communication & Media Studies, Computer Science & Information Systems, and Business & Management.",
      "U.S. News and World Report: Ranked highly in various subjects including Engineering and Computer Science.",
    ],
    employmentRanking:
      "USC ranks highly in graduate employability. Graduates enjoy excellent job prospects, with competitive starting salaries.",
    admission:
      "The admission process at the University of Southern California is highly selective, focusing on academic excellence and personal qualities.",
    test: "USC requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential and fit for USC.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities and leadership roles.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Southern California include:",
      req: [
        "Common Application or Coalition Application",
        "USC Writing Supplement",
        "High school transcript",
        "One teacher evaluation",
        "School Report",
        "Mid-Year School Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Southern California, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "carnegie-mellon-university": {
    country: "United States",
    university: "Carnegie Mellon University",
    heroImg: laTrobeUni,
    overview:
      "Carnegie Mellon University, founded in 1900, is a private research university located in Pittsburgh, Pennsylvania. Known for its strong programs in computer science, engineering, and fine arts, Carnegie Mellon offers a wide range of undergraduate and graduate programs across various disciplines.",
    fees: {
      tagline:
        "Carnegie Mellon University is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Computer Science",
          fees: "$57,000",
          img: science,
        },
        {
          branch: "Engineering",
          fees: "$58,000",
          img: science,
        },
        {
          branch: "Fine Arts",
          fees: "$55,000",
          img: arts,
        },
        {
          branch: "Business",
          fees: "$59,000",
          img: commerce,
        },
        {
          branch: "Information Systems",
          fees: "$56,000",
          img: management,
        },
        {
          branch: "Architecture",
          fees: "$54,000",
          img: architecture,
        },
      ],
    },
    ranking:
      "Carnegie Mellon University consistently ranks among the top universities in the United States and globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, Carnegie Mellon University is ranked #52 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks Carnegie Mellon University 28th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "Carnegie Mellon University is ranked 27th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked highly in Computer Science & Information Systems, Engineering & Technology, and Arts & Humanities.",
      "U.S. News and World Report: Ranked highly in various subjects including Computer Science and Engineering.",
    ],
    employmentRanking:
      "Carnegie Mellon ranks highly in graduate employability. Graduates enjoy excellent job prospects, with competitive starting salaries.",
    admission:
      "The admission process at Carnegie Mellon University is highly selective, focusing on academic excellence and personal qualities.",
    test: "Carnegie Mellon requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential and fit for Carnegie Mellon.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities and leadership roles.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into Carnegie Mellon University include:",
      req: [
        "Common Application",
        "Carnegie Mellon Supplement",
        "High school transcript",
        "Two teacher evaluations",
        "School Report",
        "Mid-Year School Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at Carnegie Mellon University, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
  "university-of-washington-seattle": {
    country: "United States",
    university: "University of Washington, Seattle",
    heroImg: tasmaniaUni,
    overview:
      "The University of Washington, founded in 1861, is a public research university located in Seattle, Washington. Known for its strong programs in medicine, engineering, and computer science, UW offers a wide range of undergraduate and graduate programs across various disciplines.",
    fees: {
      tagline:
        "The University of Washington is committed to providing high-quality education. Below are the annual tuition fees for selected programs (all in USD):",
      uniFeeCard: [
        {
          branch: "Arts & Sciences",
          fees: "$39,000",
          img: arts,
        },
        {
          branch: "Engineering",
          fees: "$41,000",
          img: science,
        },
        {
          branch: "Medicine",
          fees: "$45,000",
          img: physical,
        },
        {
          branch: "Business",
          fees: "$42,000",
          img: commerce,
        },
        {
          branch: "Public Health",
          fees: "$40,000",
          img: management,
        },
        {
          branch: "Built Environments",
          fees: "$38,000",
          img: architecture,
        },
      ],
    },
    ranking:
      "The University of Washington consistently ranks among the top public universities in the United States and globally.",
    worldRanking: [
      {
        key: "QS Rankings",
        answer: "According to the QS 2024 rankings, the University of Washington is ranked #85 in the QS World University Rankings 2024.",
      },
      {
        key: "Times Higher Education (THE)",
        answer: "THE ranks the University of Washington 29th in the World University Rankings 2024.",
      },
      {
        key: "U.S. News & World Report",
        answer: "The University of Washington is ranked 7th in the Best Global Universities by U.S. News & World Report.",
      },
    ],
    subjectRanking: [
      "QS Rankings by Subject 2023: Ranked highly in Life Sciences & Medicine, Natural Sciences, and Engineering & Technology.",
      "U.S. News and World Report: Ranked highly in various subjects including Computer Science and Medicine.",
    ],
    employmentRanking:
      "UW ranks highly in graduate employability. Graduates enjoy excellent job prospects, with competitive starting salaries.",
    admission:
      "The admission process at the University of Washington is selective, focusing on academic excellence and personal qualities.",
    test: "UW requires standardized test scores such as the SAT or ACT. Some graduate programs may require additional tests like the GRE or GMAT.",
    evaluation:
      "The admissions team evaluates academic performance, extracurricular activities, essays, and recommendations, focusing on the applicant's potential and fit for UW.",
    tips: [
      "Start your application early and pay attention to deadlines.",
      "Take challenging courses and maintain a strong academic record.",
      "Engage in meaningful extracurricular activities and leadership roles.",
      "Write compelling essays that reflect your unique experiences and aspirations.",
      "Obtain strong letters of recommendation from teachers who know you well.",
      "Prepare thoroughly for standardized tests and any required interviews.",
    ],
    documents: {
      tag: "The documents required for admission into the University of Washington include:",
      req: [
        "Coalition Application",
        "UW Questions",
        "High school transcript",
        "School Report",
        "Standardized test scores (SAT or ACT)",
        "Application fee or fee waiver request",
      ],
    },
    eligibility: {
      tag: "To qualify for admission at the University of Washington, you must fulfill the following requirements:",
      req: [
        "Completion of secondary education or equivalent.",
        "Strong academic record with challenging coursework.",
        "Competitive standardized test scores (SAT or ACT).",
        "Demonstrated leadership and extracurricular involvement.",
        "Some programs may have additional requirements.",
      ],
    },
  },
};

export default data