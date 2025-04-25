import { FC } from "react";
import { cn } from "../utils/cn";

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
          "mb-4 font-bold text-[#3DF7FF] uppercase",
          intensity === "high" && "text-pink",
        )}
      >
        {intensity}
      </p>
      <p className="text-gray-300">{description}</p>
      <div className="bg-greenlight mt-4 h-2 w-full rounded-full">
        <div
          className={cn(
            "h-full w-[66%] rounded-full bg-[#3DF7FF]",
            intensity === "high" && "bg-pink",
          )}
        />
      </div>
    </div>
  );
};

const YourPersonalSection: FC = () => {
  return (
    <section className="w-full px-4 py-16 md:px-8">
      <div className="container mx-auto flex max-w-4xl flex-col items-center">
        <h1 className="text-greendark mb-8 max-w-xl text-center">
          Your Personal Procrastination Summary
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {symptomsData.map((symptom, index) => (
            <SymtomsCard key={index} {...symptom} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourPersonalSection;
