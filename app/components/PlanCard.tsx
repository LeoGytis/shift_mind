import React from "react";

interface PlanCardProps {
  title: string;
  billingCycle: string;
  originalPrice: string;
  discountedPrice: string;
  mainPrice: string;
  dailyPrice: string;
  selected: boolean;
  choice: string;
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
  choice,
  onClick,
}) => {
  return (
    <div
      className={`relative flex flex-col bg-[#5A91FF] rounded-3xl ${
        selected
          ? "border-1 border-[#6B9EFF] active-shadow " // Tailwind shadow class
          : "border border-transparent bg-transparent"
      }`}
      onClick={onClick}
    >
      <div className="text-center text-white font-bold py-3">
        {selected && <span className="uppercase">{choice}</span>}
      </div>

      <div className="flex gap-4 bg-[#D7EEEB] rounded-3xl py-4 px-6 cursor-pointer transition-all">
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
    </div>
  );
};

export default PlanCard;
