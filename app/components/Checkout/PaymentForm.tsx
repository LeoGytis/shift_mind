import React, {useState} from 'react';
import paypal from '@/public/vectors/paypal.svg';
import apple from '@/public/vectors/apple.svg';
import visa from '@/public/vectors/visa.svg';
import mastercardyellow from '@/public/vectors/mastercardyellow.svg';
import discover from '@/public/vectors/discover.svg';
import mastercardblue from '@/public/vectors/mastercardblue.svg';
import creditcards from '@/public/vectors/creditcards.svg';
import Image from 'next/image';
import {Controller, useForm} from 'react-hook-form';
import {creditCardSchema} from '@/app/utils/validationSchemas';
import {zodResolver} from '@hookform/resolvers/zod';

interface FormValues {
	cardNumber: string;
	expiryDate: string;
	cvv: string;
	nameOnCard: string;
}

const PaymentForm = () => {
	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm<FormValues>({
		resolver: zodResolver(creditCardSchema),
		defaultValues: {
			cardNumber: '',
			expiryDate: '',
			cvv: '',
			nameOnCard: '',
		},
	});

	const onSubmit = (data: FormValues) => {
		alert('Form Submitted!');
		console.log(data);
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
		<div className="">
			<div className="mb-[43px]">
				<h3 className="mb-2">Order Summary</h3>
				<div className="flex flex-col gap-2 border rounded-4xl p-4">
					<div
						className="flex justify-b
								etween pb-2 border-b"
					>
						<span>Monthly Plan</span>
						<span>$28.46</span>
					</div>
					<div className="flex justify-between pb-2 border-b text-pink">
						<span>Discount (50%)</span>
						<span>-$28.46</span>
					</div>
					<div className="flex justify-between pb-2 ">
						<span>Total</span>
						<span>$28.46</span>
					</div>
				</div>
			</div>
			<div>
				<h3 className="mb-2">Select Payment Method</h3>
				<div className="flex gap-[11px]">
					<button className="w-1/2 flex justify-center items-center bg-[#FFC33A] rounded-3xl py-5">
						<Image src={paypal} alt="PayPal Icon" layout="intrinsic" className="object-contain" />
					</button>
					<button className="w-1/2 flex justify-center items-center bg-black rounded-3xl py-5">
						<Image src={apple} alt="PayPal Icon" layout="intrinsic" className="object-contain" />
					</button>
				</div>
			</div>
			<div className="flex items-center my-5">
				<div className="flex-grow border-t border-greendark"></div>
				<span className="mx-4 text-greendark">or</span>
				<div className="flex-grow border-t border-greendark"></div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-8">
				<div className="flex justify-between items-center">
					<h3 className="mb-2">Credit Card</h3>
					<Image src={creditcards} alt="PayPal Icon" layout="intrinsic" className="object-contain" />
				</div>
				<Controller
					name="cardNumber"
					control={control}
					render={({field}) => (
						<div>
							<span className="absolute left-3 top-3 text-pink">💳</span>
							<input
								{...field}
								onChange={(e) => handleCardNumberChange(e, field.onChange)}
								placeholder="XXXX XXXX XXXX XXXX"
								className="w-full p-2 border"
							/>
							{errors.cardNumber && <p className="text-red-500">{errors.cardNumber.message}</p>}
						</div>
					)}
				/>
				<Controller
					name="nameOnCard"
					control={control}
					render={({field}) => (
						<div>
							<input {...field} placeholder="Name on card" className="w-full p-2 border" />
							{errors.nameOnCard && <p className="text-red-500">{errors.nameOnCard.message}</p>}
						</div>
					)}
				/>
				<div className="flex gap-2">
					<Controller
						name="expiryDate"
						control={control}
						render={({field}) => (
							<div>
								<input
									{...field}
									onChange={(e) => handleExpiryDateChange(e, field.onChange)}
									placeholder="MM/YY"
									className="w-1/2 p-2 border"
								/>
								{errors.expiryDate && <p className="text-red-500">{errors.expiryDate.message}</p>}
							</div>
						)}
					/>
					<Controller
						name="cvv"
						control={control}
						render={({field}) => (
							<div>
								<input
									{...field}
									onChange={(e) => handleCvvChange(e, field.onChange)}
									placeholder="CVV/CVC"
									className="w-1/2 p-2 border"
								/>
								{errors.cvv && <p className="text-red-500">{errors.cvv.message}</p>}
							</div>
						)}
					/>
				</div>
				<div className="relative">
					<span className="absolute left-3 top-3 text-pink">💳</span>
					<input placeholder="XXXX  XXXX  XXXX  XXXX" className="w-full" />
				</div>

				<button className="w-full bg-button rounded-3xl text-white font-semibold py-6">
					SUBMIT SCURE ORDER
				</button>
			</form>
			<div className="flex justify-center gap-[14px]">
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
		</div>
	);
};

export default PaymentForm;
