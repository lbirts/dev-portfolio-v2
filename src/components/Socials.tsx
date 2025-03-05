import BracketText from "@/components/BracketText";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex gap-6 items-center">
      <BracketText
        fontWeight="before:font-light after:font-light"
        fontSize="text-2xl"
      >
        <Link href="https://linkedin.com/in/lauren-birts" target="_blank">
          <Linkedin className="h-5 w-5" />
        </Link>
      </BracketText>

      <BracketText
        fontWeight="before:font-light after:font-light"
        fontSize="text-2xl"
      >
        <Link href="https://github.com/lbirts" target="_blank">
          <Image
            alt="github logo"
            height={16}
            width={16}
            src="https://cdn.simpleicons.org/github/black?viewbox=auto"
            draggable="false"
          />
        </Link>
      </BracketText>

      <BracketText
        fontWeight="before:font-light after:font-light"
        fontSize="text-2xl"
      >
        <Link href="mailto:birtslauren@gmail.com">
          <Mail className="h-5 w-5" />
        </Link>
      </BracketText>
    </div>
  );
}
