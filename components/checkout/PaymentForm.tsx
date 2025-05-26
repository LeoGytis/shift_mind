import { dummyCardData } from "@/components/sections/section-choose-your-plan/dummyCardData";
import apple from "@/elements/vectors/apple.svg";
import creditcardpink from "@/elements/vectors/creditcardpink.svg";
import creditcards from "@/elements/vectors/creditcards.svg";
import discover from "@/elements/vectors/discover.svg";
import mastercardblue from "@/elements/vectors/mastercardblue.svg";
import mastercardyellow from "@/elements/vectors/mastercardyellow.svg";
import paypal from "@/elements/vectors/paypal.svg";
import subtract from "@/elements/vectors/subtract.svg";
import visa from "@/elements/vectors/visa.svg";
import { creditCardSchema } from "@/utils/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../ui/FormInput";

interface FormValues {
  cardNumber: string;
  nameOnCard: string;
  expiryDate: string;
  cvv: string;
}

interface PaymentFormProps {
  selectedPlan: number;
  onNextStep: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  selectedPlan,
  onNextStep,
}) => {
  const [submitError, setSubmitError] = useState(false);
  const plan = dummyCardData[selectedPlan];

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      nameOnCard: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const simulateError = false;
    if (simulateError) {
      setSubmitError(true);
    } else {
      alert("Form Submitted!");
      console.log(data);
      onNextStep();
    }
  };

  const handleCardNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void,
  ) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    onChange(formattedValue);
  };

  const handleExpiryDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void,
  ) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    const formattedValue = value.replace(/(\d{2})(?=\d)/g, "$1/");
    onChange(formattedValue);
  };

  const handleCvvChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void,
  ) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    onChange(value);
  };

  return (
    <>
      <h3 className="mb-4">Order Summary</h3>
      <div className="border-green-lightest text-greendark mb-[43px] flex flex-col gap-4 rounded-2xl border p-4">
        <div className="border-green-lightest flex items-center justify-between border-b pb-4">
          <span className="text-sm">{plan.title}</span>
          <span className="font-semibold">${plan.originalPrice}</span>
        </div>
        <div className="border-green-lightest text-pink flex items-center justify-between border-b pb-4 text-sm">
          <span className="text-sm">Discount (50%)</span>
          <span className="font-semibold">-${plan.discountedPrice}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold">Total</span>
          <span className="text-2xl font-semibold">
            ${plan.discountedPrice}
          </span>
        </div>
      </div>

      <h3 className="mb-5">Select Payment Method</h3>
      <div className="flex gap-[11px]">
        <button className="bg-bgyellow flex w-1/2 cursor-pointer items-center justify-center rounded-3xl py-5">
          <Image
            src={paypal}
            alt="paypal_icon"
            layout="intrinsic"
            className="object-contain"
          />
        </button>
        <button className="flex w-1/2 cursor-pointer items-center justify-center rounded-3xl bg-black py-5">
          <Image
            src={apple}
            alt="apple_icon"
            layout="intrinsic"
            className="object-contain"
          />
        </button>
      </div>

      <div className="my-5 flex items-center">
        <div className="border-greendark flex-grow border-t"></div>
        <span className="text-greendark mx-3 text-[17px] font-bold">or</span>
        <div className="border-greendark flex-grow border-t"></div>
      </div>

      {/* ----- Form ----- */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-8 flex flex-col gap-3.5"
      >
        <div className="flex items-center justify-between">
          <h3>Credit Card</h3>
          <Image
            src={creditcards}
            alt="creditcards_icon"
            layout="intrinsic"
            className="object-contain"
          />
        </div>
        <div className="relative">
          <Image
            src={creditcardpink}
            alt="creditcardpink_icon"
            layout="intrinsic"
            className="absolute top-4.5 left-2 object-contain"
          />
          <FormInput
            name="cardNumber"
            placeholder="XXXX XXXX XXXX XXXX"
            onChange={(e, fieldOnChange) =>
              handleCardNumberChange(e, fieldOnChange)
            }
            control={control}
            className="!pl-10"
          />
        </div>
        <FormInput
          name="nameOnCard"
          placeholder="Name on card"
          control={control}
        />
        <div className="flex w-full gap-4">
          <FormInput
            name="expiryDate"
            placeholder="MM/YY"
            onChange={(e, fieldOnChange) =>
              handleExpiryDateChange(e, fieldOnChange)
            }
            control={control}
          />
          <FormInput
            name="cvv"
            placeholder="CVV/CVC"
            control={control}
            onChange={(e, fieldOnChange) => handleCvvChange(e, fieldOnChange)}
          />
        </div>
        <button className="background-rainbow mt-4 w-full cursor-pointer rounded-3xl py-6 font-semibold text-white">
          SUBMIT SECURE ORDER
        </button>
        {submitError && (
          <p className="text-pink flex gap-2 self-center text-sm">
            <Image
              src={subtract}
              alt="exclamation_icon"
              layout="intrinsic"
              className="object-contain"
            />
            Oops, payment failed! Please try again.
          </p>
        )}
      </form>

      <div className="flex justify-center gap-3.5">
        <Image
          src={visa}
          alt="visa_icon"
          layout="intrinsic"
          className="object-contain"
        />
        <Image
          src={mastercardyellow}
          alt="mastercardyellow_icon"
          layout="intrinsic"
          className="object-contain"
        />
        <Image
          src={discover}
          alt="discover_icon"
          layout="intrinsic"
          className="object-contain"
        />
        <Image
          src={mastercardblue}
          alt="mastercardblue_icon"
          layout="intrinsic"
          className="object-contain"
        />
      </div>
    </>
  );
};

export default PaymentForm;
