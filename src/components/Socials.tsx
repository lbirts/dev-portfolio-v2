import BracketText from "@/components/BracketText";
import Link from "next/link";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { MdMail } from "react-icons/md";

export default function Socials() {
  return (
    <div className="flex gap-6 items-center">
      <BracketText
        fontWeight="before:font-light after:font-light"
        fontSize="text-2xl"
      >
        <Link href="https://linkedin.com/in/lauren-birts" target="_blank">
          <BsLinkedin className="h-5 w-5" />
        </Link>
      </BracketText>

      <BracketText
        fontWeight="before:font-light after:font-light"
        fontSize="text-2xl"
      >
        <Link href="https://github.com/lbirts" target="_blank">
          <BsTwitterX className="h-5 w-5" />
        </Link>
      </BracketText>

      <BracketText
        fontWeight="before:font-light after:font-light"
        fontSize="text-2xl"
      >
        <Link href="mailto:birtslauren@gmail.com">
          <MdMail className="h-5 w-5" />
        </Link>
      </BracketText>
    </div>
  );
}
