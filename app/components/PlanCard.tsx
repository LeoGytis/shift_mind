import React from "react";

interface PlanCardProps {
  title: string;
  billingCycle: string;
  originalPrice: string;
  discountedPrice: string;
  mainPrice: string;
  dailyPrice: string;
  selected: boolean;
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
  onClick,
}) => {
  return (
    <div
      className={`flex gap-4 bg-[#D7EEEB] rounded-3xl py-4 px-6 cursor-pointer transition-all ${
        selected
          ? "border-8 border-[#6B9EFF] shadow-lg"
          : "border border-transparent"
      }`}
      onClick={onClick}
    >
      <span className="w-5 h-5 rounded-full bg-[#A8C6C4]"></span>
      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold">{title}</span>
        <span className="text-xs">{billingCycle}</span>
        <div className="text-xs space-x-1">
          <span className="text-[#F175B9] line-through">{originalPrice}</span>
          <span className="font-bold">{discountedPrice}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <div>
          <span className="text-md text-sm font-semibold">USD</span>
          <span className="text-3xl font-bold">{mainPrice}</span>
        </div>
        <span className="text-[#F175B9]">{dailyPrice}</span>
      </div>
    </div>
  );
};

export default PlanCard;
