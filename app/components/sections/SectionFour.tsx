"use client";
import { useIsMobile } from "@/app/hooks/useMediaQuery";
import sectionframegreen from "@/app/vectors/sectionframe-green.svg";
import userbrain_full from "@/public/images/user-brain-full.png";
import userbrain_mobile from "@/public/images/user-brain-mobile.png";
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
    <div className="flex flex-col items-center gap-4 md:items-baseline">
      <span className="text-rainbow w-fit text-4xl font-extrabold xl:text-6xl">
        {percentage}
      </span>
      <p className="max-w-96 font-medium text-white max-md:text-center xl:text-lg">
        {description}
      </p>
    </div>
  );
};

const SectionFour = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative aspect-[5/4] w-full py-1">
      <div
        className={`relative aspect-square ${isMobile ? "after:bg-greenlight after:absolute after:right-0 after:bottom-0 after:left-0 after:h-1/2" : ""}`}
      >
        {isMobile ? (
          <Image
            src={userbrain_mobile}
            alt="user_brain"
            fill
            className="z-10"
          />
        ) : (
          <Image
            src={userbrain_full}
            alt="user_brain"
            fill
            className="w-full"
          />
        )}
      </div>
      <div className="bg-greenlight border-red-500_ border_ right-0 z-20 flex flex-col items-center gap-10 px-4 max-md:py-10 md:absolute md:top-2/5 md:w-1/2 md:-translate-y-1/2">
        {statistics.map((stat, index) => (
          <StatisticItem
            key={index}
            percentage={stat.percentage}
            description={stat.description}
          />
        ))}
      </div>

      {isMobile && (
        <Image
          src={sectionframegreen}
          alt="section_top_vector"
          layout="intrinsic"
          className="-mt-1 w-full object-contain"
        />
      )}
    </section>
  );
};

export default SectionFour;
