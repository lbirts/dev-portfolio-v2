"use client";

import BracketText from "@/components/BracketText";
import Link from "next/link";

export default function Header() {
  const scrollToContact = () => {
    const targetElement = document.getElementById("contact");

    targetElement?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  return (
    <header className="flex justify-between p-4 fixed w-full z-10">
      <div className="flex gap-1 items-center text-sm">
        <p>LAU</p>
        <div className="h-px bg-black w-10" />
        <p>REN</p>
      </div>
      <div className="flex gap-8">
        <BracketText>
          <Link href="https://github.com/lbirts/dev-portfolio-v2" target="_blank">
            <p>REPO</p>
          </Link>
        </BracketText>
        <BracketText onClick={scrollToContact}>
          <p>CONTACT</p>
        </BracketText>
      </div>
    </header>
  );
}
