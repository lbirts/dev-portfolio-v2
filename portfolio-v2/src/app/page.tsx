import BracketText from "@/components/BracketText";
import ExperienceItem from "@/components/ExperienceItem";
import Footer from "@/components/Footer";
import HorizontalScroll from "@/components/HorizontalScroll";
import PortfolioItem from "@/components/PortfolioItem";
import Socials from "@/components/Socials";
import { experienceData, ExperienceType } from "@/utils/experience";
import { portfolioData, PortfolioType } from "@/utils/portfolio";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <HorizontalScroll>
      {/* About Section */}
      <div className="flex flex-col justify-between pr-52 shrink-0">
        <div className="space-y-3">
          <p className="text-2xl">LAUREN BIRTS</p>
          <p className="font-sans text-sm max-w-lg text-neutral-500">
            I'm a senior software engineer with extensive experience building
            innovative, user-focused applications across multiple platforms. I
            specialize in performance optimization while balancing technical
            elegance with pragmatic delivery. My background spans full-stack
            development, mobile engineering, and blockchain systems.
          </p>
          <p className="font-sans text-sm max-w-lg text-neutral-500">
            I'm passionate about creating secure, accessible technology and
            continuously expanding my technical toolkit to deliver impactful
            solutions. I've focused on transforming complex technical challenges
            into elegant solutions that drive business value. I thrive in
            collaborative environments where I can apply my diverse skill set to
            modernize legacy systems, enhance user experiences, and implement
            forward-thinking architectures.
          </p>
        </div>
        <Socials />
      </div>

      {/* Portoflio Section */}
      <div className="shrink-0">
        <div className="border-l h-full w-px border-neutral-300 border-dashed absolute top-0 bottom-0" />
        <div className="pl-8 pr-40 flex gap-24 items-start h-full">
          <BracketText
            position="before:bottom-2 after:top-2"
            className="[writing-mode:vertical-lr] rotate-180"
            hoverEnabled={false}
          >
            <p>PORTFOLIO</p>
          </BracketText>
          <div className="flex gap-10 self-center items-end">
            {portfolioData.map((portfolio: PortfolioType, i: number) => (
              <PortfolioItem key={i} data={portfolio} />
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="shrink-0">
        <div className="border-l h-full w-px border-neutral-300 border-dashed absolute top-0 bottom-0" />
        <div className="pl-8 pr-40 flex gap-24 items-start h-full">
          <BracketText
            position="before:bottom-2 after:top-2"
            className="[writing-mode:vertical-lr] rotate-180"
            hoverEnabled={false}
          >
            <p>EXPERIENCE</p>
          </BracketText>
          <div>
            <BracketText fontSize="text-xs" className="justify-end">
              <Link
                href="/Lauren-Birts-Resume.pdf"
                download="YourName-Resume.pdf"
                className="flex justify-end gap-2"
              >
                DOWNLOAD MY RESUME
                <Download className="h-3 w-3" />
              </Link>
            </BracketText>
            <div className="flex gap-10 self-center items-end">
              {experienceData.map((experience: ExperienceType, i: number) => (
                <ExperienceItem key={i} data={experience} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </HorizontalScroll>
  );
}
