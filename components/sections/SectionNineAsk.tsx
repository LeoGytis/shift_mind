"use client";
import sectionframegreen from "@/elements/vectors/sectionframe-green.svg";
import Image from "next/image";
import { FC } from "react";
import Accordion from "../ui/Accordion";

const faqItems = [
  {
    question: "What is ShiftMind?",
    answer:
      "ShiftMind is an app designed to help you overcome procrastination and boost your productivity through science-backed techniques and personalized plans.",
  },
  {
    question: "What can I expect to receive?",
    answer:
      "You'll receive access to our Anti-Procrastination Program, daily motivation, progress tracking, and actionable steps to help you stay on track.",
  },
  {
    question: "How can I make the most of the Anti-Procrastination Program?",
    answer:
      "Engage with the daily tasks, track your progress, and utilize the app's resources and community for support and accountability.",
  },
  {
    question: "What's the process after I make a purchase?",
    answer:
      "After your purchase, you'll get instant access to the app and all its features. You can start your program right away!",
  },
  {
    question: "What is the pricing?",
    answer:
      "Our flexible payment options allow you to pick from a one-month, three-month, or six-month plan, granting you access to the app along with additional perks. And if you're not completely satisfied, don't worry! Our Risk-Free Guarantee enables you to cancel at any time without incurring the full price of the program.",
  },
];

const SectionNineAsk: FC = () => {
  return (
    <section className="relative">
      <Image
        src={sectionframegreen}
        alt="section_top_vector"
        layout="intrinsic"
        className="absolute -top-10 -z-1 -mb-1 w-full rotate-180 object-contain md:-top-20 xl:-top-40"
      />
      <div className="bg-greenlight px-6 pt-20 pb-20 xl:pt-10">
        <div className="relative mx-auto max-w-5xl">
          <h1 className="mb-8 text-center !text-white">People often ask</h1>
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
};

export default SectionNineAsk;
