"use client";
import arrow from "@/elements/vectors/arrow.svg";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { FC, useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            "overflow-hidden rounded-2xl bg-white transition-all duration-300",
            openIndex === idx && "border-rainbow",
          )}
        >
          <button
            className={`flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left text-lg font-semibold transition-colors focus:outline-none ${openIndex === idx ? "text-primary" : "text-greendark"}`}
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`accordion-content-${idx}`}
            id={`accordion-header-${idx}`}
          >
            <span>{item.question}</span>
            <span
              className={`transform transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
            >
              <Image src={arrow} alt="arrow" width={16} height={11} />
            </span>
          </button>
          <div
            id={`accordion-content-${idx}`}
            role="region"
            aria-labelledby={`accordion-header-${idx}`}
            className={`px-6 transition-all duration-300 ${openIndex === idx ? "max-h-96 py-4 opacity-100" : "max-h-0 overflow-hidden py-0 opacity-0"}`}
          >
            <p className="text-greendark text-base">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
