import BracketText from "@/components/BracketText";
import { PortfolioType } from "@/utils/portfolio";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: PortfolioType;
}

export default function PortfolioItem({ data }: Props) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <BracketText className="ml-2 font-light" hoverEnabled={false}>
        <p>{data.technologies.join(", ")}</p>
      </BracketText>
      <p className="text-neutral-500 text-lg">{data.title}</p>
      <div className="space-y-2">
        <div className="relative group p-1">
          <Image
            src={data.imageSrc}
            alt={data.title}
            width={0}
            height={0}
            className={classNames(
              "h-auto group-hover:blur-xs group-active:blur-xs duration-200",
              data.width
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <div className="bg-white/0 absolute px-4 top-0 bottom-0 left-0 right-0 rounded-2xl bg-opac group-hover:bg-white/50 group-active:bg-white/50 opacity-0 group-hover:opacity-100 group-active:opacity-100 duration-200 flex items-center justify-center font-sans">
            <p>{data.description}</p>
          </div>
        </div>

        <div className="flex gap-2">
          {data.links &&
            data.links.length > 0 &&
            data.links.map((link, index) => (
              <div className="flex gap-2" key={index}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="underline dotted"
                >
                  {link.name}
                </Link>
                {data.links && index < data.links.length - 1 && <p>|</p>}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
