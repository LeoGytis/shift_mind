import union from "@/elements/vectors/union.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PaymentForm from "./PaymentForm";
import Stepper from "./Stepper";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [currentStep, setCurrentStep] = useState(2);
  const checkoutSteps = [
    { label: "Select plan", step: 1 },
    { label: "Payment", step: 2 },
    { label: "Receipt", step: 3 },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-gray-800/80"
      onClick={handleBackdropClick}
    >
      <div className="border-greenlight relative max-w-[600px] rounded-3xl border bg-white p-6 pb-10 lg:my-4">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 cursor-pointer"
        >
          <Image
            src={union}
            alt="close_icon"
            layout="intrinsic"
            className="object-contain"
          />
        </button>

        <div className="mb-[43px] px-8 lg:px-14">
          <Stepper steps={checkoutSteps} activeStep={currentStep} />
        </div>

        {currentStep === 2 && (
          <PaymentForm
            selectedPlan={selectedPlan}
            onNextStep={() => setCurrentStep(3)}
          />
        )}
        {currentStep === 3 && (
          <div className="min-w-[300px] text-center">
            <h3 className="mb-2 text-lg font-semibold">Step 3: Receipt</h3>
            <p className="mb-4 text-gray-600">Your payment was successful!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
