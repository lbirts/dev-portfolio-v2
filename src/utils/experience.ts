export type ExperienceType = {
  title: string;
  company: string;
  discipline: string;
  date: string;
  description: string;
  achievements?: string[];
};

export const experienceData: ExperienceType[] = [
  {
    title: "SOFTWARE ENGINEER",
    company: "HARPIE",
    discipline: "FULL STACK",
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
    discipline: "FULL STACK",
    date: "AUG 2021 - SEPT 2022",
    description:
      "Navigated the complex landscape of B2B sales technology, bridging the gap between engineering excellence and business outcomes. Championing clean code principles and scalable architecture patterns. Advocated for data-driven decision making, transforming business requirements into elegant technical solutions.",
    achievements: [
      "Led a comprehensive tech stack modernization that slashed technical debt by 50% while elevating system performance by 30%",
      "Pioneered ML-powered lead qualification algorithms that enhanced prospect targeting accuracy by 25%",
    ],
  },
  {
    title: "MOBILE ENGINEER",
    company: "FANDUEL",
    discipline: "SWIFT, REACT NATIVE",
    date: "DEC 2020 - AUG 2021",
    description:
      "Thrived in the high-stakes world, where milliseconds matter and user experience directly impacts revenue. Balanced native performance with cross-platform efficiency while navigating complex regulatory requirements. Pioneered inclusive design practices within the mobile team, fostering a culture where accessibility was considered early on.",
    achievements: [
      "Engineered a scaleable native architecture framework that accelerated mobile product launches by 25%",
      "Championed digital inclusion by implementing accessibility standards that improved usability for diverse users by 35%",
    ],
  },
  {
    title: "SOFTWARE ENGINEER",
    company: "FANDUEL",
    discipline: "FRONTEND",
    date: "OCT 2019 - DEC 2020",
    description:
      "Joined during a period of rapid user growth, crafting intuitive interfaces that handled complex betting scenarios while maintaining performance during high-traffic sporting events. Participated in the evolution of the design system during a major brand refresh, ensuring visual consistency across multiple products. Embraced the challenge of real-time data visualization, creating engaging user experiences that simplified complex betting options for users of all experience levels.",
    achievements: [
      "Implemented a comprehensive component library with Storybook that accelerated development velocity by 25%",
    ],
  },
];
