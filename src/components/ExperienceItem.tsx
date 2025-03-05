import BracketText from "@/components/BracketText";
import { ExperienceType } from "@/utils/experience";

interface Props {
  data: ExperienceType;
}

export default function ExperienceItem({ data }: Props) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <BracketText className="ml-2 font-light" hoverEnabled={false}>
        <p>{data.company}</p>
      </BracketText>
      <div>
        <p className="text-neutral-500 text-lg">{data.title}</p>
        <p className="text-neutral-600 text-xs">{data.discipline}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="max-w-xs font-sans">{data.description}</p>
        {data.achievements?.length && data.achievements?.length > 0 && (
          <>
            <p className="text-neutral-600">ACHIEVEMENTS</p>
            <ul className="max-w-xs font-sans list-disc">
              {data.achievements.map((achievement: string) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </>
        )}
        <p className="text-neutral-500 text-sm self-end">{data.date}</p>
      </div>
    </div>
  );
}
