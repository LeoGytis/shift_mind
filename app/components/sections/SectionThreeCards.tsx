import arrows from "@/app/vectors/arrows.svg";
import Image from "next/image";
import { FC } from "react";

interface CardProps {
  image: {
    src: string;
    alt: string;
  };
  colorCode: string;
  title: string;
  list: string[];
}

const CardOne: CardProps = {
  image: {
    src: "/images/procrastination.jpg",
    alt: "Procrastination Symptoms",
  },
  colorCode: "#ff4d8f",
  title: "PROCRASTINATION SYMPTOMS:",
  list: [
    "Time management difficulties",
    "Poor organizational skills",
    "Difficulty focusing",
    "Acting without thinking",
    "Restlessness",
  ],
};

const CardTwo: CardProps = {
  image: {
    src: "/images/your_goals.jpg",
    alt: "Your Goals",
  },
  colorCode: "#5a91ff",
  title: "YOUR GOAL:",
  list: [
    "Able to focus, minimal distraction",
    "Effective planning, punctuality",
    "Tidy spaces, structured routines",
    "Considerate actions, patience",
    "Calmness",
  ],
};

const Card: FC<CardProps> = ({ image, colorCode, title, list }) => {
  return (
    <div className="card-shadow hover-card-shadow group w-full rounded-3xl bg-white transition-all duration-300 md:w-full lg:p-0">
      <div className="flex w-full flex-col gap-6">
        <div className="h-full overflow-hidden rounded-t-3xl">
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={293}
            className="h-[293px] w-full transform object-cover duration-700 ease-out hover:scale-110"
          />
        </div>
        <div className="flex flex-col p-6">
          <h2 style={{ color: colorCode }} className="mb-8 text-2xl font-bold">
            {title}
          </h2>
          <ul className="space-y-5">
            {list.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <span
                  style={{ backgroundColor: colorCode }}
                  className="h-2.5 w-2.5 rounded-full"
                ></span>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const SectionThreeCards: FC = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-8 md:flex-row md:gap-9">
        <Card {...CardOne} />

        {/* Arrow Section */}
        <div className="flex items-center justify-center">
          <Image
            src={arrows}
            alt="arrows"
            width={76}
            height={82}
            className="rotate-90 object-cover md:rotate-0"
          />
        </div>

        <Card {...CardTwo} />
      </div>
    </section>
  );
};

export default SectionThreeCards;
