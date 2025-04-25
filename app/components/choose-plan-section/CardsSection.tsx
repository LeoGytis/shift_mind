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

const Card: FC<CardProps> = ({ image, colorCode, title, list }) => {
  return (
    <div className="card-shadow hover-card-shadow group mb-12 w-full rounded-3xl transition-all duration-300 hover:bg-white md:w-[410px] lg:p-0">
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
              <li
                key={index}
                className="flex items-center gap-4 transition-transform duration-300 group-hover:translate-x-2"
              >
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

const CardsSection: FC = () => {
  return (
    <section className="w-full bg-[#f8fafc] px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-stretch justify-between gap-8 md:flex-row md:gap-16">
        <Card {...CardOne} />

        {/* Arrow Section */}
        <div className="flex items-center justify-center gap-3 md:flex-col">
          <Image
            src={arrows}
            alt="arrows"
            width={50}
            height={50}
            className="h-[293px] w-full transform object-cover duration-700 ease-out hover:scale-110"
          />
        </div>

        <Card {...CardTwo} />
      </div>
    </section>
  );
};

export default CardsSection;
