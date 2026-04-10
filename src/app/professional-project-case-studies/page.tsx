import BracketText from "@/components/BracketText";
import Footer from "@/components/Footer";
import PortfolioItem from "@/components/PortfolioItem";
import type { PortfolioType } from "@/utils/portfolio";
import PasswordGate from "./PasswordGate";
import { cookies } from "next/headers";

const caseStudyPortfolio: PortfolioType = {
  technologies: ["FRONTEND", "REACT", "TYPESCRIPT", "NEXT.JS", "WEBSOCKETS", "AI/ML"],
  title: "PROFESSIONAL PROJECT CASE STUDIES",
  description:
    "Highlights from contract frontend work across coaching dashboards, B2B live chat, Web3 security, and AI-powered lead management.",
  links: [
    {
      name: "Back to Portfolio",
      href: "/",
    },
  ],
};

const caseStudies = [
  {
    title: "Flashmock - Coaches Module (Contract)",
    points: [
      "As a contract frontend engineer, I built the coach-facing dashboard and agent management system for FlashMock, an AI-powered interview preparation and career coaching platform.",
      "Coach Dashboard: displays key metrics including total packages offered, active AI agents, completed coaching sessions, and AI mock interview sessions.",
      "AI Agent Training System: interface for coaches to create and train custom AI interview coaches using training Q&A pairs from a universal question bank.",
      "Session Management: booking + session history for upcoming and completed sessions, supporting different session types (single sessions vs. package bookings like Career Acceleration and Executive Leadership).",
      "Coach Marketplace Integration: coach profile cards showing credentials, ratings, availability, specializations, and real-time scheduling options.",
    ],
  },
  {
    title: "SpecCheck - B2B Live Chat (Contract)",
    points: [
      "Built the real-time live chat feature for SpecCheck's B2B portal in React + TypeScript.",
      "Implemented UI for two primary views: an agent-facing dashboard and a responsive client-facing chat module.",
      "Agent dashboard: manage multiple conversations and view customer account details alongside chat history.",
      "Client module: fully responsive, switching from a desktop sidebar to a focused single-column layout on mobile browsers.",
      "Integrated the chat interface with a WebSocket API for real-time sending/receiving, including rendering automated initial messages from the “SpecCheck Bot” for triage before an agent joined.",
    ],
  },
  {
    title: "Harpie - Web3 Security Dashboard",
    points: [
      "Frontend engineer at Harpie using Next.js + TypeScript to build the user-facing security application.",
      "Wallet 2FA: transaction list with real-time security tags like “Safe”, “Dangerous”, or “Suspicious”.",
      "Transaction Approval Process: real-time notifications via WebSockets; intercepts a user's transaction request, triggers email notifications + a pop-up modal, then requires explicit “Approve” or “Deny”.",
      "Security Overview: dashboard visualizations for “Security Score”, “Transaction Health”, and “Approval Risk”.",
      "Harpie Rewards: gamified rewards UI including leaderboard, daily reward claims, and referral system components.",
    ],
  },
  {
    title: "RevBoss - AI-Powered Lead Management",
    points: [
      "Worked on the frontend of the RevBoss sales platform focused on an AI-powered lead management inbox.",
      "Built a React UI enabling users to act on incoming leads: fetch + display email threads, then integrate ML API results for AI-suggested actions and AI-generated replies directly in the interface.",
      "Developed interactive “Action” components (e.g., the Meeting scheduler) with local state management for guests, times, and timezones before submitting the final approved action to the backend.",
    ],
  },
];

export default function ProfessionalProjectCaseStudiesPage() {
  const auth = cookies().get("portfolioCaseStudyAuth")?.value;
  const isUnlocked = auth === "1";

  if (!isUnlocked) {
    return <PasswordGate />;
  }

  return (
    <div className="flex-1 pt-24 pb-28 px-8 md:px-24 overflow-y-auto">
      <div className="max-w-3xl">
        <BracketText position="before:bottom-2 after:top-2" className="mb-4">
          <p>CASE STUDIES</p>
        </BracketText>

        <PortfolioItem data={caseStudyPortfolio} />

        <div className="mt-10 flex flex-col gap-8">
          {caseStudies.map((study, idx) => (
            <section key={study.title} className="space-y-2">
              <p className="text-neutral-500 text-sm font-sans">
                {idx + 1}.{" "}
                <span className="text-black font-mono">{study.title}</span>
              </p>
              <div className="space-y-2">
                {study.points.map((point) => (
                  <p key={point} className="text-neutral-500 text-sm leading-relaxed">
                    {point}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

