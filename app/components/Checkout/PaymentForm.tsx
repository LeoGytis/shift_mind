import React, {useState} from 'react';
import paypal from '@/public/vectors/paypal.svg';
import apple from '@/public/vectors/apple.svg';
import visa from '@/public/vectors/visa.svg';
import mastercardyellow from '@/public/vectors/mastercardyellow.svg';
import discover from '@/public/vectors/discover.svg';
import mastercardblue from '@/public/vectors/mastercardblue.svg';
import creditcards from '@/public/vectors/creditcards.svg';
import Image from 'next/image';

const PaymentForm = () => {
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
			<form className="flex flex-col gap-4 mb-8">
				<div className="flex justify-between items-center">
					<h3 className="mb-2">Credit Card</h3>
					<Image src={creditcards} alt="PayPal Icon" layout="intrinsic" className="object-contain" />
				</div>
				<div className="relative">
					<span className="absolute left-3 top-3 text-pink">💳</span>
					<input placeholder="XXXX  XXXX  XXXX  XXXX" className="w-full" />
				</div>
				<input placeholder="Name on card" className="w-full" />
				<div className="flex gap-2">
					<input placeholder="MM/YY" className="w-1/2" />
					<input placeholder="CVV/CVC" className="w-1/2" />
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
