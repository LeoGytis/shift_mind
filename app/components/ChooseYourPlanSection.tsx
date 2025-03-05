import guarantee from "@/public/images/guarantee.svg";
import payment from "@/public/images/payment.png";
import group4538 from "@/public/vectors/group4538.svg";
import Image from "next/image";

const ChooseYourPlanSection = () => {
  return (
    <section>
      <div className="relative h-[180px]">
        <Image
          src={group4538}
          alt="section_top_vector"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-16 bg-[#0C3F3D] text-white py-10">
        <h1 className="text-center text-4xl font-bold">Choose Your Plan</h1>

        {/* ----- Plans Article ----- */}
        <article className="w-full flex justify-center items-center  text-[#0A3634] gap-4">
          <div className="flex gap-4 bg-[#D7EEEB] rounded-3xl py-4 px-6">
            <span className="w-5 h-5 rounded-full bg-[#A8C6C4]"></span>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold">3-month plan</span>
              <span className="text-xs">Billed every 3 month</span>
              <div className="text-xs space-x-1">
                <span className="text-[#F175B9] line-through">USD 125.98</span>
                <span className="font-bold"> USD 62.99</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <span className="text-md text-sm font-semibold">USD</span>
                <span className="text-3xl font-bold">0.99</span>
              </div>
              <span className="text-[#F175B9]">USD 1.38 per day</span>
            </div>
          </div>
          <div className="flex gap-4 bg-[#D7EEEB] rounded-3xl py-4 px-6">
            <span className="w-5 h-5 rounded-full bg-[#A8C6C4]"></span>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold">3-month plan</span>
              <span className="text-xs">Billed every 3 month</span>
              <div className="text-xs space-x-1">
                <span className="text-[#F175B9] line-through">USD 125.98</span>
                <span className="font-bold"> USD 62.99</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <span className="text-md text-sm font-semibold">USD</span>
                <span className="text-3xl font-bold">0.99</span>
              </div>
              <span className="text-[#F175B9]">USD 1.38 per day</span>
            </div>
          </div>
          <div className="flex gap-4 bg-[#D7EEEB] rounded-3xl py-4 px-6">
            <span className="w-5 h-5 rounded-full bg-[#A8C6C4]"></span>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold">3-month plan</span>
              <span className="text-xs">Billed every 3 month</span>
              <div className="text-xs space-x-1">
                <span className="text-[#F175B9] line-through">USD 125.98</span>
                <span className="font-bold"> USD 62.99</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <span className="text-md text-sm font-semibold">USD</span>
                <span className="text-3xl font-bold">0.99</span>
              </div>
              <span className="text-[#F175B9]">USD 1.38 per day</span>
            </div>
          </div>
        </article>

        {/* ----- Description Article ----- */}
        <article className="w-1/3 flex flex-col items-center gap-4 text-center">
          <p>
            By selecting a hpayment method, you agree to the Terms & Conditions
            and Privacy Policy.
          </p>
          <div className="text-testColor">Test Color Background</div>
          <button className="w-1/3 mx-auto bg-gradientmain text-testColor rounded-3xl py-6 button ">
            GET MY PLAN
          </button>
          <p className="text-center text-xs">
            You are enrolling in 1 Month Plan subscription to
            https://shiftmind.app/ service with the discount price $29.99. You
            agree that the plan you selected will automatically be extended at
            the full price for successive renewal periods and you will be
            charged $59.98 every 1 months until you cancel the subscription.
            Payments will be charged from the card you specified here. You can
            cancel your subscription by contacting our customer support team via
            email at hello@shiftmind.app. Terms of Service the charge will
            appear on your bill as “ShiftMind”.
          </p>
          <div className="flex justify-between gap-4">
            <div className="flex gap-2">
              <Image src={guarantee} alt="Logo" width={52} height={52} />
              <div>
                <span className="text-xl font-extrabold capitalize">
                  RISK-FREE GUARANTEE
                </span>{" "}
                <span className="font-black">
                  cancel at any time without being charged the full price
                </span>
              </div>
            </div>
            <div className="relative w-1/2">
              <Image
                src={payment}
                alt="payment"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </article>
      </div>
      <div className="relative h-[180px]">
        <Image
          src={group4538}
          alt="section_bottom_vector"
          fill
          className="object-cover transform rotate-180"
        />
      </div>
    </section>
  );
};

export default ChooseYourPlanSection;
