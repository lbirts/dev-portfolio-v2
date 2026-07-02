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
    company: "SPECCHECK",
    discipline: "FULL STACK",
    date: "APR 2025 - PRESENT",
    description:
      "Building the platform eye care practices and labs use to order lenses, working the full stack from React ordering flows to a Python AI service. Much of the product lives where a commerce-grade UI meets real domain complexity: prescriptions, live catalogs, inventory, and payments that all have to stay correct.",
    achievements: [
      "Built the Stock Lens Ordering Portal end to end, from catalog browse and a SKU power grid to Stripe checkout, with a cart that stays correct under concurrent edits",
      "Built an AI Rx-ordering assistant across the stack, from a multi-agent OpenAI Agents SDK service and an Auth0-scoped MCP tool layer to a ChatKit frontend",
    ],
  },
  {
    title: "SOFTWARE ENGINEER",
    company: "HARPIE",
    discipline: "FULL STACK",
    date: "SEPT 2022 - APR 2025",
    description:
      "Worked on Harpie's customer-facing Web3 security product in Next.js and TypeScript, helping people understand and act on risk around their wallets. A small, distributed team meant owning features end to end and making architectural calls quickly. The hard part was usually turning messy on-chain data into something a non-expert could read and trust.",
    achievements: [
      "Built a secure RPC-style layer that validated transactions and user identity end to end, making fraud-sensitive features auditable and harder to spoof",
    ],
  },
  {
    title: "SOFTWARE ENGINEER",
    company: "REVBOSS",
    discipline: "FULL STACK",
    date: "AUG 2021 - SEPT 2022",
    description:
      "Worked across RevBoss's B2B sales platform, from the lead inbox reps live in to the pipeline behind it. Built features that turned inbound leads into clear next actions, and spent real time paying down accumulated shortcuts so shared parts of the app were safer to change.",
    achievements: [
      "Wired machine learning into the lead qualification pipeline so scoring and routing improved over time and reps spent less time vetting inbound leads",
      "Led a migration of legacy code onto a modern stack and tuned slow SQL paths so pages held up under real load",
    ],
  },
  {
    title: "MOBILE ENGINEER",
    company: "FANDUEL",
    discipline: "SWIFT, OBJECTIVE-C",
    date: "DEC 2020 - AUG 2021",
    description:
      "Worked on FanDuel's iOS apps in Swift and Objective-C, in a codebase where performance and reliability fed directly into the product. Built shared architecture other teams could reuse instead of rebuilding, and pushed accessibility earlier into how the mobile team worked.",
    achievements: [
      "Built a native wrapper and shared mobile patterns for auth, navigation, and hosting so new surfaces could launch without reinventing the basics",
      "Shipped accessibility work across core betting and account flows, including dynamic type, VoiceOver, and contrast, so the app stayed usable on assistive tech",
    ],
  },
  {
    title: "SOFTWARE ENGINEER",
    company: "FANDUEL",
    discipline: "FRONTEND",
    date: "OCT 2019 - DEC 2020",
    description:
      "Joined during a stretch of fast user growth, building interfaces that handled complex betting flows and held up during high-traffic sporting events. Worked on the design system through a brand refresh so products stayed visually consistent, and spent a lot of time making real-time, data-heavy screens readable for people of all experience levels.",
    achievements: [
      "Owned a TypeScript component library documented in Storybook so multiple product lines shared the same primitives instead of rebuilding controls in isolation",
    ],
  },
];
