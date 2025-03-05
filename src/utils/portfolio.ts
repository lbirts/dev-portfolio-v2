export type PortfolioType = {
    technologies: string[];
    title: string;
    description: string;
    demoLink?: string;
    gitHubLink?: string;
    imageSrc: string;
    width: string;
}

export const portfolioData: PortfolioType[] = [
    {
        technologies: ["SWIFT", "CLOUDKIT", "OURA CLOUD", "COREDATA"],
        title: "SLEEP BIOMETRIC TRACKER",
        description: "A health-focused iOS app that converts sleep data into practical insights. The app connects with Oura Cloud to analyze sleep stages, heart rate patterns, and breathing rates. Users receive personalized recommendations to improve their sleep quality based on their biometric data. Clean visualizations help users understand connections between their daily habits and sleep patterns without overwhelming them with technical details.",
        imageSrc: "/sleep-tracker.webp",
        width: "w-64"
    },
    {
        technologies: ["NEXT.JS", "D3.JS", "MONGODB", "REDIS"],
        title: "LYRIC VISUALIZER",
        description: "An interactive data visualization tool that analyzes vocabulary diversity across musical artists. The platform processes thousands of song lyrics, identifying unique word usage patterns and linguistic trends. Fast data retrieval is achieved through Redis caching, while MongoDB stores the comprehensive lyrics database. Users can explore how artists' language evolves across albums and compare vocabulary richness between different musicians and genres.",
        imageSrc: "/lyric-visualizer.webp",
        width: "w-120"
    },
    {
        technologies: ["NEXT.JS", "PAYLOADCMS", "POSTGRESQL"],
        title: "RECIPE BLOG",
        description: "A content-rich culinary platform built for both recipe creators and home cooks. The custom PayloadCMS implementation makes content management straightforward while ensuring a visually appealing frontend experience. The PostgreSQL database powers smart features like ingredient cross-referencing and automatic seasonal recipe collections. The site balances beautiful food photography with practical cooking instructions, making recipes accessible to cooking enthusiasts at any skill level.",
        imageSrc: "/recipe-blog.webp",
        width: "w-96"
    },
    {
        technologies: ["NEXT.JS", "TAILWIND CSS", "TYPESCRIPT"],
        title: "MARKETING FIRM PORTFOLIO",
        description: "A distinctive website showcasing a marketing firm's capabilities and client success stories. The site features subtle animations and responsive design elements that highlight the firm's creative approach. Built with TypeScript for reliability and Tailwind CSS for consistent styling, the architecture supports quick updates while maintaining visual coherence. The site serves as both a portfolio of past work and a demonstration of the firm's design sensibilities.",
        imageSrc: "/marketing-portfolio.webp",
        width: "w-96"
    }
];