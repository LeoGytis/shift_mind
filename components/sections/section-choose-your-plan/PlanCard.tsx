import ellipse from "@/elements/vectors/ellipse.svg";
import ellipseSelected from "@/elements/vectors/ellipseSelected.svg";
import Image from "next/image";
import React from "react";

interface PlanCardProps {
  title: string;
  billingCycle: string;
  originalPrice: string;
  discountedPrice: string;
  mainPrice: string;
  dailyPrice: string;
  selected: boolean;
  topChoice?: boolean;
  onClick: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  billingCycle,
  originalPrice,
  discountedPrice,
  mainPrice,
  dailyPrice,
  selected,
  topChoice = false,
  onClick,
}) => {
  return (
    <div
      className={`bg-bgblue relative flex w-full flex-col rounded-3xl border-2 border-transparent md:w-1/2 lg:w-1/3 ${
        selected && "border-blue active-shadow"
      }`}
      onClick={onClick}
    >
      <span
        className={`flex justify-center py-3 text-center font-bold text-white uppercase ${
          !topChoice && "hidden"
        }`}
      >
        Top choice for beginners
      </span>
      <div
        className={`bg-bgligth text-greendark flex cursor-pointer justify-between rounded-3xl px-6 py-4 ${
          selected && "bg-white"
        }`}
      >
        <div className="flex gap-4">
          <div className="mt-1">
            {selected ? (
              <Image
                src={ellipseSelected}
                alt="section_top_vector"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={ellipse}
                alt="section_top_vector"
                width={20}
                height={20}
              />
            )}
          </div>
          <div className="flex flex-col justify-between gap-2">
            <span className="text-xl font-bold">{title}</span>
            <span className="text-xs">{billingCycle}</span>
            <div className="space-x-1 text-xs">
              <span className="text-pink line-through">
                USD {originalPrice}
              </span>
              <span className="font-bold">USD {discountedPrice}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div>
            <span className="text-md align-top text-sm font-semibold">USD</span>
            <span className="text-3xl font-bold">{mainPrice}</span>
          </div>
          <span className="text-pink text-xs line-through">
            USD {dailyPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
