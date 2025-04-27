"use client";
import userbrainfull from "@/public/images/user-brain-full.png";
import Image from "next/image";

const statistics = [
  {
    percentage: "87%",
    description:
      "of our users reported experiencing long-term improvements in managing their procrastination symptoms",
  },
  {
    percentage: "94%",
    description: "of users reported a more balanced and positive mental state",
  },
  {
    percentage: "89%",
    description:
      "of users successfully aligned their behaviors and attitudes more closely with the qualities they admire in others",
  },
];

interface StatisticItemProps {
  percentage: string;
  description: string;
}

const StatisticItem = ({ percentage, description }: StatisticItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-rainbow w-fit text-4xl font-extrabold xl:text-6xl">
        {percentage}
      </span>
      <p className="max-w-96 font-medium text-white xl:text-lg">
        {description}
      </p>
    </div>
  );
};

const SectionFour = () => {
  return (
    <section className="relative aspect-[5/4] w-full py-1">
      <Image
        src={userbrainfull}
        alt="section_htop_vector"
        fill
        className="object-fill_"
      />
      <div className="absolute top-2/5 flex -translate-y-1/2 flex-col gap-10 pl-20 lg:right-0 lg:w-1/2 xl:right-0 xl:w-1/2">
        {statistics.map((stat, index) => (
          <StatisticItem
            key={index}
            percentage={stat.percentage}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionFour;
