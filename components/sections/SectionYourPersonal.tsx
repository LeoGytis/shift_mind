import Image from "next/image";
import { FC } from "react";
import { cn } from "../../utils/cn";

interface SymtomsCardProps {
  intensity: "moderate" | "high";
  title: string;
  description: string;
}

const symptomsData: SymtomsCardProps[] = [
  {
    title: "Physical symptoms:",
    intensity: "high",
    description:
      "Can show up as feeling anxious, sad, or having big mood changes.",
  },
  {
    title: "Psychological symptoms:",
    intensity: "moderate",
    description:
      "Like having trouble sleeping, feeling tired all the time, or pain without a clear reason.",
  },
  {
    title: "Behavioral symptoms:",
    intensity: "moderate",
    description:
      "Might involve remembering bad things that happened, having bad dreams, or can't stop thinking about something bad.",
  },
  {
    title: "Impact on your life:",
    intensity: "moderate",
    description:
      "Having trouble trusting others, worrying they'll leave you, or finding it hard to get close to people and set limits.",
  },
];

const SymtomsCard: FC<SymtomsCardProps> = ({
  intensity,
  title,
  description,
}) => {
  return (
    <div className="bg-bggreen w-full rounded-3xl p-6">
      <h4 className="mb-2 text-xl font-semibold text-white">{title}</h4>
      <p
        className={cn(
          "text-electriclight mb-4 font-bold uppercase",
          intensity === "high" && "text-pink",
        )}
      >
        {intensity}
      </p>
      <p className="text-gray-300">{description}</p>
      <div className="bg-greenlight mt-4 h-2 w-full rounded-full">
        <div
          className={cn(
            "bg-electriclight h-full w-[66%] rounded-full",
            intensity === "high" && "bg-pink",
          )}
        />
      </div>
    </div>
  );
};

const SectionYourPersonal: FC = () => {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-10 md:py-20">
      <h1 className="text-greendark mb-10 max-w-xl px-6 text-center !text-3xl md:mb-20 md:px-0 md:!text-4xl">
        Your Personal <br /> Procrastination Summary
      </h1>
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center">
        {symptomsData.map((symptom, index) => (
          <div key={index} className="w-full md:w-[calc(50%-12px)]">
            <SymtomsCard {...symptom} />
          </div>
        ))}
        <div className="bg-bggreen relative mx-auto aspect-[3/2] w-full rounded-3xl md:w-1/2">
          <Image
            src="images/graph.png"
            alt="graph"
            fill
            className="p-4 md:p-10"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionYourPersonal;
