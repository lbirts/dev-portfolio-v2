"use client"

import BracketText from "@/components/BracketText";

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
      <BracketText onClick={scrollToContact}>
        <p>CONTACT</p>
      </BracketText>
    </header>
  );
}
