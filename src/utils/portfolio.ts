type Link = {
  name: string;
  href: string;
};

export type PortfolioType = {
  technologies: string[];
  title: string;
  description: string;
  imageSrc?: string;
  width?: string;
  links?: Link[];
};

export const portfolioData: PortfolioType[] = [
  {
    technologies: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "TAILWIND CSS",
      "SHADCN/UI",
    ],
    title: "WILDCARDS",
    description:
      "An Uno-style card game built for groups who want more control over how they play. Before each match, the host picks from configurable house rules so every session can follow a familiar format or something entirely custom. Online, players create a room with a shareable code or join an existing one; offline, the same setup supports pass-and-play with friends on one device. Built with Next.js and TypeScript, Wildcards keeps lobby setup, rule configuration, and in-game turns in a responsive shadcn/ui interface that feels natural on both desktop and mobile.",
    imageSrc: "/wildcards.webp",
    width: "w-120",
    links: [
      {
        name: "Demo",
        href: "https://wildcards.vercel.app",
      },
      {
        name: "Code",
        href: "https://github.com/lbirts/Wildcards",
      },
    ],
  },
  {
    technologies: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "TAILWIND CSS",
      "SHADCN/UI",
    ],
    title: "FOCUSNODE",
    description:
      "A productivity workspace that brings four task-management surfaces together in one cohesive design system. FocusNode combines a draggable Kanban board with swimlanes and priority-tagged cards, a Pomodoro focus timer with a distraction blocker, a daily planner that ranks tasks by priority or time estimate, and a team workload view that groups assignments by category and status. Built with Next.js 16 and React 19 on top of an OKLCH-driven Tailwind v4 token system, the app pairs shadcn/ui primitives with custom components to keep typography, color, and spacing consistent across every view.",
    imageSrc: "/focus-node.webp",
    width: "w-120",
    links: [
      {
        name: "Demo",
        href: "https://focus-node-one.vercel.app/",
      },
      {
        name: "Code",
        href: "https://github.com/lbirts/FocusNode",
      },
    ],
  },
  {
    technologies: ["NEXT.JS", "TAILWIND CSS", "TYPESCRIPT"],
    title: "THE NOTHING TIMER",
    description:
      "A minimalist meditation app that promotes digital stillness in our hyperconnected world. Built with Next.js and TypeScript, The Nothing Timer features a clean component architecture with independent timer elements, ambient visuals, and movement detection that operate in synchronized state. React hooks manage idle sessions and meditation phase transitions, while Tailwind CSS delivers responsive design that adapts seamlessly across all device sizes to help users reclaim moments of doing nothing.",
    imageSrc: "/do-nothing.webp",
    width: "w-120",
    links: [
      {
        name: "Demo",
        href: "https://nothing.laurenbirts.dev",
      },
      {
        name: "Code",
        href: "https://github.com/lbirts/do-nothing",
      },
    ],
  },
  {
    technologies: ["NEXT.JS", "D3.JS", "MONGODB", "REDIS"],
    title: "LYRIC VISUALIZER",
    description:
      "An interactive data visualization tool that analyzes vocabulary diversity across musical artists. The platform processes thousands of song lyrics, identifying unique word usage patterns and linguistic trends. Fast data retrieval is achieved through Redis caching, while MongoDB stores the comprehensive lyrics database. Users can explore how artists' language evolves across albums and compare vocabulary richness between different musicians and genres.",
    imageSrc: "/lyric-visualizer.webp",
    width: "w-120",
  },
  {
    technologies: ["NEXT.JS", "TAILWIND CSS", "TYPESCRIPT"],
    title: "MARKETING FIRM PORTFOLIO",
    description:
      "A distinctive website showcasing a marketing firm's capabilities and client success stories. The site features subtle animations and responsive design elements that highlight the firm's creative approach. Built with TypeScript for reliability and Tailwind CSS for consistent styling, the architecture supports quick updates while maintaining visual coherence. The site serves as both a portfolio of past work and a demonstration of the firm's design sensibilities.",
    imageSrc: "/marketing-portfolio.webp",
    width: "w-96",
  },
];
