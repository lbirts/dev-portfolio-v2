export type ExperienceType = {
  title: string;
  company: string;
  discipline: string;
  date: string;
  description: string;
  achievements?: string[];
};
//   {
//     title: "Senior Software Engineer - Full Stack",
//     company: "RevBoss",
//     date: "March 2024 - November 2024",
//     description:
//       "Led performance optimization initiatives and modernization of legacy systems while implementing machine learning solutions for lead qualification.",
//     achievements: ["Led the upgrade of legacy software to a modern tech stack, reducing technical debt by 50% and improving performance by 30%", "Spearheaded the integration of machine learning algorithms into a lead qualification engine, boosting lead accuracy by 25%"],
//   },
//   {
//     title: "Blockchain Developer",
//     company: "Harpie",
//     date: "September 2022 - March 2024",
//     description:
//       "Implemented UI/UX improvements, enhanced test coverage, and developed secure transaction validation frameworks for blockchain applications.",
//     achievements: ["Collaborated with the lead designer to redesign the app's user interface, implementing responsive designs, resulting in a 40% increase in user engagement"],
//   },
//   {
//     title: "Mobile Engineer - Swift & React Native",
//     company: "FanDuel",
//     date: "August 2021 - September 2022",
//     description:
//       "Developed cross-platform mobile architecture solutions, implemented reusable component systems, and enhanced accessibility features.",
//     achievements: ["Developed a scalable native wrapper that standardized enterprise architecture, reducing time-to-market for new mobile ventures by 25%", "Improved mobile app accessibility by implementing WCAG-compliant features, increasing usability for users with disabilities by 35%"],
//   },
//   {
//     title: "Software Engineer - Frontend",
//     company: "FanDuel",
//     date: "January 2020 - August 2021",
//     description:
//       "Created component libraries, mentored junior engineers, and integrated third-party services to enhance application performance and development efficiency.",
//     achievements: ["Implemented a custom component library with Storybook and TypeScript, standardizing UI components across multiple projects, reducing development time by 25%"],
//   },
// ];

export const experienceData: ExperienceType[] = [
  {
    title: "SOFTWARE ENGINEER",
    company: "HAPRIE",
    discipline: "Full Stack",
    date: "SEPT 2022 - PRESENT",
    description:
      "Operated at the cutting edge of Web3 security in a fast-paced startup environment, translating complex blockchain concepts into accessible user experiences. Collaborated within a distributed team to pioneer new approaches to digital asset protection. Balanced technical innovation with practical solutions, often making critical architectural decisions under tight deadlines while maintaining a focus on user trust and platform integrity.",
    achievements: [
      "Crafted an intuitive, responsive interface that transformed the user experience, driving a 40% surge in engagement metrics",
    ],
  },
  {
    title: "SENIOR SOFTWARE ENGINEER",
    company: "REVBOSS",
    discipline: "FULL STACK - FREELANCE",
    date: "MAR 2023 - MAR 2024",
    description:
      "Navigated the complex landscape of B2B sales technology, bridging the gap between engineering excellence and business outcomes. Served as a technical mentor across teams while championing clean code principles and scalable architecture patterns. Advocated for data-driven decision making, transforming business requirements into elegant technical solutions during a period of rapid company growth.",
    achievements: [
      "Led a comprehensive tech stack modernization that slashed technical debt by 50% while elevating system performance by 30%",
      "Pioneered ML-powered lead qualification algorithms that enhanced prospect targeting accuracy by 25%",
    ],
  },
  {
    title: "MOBILE ENGINEER",
    company: "FANDUEL",
    discipline: "SWIFT, REACT NATIVE",
    date: "AUG 2021 - SEPT 2022",
    description:
      "Thrived in the high-stakes world of sports betting technology, where milliseconds matter and user experience directly impacts revenue. Balanced native performance with cross-platform efficiency while navigating complex regulatory requirements. Pioneered inclusive design practices within the mobile team, fostering a culture where accessibility was considered from the earliest stages of feature development.",
    achievements: [
      "Engineered a scaleable native architecture framework that accelerated mobile product launches by 25%",
      "Championed digital inclusion by implementing accessibility standards that improved usability for diverse users by 35%",
    ],
  },
  {
    title: "SOFTWARE ENGINEER",
    company: "FANDUEL",
    discipline: "FRONTEND",
    date: "JAN 2020 - AUG 2021",
    description:
      "Joined during a period of rapid user growth, crafting intuitive interfaces that handled complex betting scenarios while maintaining performance during high-traffic sporting events. Participated in the evolution of the design system during a major brand refresh, ensuring visual consistency across multiple products. Embraced the challenge of real-time data visualization, creating engaging user experiences that simplified complex betting options for users of all experience levels.",
    achievements: [
      "Implemented a comprehensive component library with Storybook that accelerated development velocity by 25%",
    ],
  },
];
