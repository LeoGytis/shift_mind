import brain from "@/public/images/brain.png";
import Image from "next/image";
import { FC } from "react";

interface PlanCardProps {
  icon: string;
  description: string;
}

const planData: PlanCardProps[] = [
  {
    icon: "/icons/report.svg",
    description:
      "Keep your motivation up by having daily reports of your progress and achievements",
  },
  {
    icon: "/icons/hourglass.svg",
    description:
      "Learn new techniques to improve your concentration, effectively handle time, and establish positive daily routines.",
  },
  {
    icon: "/icons/book.svg",
    description: "Build new habits with our prepared guides",
  },
  {
    icon: "/icons/plan.svg",
    description:
      "Have an action plan to break your procrastination cycle and manage procrastination",
  },
];

const SectionFivePlan: FC = () => {
  return (
    <section className="mx-auto mt-0 max-w-5xl px-6 pb-10 md:-mt-16 md:px-8 lg:-mt-30 xl:-mt-62">
      <h1 className="mb-10 text-center md:mb-20">
        Your Procrastination plan <br /> will help you:
      </h1>
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-24">
        <Image
          src={brain}
          alt="brain"
          width={248}
          height={217}
          className="order-2 md:order-1 lg:h-[271px] lg:w-[310px]"
        />
        <div className="order-1 mt-8 grid grid-cols-1 gap-10 md:order-2 md:gap-15 lg:grid-cols-2">
          {planData.map((item, index) => (
            <div key={index} className="flex items-start gap-4 md:max-w-72">
              <Image src={item.icon} alt="icon" width={48} height={48} />
              <p className="font-semibold">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFivePlan;
