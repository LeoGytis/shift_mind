const ChooseYourPlanSection = () => {
  return (
    <div className="w-full container mx-auto h-96 bg-[#0C3F3D]">
      <h1 className="text-center text-4xl font-bold">Choose Your Plan</h1>
      <div className="w-full flex justify-center items-center gap-4">
        <div className="flex gap-4 bg-white rounded-3xl py-4 px-6">
          <div>0</div>
          <div className="flex flex-col gap-2">
            <span>3-month plan</span>
            <span>Billed every 3 month</span>
            <span>USD 125.98 USD 62.99</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>USD 0.99</span>
            <span>USD 1.98 per day</span>
          </div>
        </div>
        <div className="py-4 px-6">CARD</div>h
        <div className="py-4 px-6">CARD</div>
      </div>

      <p>
        By selecting a payment method, you agree to the Terms & Conditions and
        Privacy Policy.
      </p>

      <button>GET MY PLAN</button>
      <p>
        You are enrolling in 1 Month Plan subscription to https://shiftmind.app/
        service with the discount price $29.99. You agree that the plan you
        selected will automatically be extended at the full price for successive
        renewal periods and you will be charged $59.98 every 1 months until you
        cancel the subscription. Payments will be charged from the card you
        specified here. You can cancel your subscription by contacting our
        customer support team via email at hello@shiftmind.app. Terms of Service
        the charge will appear on your bill as “ShiftMind”.
      </p>
      <div>
        <div>
          <div>LOGO</div>
          <div>
            <span className="capitalize">RISK-FREE GUARANTEE</span>
            <span>cancel at any time without being charged the full price</span>
          </div>
        </div>
        <div>
          <div>VISA</div>
          <div>VISA</div>
          <div>VISA</div>
          <div>VISA</div>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPlanSection;
