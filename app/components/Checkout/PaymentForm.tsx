import paypal from '@/app/vectors/paypal.svg';
import apple from '@/app/vectors/apple.svg';
import creditcardpink from '@/app/vectors/creditcardpink.svg';
import visa from '@/app/vectors/visa.svg';
import mastercardyellow from '@/app/vectors/mastercardyellow.svg';
import discover from '@/app/vectors/discover.svg';
import mastercardblue from '@/app/vectors/mastercardblue.svg';
import subtract from '@/app/vectors/subtract.svg';
import creditcards from '@/app/vectors/creditcards.svg';
import Image from 'next/image';
import {useForm} from 'react-hook-form';
import {creditCardSchema} from '@/app/utils/validationSchemas';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import FormInput from '../FormInput';

interface FormValues {
	cardNumber: string;
	nameOnCard: string;
	expiryDate: string;
	cvv: string;
}

interface PaymentFormProps {
	onNextStep: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({onNextStep}) => {
	const [submitError, setSubmitError] = useState(false);

	const {control, handleSubmit} = useForm<FormValues>({
		resolver: zodResolver(creditCardSchema),
		defaultValues: {
			cardNumber: '',
			expiryDate: '',
			cvv: '',
			nameOnCard: '',
		},
	});

	const onSubmit = (data: FormValues) => {
		const simulateError = false;
		if (simulateError) {
			setSubmitError(true);
		} else {
			alert('Form Submitted!');
			console.log(data);
			onNextStep();
		}
	};

	const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
		const value = e.target.value.replace(/\D/g, '').slice(0, 16);
		const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
		onChange(formattedValue);
	};

	const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
		const value = e.target.value.replace(/\D/g, '').slice(0, 4);
		const formattedValue = value.replace(/(\d{2})(?=\d)/g, '$1/');
		onChange(formattedValue);
	};

	const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
		const value = e.target.value.replace(/\D/g, '').slice(0, 3);
		onChange(value);
	};

	return (
		<>
			<div className="mb-[43px]">
				<h3 className="mb-4">Order Summary</h3>
				<div className="flex flex-col gap-4 border border-green-lightest rounded-2xl text-greendark p-4">
					<div className="flex justify-between items-center border-b border-green-lightest pb-4">
						<span className="text-sm">Monthly Plan</span>
						<span className="font-semibold">$28.46</span>
					</div>
					<div className="flex justify-between items-center border-b border-green-lightest text-pink text-sm pb-4">
						<span className="text-sm">Discount (50%)</span>
						<span className="font-semibold">-$28.46</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="font-semibold">Total</span>
						<span className="text-2xl font-semibold">$28.46</span>
					</div>
				</div>
			</div>
			<div>
				<h3 className="mb-5">Select Payment Method</h3>
				<div className="flex gap-[11px]">
					<button className="w-1/2 flex justify-center items-center bg-[#FFC33A] rounded-3xl cursor-pointer py-5">
						<Image src={paypal} alt="paypal_icon" layout="intrinsic" className="object-contain" />
					</button>
					<button className="w-1/2 flex justify-center items-center bg-black rounded-3xl cursor-pointer py-5">
						<Image src={apple} alt="apple_icon" layout="intrinsic" className="object-contain" />
					</button>
				</div>
			</div>
			<div className="flex items-center my-5">
				<div className="flex-grow border-t border-greendark"></div>
				<span className="text-greendark text-[17px] font-bold mx-3">or</span>
				<div className="flex-grow border-t border-greendark"></div>
			</div>

			{/* ----- Form ----- */}
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3.5 mb-8">
				<div className="flex justify-between items-center">
					<h3>Credit Card</h3>
					<Image src={creditcards} alt="creditcards_icon" layout="intrinsic" className="object-contain" />
				</div>
				<div className="relative">
					<Image
						src={creditcardpink}
						alt="creditcardpink_icon"
						layout="intrinsic"
						className="object-contain absolute left-2 top-4.5"
					/>
					<FormInput
						name="cardNumber"
						placeholder="XXXX XXXX XXXX XXXX"
						onChange={(e, fieldOnChange) => handleCardNumberChange(e, fieldOnChange)}
						control={control}
						className="!pl-10"
					/>
				</div>
				<FormInput name="nameOnCard" placeholder="Name on card" control={control} />
				<div className="w-full flex gap-4">
					<FormInput
						name="expiryDate"
						placeholder="MM/YY"
						onChange={(e, fieldOnChange) => handleExpiryDateChange(e, fieldOnChange)}
						control={control}
					/>
					<FormInput
						name="cvv"
						placeholder="CVV/CVC"
						control={control}
						onChange={(e, fieldOnChange) => handleCvvChange(e, fieldOnChange)}
					/>
				</div>
				<button className="w-full background-gradient rounded-3xl text-white font-semibold cursor-pointer py-6 mt-4">
					SUBMIT SECURE ORDER
				</button>
				{submitError && (
					<p className="flex gap-2 self-center text-pink text-sm">
						<Image src={subtract} alt="exclamation_icon" layout="intrinsic" className="object-contain" />
						Oops, payment failed! Please try again.
					</p>
				)}
			</form>
			<div className="flex justify-center gap-3.5">
				<Image src={visa} alt="visa_icon" layout="intrinsic" className="object-contain" />
				<Image
					src={mastercardyellow}
					alt="mastercardyellow_icon"
					layout="intrinsic"
					className="object-contain"
				/>
				<Image src={discover} alt="discover_icon" layout="intrinsic" className="object-contain" />
				<Image src={mastercardblue} alt="mastercardblue_icon" layout="intrinsic" className="object-contain" />
			</div>
		</>
	);
};

export default PaymentForm;
