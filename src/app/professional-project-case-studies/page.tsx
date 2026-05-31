import BracketText from "@/components/BracketText";
import Footer from "@/components/Footer";
import classNames from "classnames";
import { cookies } from "next/headers";
import Image from "next/image";
import PasswordGate from "./PasswordGate";

const caseStudies = [
  {
    title: "Flashmock - Coaches Module (Contract)",
    points: [
      "On contract, I built the coach-facing side of FlashMock—an AI interview prep and career coaching platform—including the dashboard and tools coaches use to manage their AI agents.",
      "The dashboard gives coaches a clear snapshot of their business: packages offered, active agents, completed sessions, and mock interviews run.",
      "Coaches can create and train custom AI interview coaches by pairing questions and answers from a shared question bank, so each agent reflects how they actually coach.",
      "I also built booking and session history so coaches can see what’s coming up, what’s done, and jump into live sessions—whether it’s a one-off or part of a package like Career Acceleration or Executive Leadership.",
      "Coach profiles in the marketplace show credentials, ratings, availability, and specialties, with scheduling that updates in real time.",
    ],
    image: "/flashmock-preview.webp",
  },
  {
    title: "SpecCheck - B2B Live Chat (Contract)",
    points: [
      "I led frontend work on SpecCheck’s real-time live chat for their B2B portal, built in React and TypeScript as a standalone module.",
      "Support agents get a dashboard to handle multiple chats at once and see customer account details next to the conversation.",
      "Customers get a chat widget that works on desktop and mobile—from a sidebar on large screens to a focused single-column view on phones.",
      "Messages flow over WebSockets so conversations feel instant. The UI also shows early replies from the SpecCheck Bot so common questions get triaged before a human joins.",
    ],
    image: "/speccheck-preview.webp",
  },
  {
    title: "Harpie - Web3 Security Dashboard",
    points: [
      "At Harpie I worked on the customer-facing security app in Next.js and TypeScript—helping people understand and control risk around their wallets.",
      "The transaction list pulls in history and labels each item in plain language (Safe, Dangerous, Suspicious) so users aren’t guessing what they’re looking at.",
      "When a transaction needs a second look, WebSockets drive real-time alerts: email plus an in-app modal with scan results (wallet age, phishing signals, and similar checks) and a clear Approve or Deny step.",
      "The main dashboard charts security score, transaction health, and approval risk so the overall picture is easy to scan.",
      "I also shipped the rewards experience—leaderboard, daily claims, and referrals—so staying protected felt engaging, not just scary.",
    ],
    image: "/harpie-preview.webp",
  },
  {
    title: "RevBoss - AI-Powered Lead Management",
    points: [
      "I focused on the lead inbox for RevBoss’s sales platform—where reps review and act on incoming opportunities.",
      "The interface loads email threads and surfaces ML-backed suggestions: recommended next steps and draft replies, right where reps already work.",
      "I built the action flows behind those suggestions—like scheduling a meeting—with forms for guests, time, and timezone that only hit the server once the rep confirms.",
    ],
    image: "/revboss-preview.webp",
  },
];

export default async function ProfessionalProjectCaseStudiesPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("portfolioCaseStudyAuth")?.value;
  const isUnlocked = auth === "1";

  if (!isUnlocked) {
    return <PasswordGate />;
  }

  return (
    <div className="flex-1 py-24 overflow-y-auto space-y-10">
      <div className="px-8 md:px-24 space-y-8">
        <BracketText>
          <p>CASE STUDIES</p>
        </BracketText>

        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <section key={study.title} className="space-y-2">
              <p className="text-neutral-500 text-lg font-sans">
                {idx + 1}.{" "}
                <span className="text-black font-mono">{study.title}</span>
              </p>
              <div className="flex gap-2">
                <div className="space-y-2">
                  {study.points.map((point) => (
                    <p
                      key={point}
                      className="text-neutral-500 text-sm leading-relaxed"
                    >
                      {point}
                    </p>
                  ))}
                </div>
                <Image
                  src={study.image as string}
                  alt={study.title}
                  width={0}
                  height={0}
                  className={classNames("h-auto w-2/5")}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer orientation="vertical" />
    </div>
  );
}
