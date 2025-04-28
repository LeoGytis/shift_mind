"use client";
import guarantee from "@/app/vectors/guarantee.svg";
import payment from "@/app/vectors/payment.svg";
import sectionframe from "@/app/vectors/sectionframe.svg";
import Image from "next/image";
import { useState } from "react";
import Modal from "../../checkout/Modal";
import { dummyCardData } from "./dummyCardData";
import PlanCard from "./PlanCard";

const SectionChooseYourPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full py-1">
        <Image
          src={sectionframe}
          alt="section_top_vector"
          layout="intrinsic"
          className="-mb-1 w-full object-contain"
        />
        <div className="bg-bggreen w-full px-4 py-5 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-13">
            <h1 className="text-center !text-white">Choose Your Plan</h1>

            {/* ----- Plans Article ----- */}
            <article className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:items-end">
              {dummyCardData.map((plan, index) => (
                <PlanCard
                  key={index}
                  {...plan}
                  selected={selectedPlan === index}
                  onClick={() => setSelectedPlan(index)}
                />
              ))}
            </article>

            {/* ----- Description Article ----- */}
            <article className="flex w-full flex-col items-center text-center lg:w-1/2">
              <p className="mb-4 text-sm">
                By selecting a payment method, you agree to the Terms &
                Conditions and Privacy Policy.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="background-rainbow mb-8 w-full cursor-pointer rounded-3xl py-6 lg:w-2/3"
              >
                GET MY PLAN
              </button>
              <p className="mb-8 text-center text-xs">
                You are enrolling in 1 Month Plan subscription to
                <br />
                https://shiftmind.app/ service with the discount price $29.99.
                You agree that the plan you selected will automatically be
                extended at the full price for successive renewal periods and
                you will be charged $59.98 every 1 months until you cancel the
                subscription. Payments will be charged from the card you
                specified here. You can cancel your subscription by contacting
                our customer support team via email at hello@shiftmind.app.
                Terms of Service the charge will appear on your bill as
                “ShiftMind”.
              </p>
              <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
                <div className="flex gap-4">
                  <Image src={guarantee} alt="Logo" width={52} height={52} />
                  <p className="max-w-[303px] text-start text-sm font-medium">
                    <span className="text-xl font-extrabold whitespace-nowrap uppercase">
                      RISK-FREE GUARANTEE
                    </span>{" "}
                    cancel at any time without being charged the full price
                  </p>
                </div>
                <Image
                  src={payment}
                  alt="payment"
                  layout="intrinsic"
                  className="object-contain"
                />
              </div>
            </article>
          </div>
        </div>
        <div className="relative h-[60px] md:h-[180px]">
          <Image
            src={sectionframe}
            alt="section_bottom_vector"
            layout="intrinsic"
            className="-mt-1 w-full rotate-180 transform object-cover"
          />
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
};

export default SectionChooseYourPlan;
